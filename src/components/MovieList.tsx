import React from "react";
import { Link } from "react-router-dom";
import Loader from "./shared/Loader";
import { Search } from "lucide-react";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
}

interface MovieListProps {
  loading: boolean;
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ loading, movies }) => {
  return (
    <>
      <div className="text-white my-5 flex justify-center items-center w-full">
        {loading ? (
          <Loader />
        ) : (
          <ul className="w-1/2">
            {movies.map((movie) => (
              <li
                className=" m-1 p-2 hover:bg-cyan-700 rounded-lg "
                key={movie.imdbID}
              >
                <Link to={`/movie/${movie.imdbID}`}>
                  <div className="flex justify-between">
                    <div>
                      {movie.Title} ({movie.Year})
                    </div>
                    <Search />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MovieList;
