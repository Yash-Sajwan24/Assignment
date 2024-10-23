import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./shared/Loader";
import { fetchMovieDetails } from "../services/movieService";

interface MovieDetailProps {
  Title: string;
  Year: string;
  Poster: string;
  Plot: string;
  Director: string;
  Actors: string;
  Genre: string;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await fetchMovieDetails(id!);
        setMovie(movieData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <Loader />
      </div>
    );
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-96 ">
        {movie && (
          <>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <h1 className="text-xl font-bold mb-2">
                {movie.Title} ({movie.Year})
              </h1>
              <p className="text-gray-700">
                <strong>Director:</strong> {movie.Director}
              </p>
              <p className="text-gray-700">
                <strong>Actors:</strong> {movie.Actors}
              </p>
              <p className="text-gray-700">
                <strong>Genre:</strong> {movie.Genre}
              </p>
              <p className="text-gray-700 mt-4">{movie.Plot}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
