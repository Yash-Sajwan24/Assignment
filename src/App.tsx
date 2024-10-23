import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchScreen from "./pages/SearchScreen";
import MovieDetailScreen from "./pages/MovieDetailScreen";
import SearchHistoryScreen from "./pages/SearchHistoryScreen";

const App: React.FC = () => {
  return (
    <div className="bg-[#07071e] min-h-screen">
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<SearchScreen />} />
          <Route path="/movie/:id" element={<MovieDetailScreen />} />
          <Route path="/history" element={<SearchHistoryScreen />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
