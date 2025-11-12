const ErrorDisplay = ({ error }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-600 p-6 rounded-lg shadow-lg mt-6">
      <div className="flex items-start space-x-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <h3 className="text-xl font-bold mb-2 text-red-800 dark:text-red-300">
            Error
          </h3>
          <p className="text-red-700 dark:text-red-200">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;

