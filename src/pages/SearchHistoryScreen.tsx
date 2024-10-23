import React from "react";
import Header from "../components/shared/Header";
import SearchHistory from "../components/SearchHistory";

const SearchHistoryScreen: React.FC = () => {
  return (
    <>
      <Header isHome={false} />
      <SearchHistory />
    </>
  );
};

export default SearchHistoryScreen;
