const StudyTip = ({ tip }) => {
  if (!tip) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-yellow-600 dark:to-orange-600 p-6 rounded-lg shadow-lg">
      <div className="flex items-start space-x-3">
        <span className="text-2xl">💡</span>
        <div>
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            Study Tip
          </h3>
          <p className="text-gray-800 dark:text-gray-200">{tip}</p>
        </div>
      </div>
    </div>
  );
};

export default StudyTip;

