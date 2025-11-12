import { useState, useEffect } from 'react';
import StudyForm from './components/StudyForm';
import SummarySection from './components/SummarySection';
import QuizSection from './components/QuizSection';
import StudyTip from './components/StudyTip';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import { fetchStudyData } from './services/api';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [topic, setTopic] = useState('');
  const [mode, setMode] = useState('default');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [studyData, setStudyData] = useState(null);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const [history, setHistory] = useLocalStorage('studyHistory', []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setLoading(true);
    setError(null);
    setStudyData(null);

    try {
      const data = await fetchStudyData(topic.trim(), mode);
      setStudyData(data);
      
      // Add to history
      const newHistoryItem = {
        topic: topic.trim(),
        mode,
        timestamp: new Date().toISOString()
      };
      const updatedHistory = [newHistoryItem, ...history.filter(item => item.topic !== topic.trim())].slice(0, 10);
      setHistory(updatedHistory);
    } catch (err) {
      setError(err.message || 'Failed to fetch study data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleHistoryClick = (historyTopic, historyMode) => {
    setTopic(historyTopic);
    setMode(historyMode);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode 
        ? 'bg-gray-900 text-gray-100' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Study Assistant
          </h1>
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Study Form */}
        <StudyForm
          topic={topic}
          mode={mode}
          onTopicChange={setTopic}
          onModeChange={setMode}
          onSubmit={handleSubmit}
          loading={loading}
        />

        {/* History Section */}
        {history.length > 0 && (
          <div className={`mt-6 p-4 rounded-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Recent Topics</h2>
              <button
                onClick={clearHistory}
                className="text-sm text-red-500 hover:text-red-600"
              >
                Clear
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {history.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleHistoryClick(item.topic, item.mode)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    darkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                >
                  {item.topic} {item.mode === 'math' && '🧮'}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && <LoadingSpinner />}

        {/* Error Display */}
        {error && <ErrorDisplay error={error} />}

        {/* Study Data Display */}
        {studyData && !loading && (
          <div className="mt-8 space-y-6">
            {studyData.mode === 'math' ? (
              <>
                <QuizSection quiz={studyData.mathQuestion} mode="math" />
                <StudyTip tip={studyData.studyTip} />
              </>
            ) : (
              <>
                <SummarySection summary={studyData.summary} />
                <QuizSection quiz={studyData.quiz} mode="default" />
                <StudyTip tip={studyData.studyTip} />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

