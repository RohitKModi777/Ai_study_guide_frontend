import { useState } from 'react';

const QuizSection = ({ quiz, mode }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});

  if (!quiz) {
    return null;
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const toggleAnswer = (questionIndex) => {
    setShowAnswers({
      ...showAnswers,
      [questionIndex]: !showAnswers[questionIndex]
    });
  };

  if (mode === 'math') {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Math Question</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-lg font-medium mb-3 dark:text-gray-200">
              {quiz.question}
            </p>
          </div>
          
          <button
            onClick={() => toggleAnswer('math')}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            {showAnswers['math'] ? 'Hide Answer' : 'Show Answer'}
          </button>

          {showAnswers['math'] && (
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="font-semibold mb-2 dark:text-green-300">Answer:</p>
                <p className="dark:text-green-200">{quiz.answer}</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="font-semibold mb-2 dark:text-blue-300">Explanation:</p>
                <p className="dark:text-blue-200">{quiz.explanation}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Quiz</h2>
      <div className="space-y-6">
        {quiz.map((question, questionIndex) => (
          <div key={questionIndex} className="space-y-3">
            <p className="text-lg font-medium dark:text-gray-200">
              {questionIndex + 1}. {question.question}
            </p>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => {
                const isSelected = selectedAnswers[questionIndex] === optionIndex;
                const isCorrect = optionIndex === question.correctAnswer;
                const showResult = showAnswers[questionIndex];

                let buttonClass = 'w-full text-left px-4 py-2 rounded-lg border-2 transition-colors ';
                
                if (showResult) {
                  if (isCorrect) {
                    buttonClass += 'bg-green-100 border-green-500 dark:bg-green-900/30 dark:border-green-500';
                  } else if (isSelected && !isCorrect) {
                    buttonClass += 'bg-red-100 border-red-500 dark:bg-red-900/30 dark:border-red-500';
                  } else {
                    buttonClass += 'bg-gray-50 border-gray-300 dark:bg-gray-700 dark:border-gray-600';
                  }
                } else {
                  buttonClass += isSelected
                    ? 'bg-blue-100 border-blue-500 dark:bg-blue-900/30 dark:border-blue-500'
                    : 'bg-gray-50 border-gray-300 hover:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-600';
                }

                return (
                  <button
                    key={optionIndex}
                    onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                    className={buttonClass}
                    disabled={showResult}
                  >
                    <span className="font-medium mr-2">
                      {String.fromCharCode(65 + optionIndex)}.
                    </span>
                    <span className={showResult && isCorrect ? 'font-semibold' : ''}>
                      {option}
                    </span>
                    {showResult && isCorrect && (
                      <span className="ml-2 text-green-600 dark:text-green-400">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => toggleAnswer(questionIndex)}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
            >
              {showAnswers[questionIndex] ? 'Hide Answer' : 'Check Answer'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSection;

