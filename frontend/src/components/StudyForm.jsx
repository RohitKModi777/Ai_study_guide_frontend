const StudyForm = ({ topic, mode, onTopicChange, onModeChange, onSubmit, loading }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={`p-6 rounded-lg shadow-lg ${
        mode === 'default' 
          ? 'bg-white dark:bg-gray-800' 
          : 'bg-white dark:bg-gray-800'
      }`}>
        {/* Topic Input */}
        <div className="mb-4">
          <label 
            htmlFor="topic" 
            className="block text-sm font-medium mb-2 dark:text-gray-200"
          >
            Study Topic
          </label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => onTopicChange(e.target.value)}
            placeholder="Enter a topic (e.g., Quantum Physics, Algebra, History)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            disabled={loading}
          />
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center justify-between mb-4">
          <label 
            htmlFor="mode" 
            className="text-sm font-medium dark:text-gray-200"
          >
            Math Mode
          </label>
          <div className="relative inline-block w-12 h-6">
            <input
              type="checkbox"
              id="mode"
              checked={mode === 'math'}
              onChange={(e) => onModeChange(e.target.checked ? 'math' : 'default')}
              className="sr-only"
              disabled={loading}
            />
            <label
              htmlFor="mode"
              className={`block h-6 rounded-full cursor-pointer transition-colors ${
                mode === 'math' 
                  ? 'bg-blue-600' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            >
              <span
                className={`block w-5 h-5 rounded-full bg-white transform transition-transform mt-0.5 ml-0.5 ${
                  mode === 'math' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !topic.trim()}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
            loading || !topic.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {loading ? 'Generating...' : 'Generate Study Guide'}
        </button>
      </div>
    </form>
  );
};

export default StudyForm;

