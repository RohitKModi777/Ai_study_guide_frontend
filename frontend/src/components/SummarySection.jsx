const SummarySection = ({ summary }) => {
  if (!summary || summary.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Summary</h2>
      <ul className="space-y-3">
        {summary.map((point, index) => (
          <li 
            key={index} 
            className="flex items-start space-x-3 dark:text-gray-200"
          >
            <span className="text-blue-600 dark:text-blue-400 font-bold mt-1">
              •
            </span>
            <span className="flex-1">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummarySection;

