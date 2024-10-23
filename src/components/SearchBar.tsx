import React from "react";
interface SearchBarProps {
  query: string;
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <>
      <div className="text-cyan-200 text-3xl text-center my-5 ">
        🍿Search for your Favourite Movies
      </div>
      <div className="flex justify-center items-center ">
        <input
          className="p-3 rounded-lg w-1/2"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for a movie..."
        />
      </div>
    </>
  );
};

export default SearchBar;
