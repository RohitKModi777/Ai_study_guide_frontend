const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin dark:border-blue-800 dark:border-t-blue-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="text-blue-600 dark:text-blue-400 font-semibold">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

