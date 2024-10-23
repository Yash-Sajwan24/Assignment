import React from "react";

interface SearchHistoryEntry {
  query: string;
  timestamp: string;
}

const SearchHistory: React.FC = () => {
  const history: SearchHistoryEntry[] = JSON.parse(
    localStorage.getItem("searchHistory") || "[]"
  );

  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg w-96 p-6">
        <h2 className="text-xl font-bold mb-4">Search History</h2>
        <ul className="divide-y divide-gray-200">
          {history.length > 0 ? (
            history.map((entry, index) => (
              <li key={index} className="py-2">
                <p className="text-gray-800">{entry.query}</p>
                <p className="text-sm text-gray-500">
                  Searched on: {new Date(entry.timestamp).toLocaleString()}
                </p>
              </li>
            ))
          ) : (
            <p className="text-gray-600">No search history found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchHistory;
