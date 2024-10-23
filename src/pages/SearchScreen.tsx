import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { fetchMovies } from "../services/movieService";
import { useDebounce } from "../hooks/useDebounce";
import Header from "../components/shared/Header";

interface SearchHistoryEntry {
  query: string;
  timestamp: string;
}

const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const debouncedQuery = useDebounce(query, 500);
  const [loading, setLoading] = useState(false);

  const addSearchToHistory = (query: string) => {
    const currentHistory: SearchHistoryEntry[] = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    );

    const newHistoryEntry: SearchHistoryEntry = {
      query,
      timestamp: new Date().toISOString(),
    };

    const updatedHistory = [newHistoryEntry, ...currentHistory];

    // Limit the history to the last 10 searches
    if (updatedHistory.length > 10) {
      updatedHistory.pop();
    }

    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const getAllMovies = async (debouncedQuery: string) => {
    setLoading(true);
    try {
      let res = await fetchMovies(debouncedQuery);
      setMovies(res);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (debouncedQuery) {
      getAllMovies(debouncedQuery);
      addSearchToHistory(debouncedQuery);
    } else {
      setMovies([]);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <Header isHome={true}/>
      <SearchBar query={query} onSearch={setQuery} />
      <MovieList loading={loading} movies={movies} />
    </div>
  );
};

export default SearchScreen;
