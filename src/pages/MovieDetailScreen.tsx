import React from "react";
import Header from "../components/shared/Header";
import MovieDetails from "../components/MovieDetails";

const MovieDetailScreen: React.FC = () => {
  return (
    <>
      <Header isHome={false} />
      <MovieDetails />
    </>
  );
};

export default MovieDetailScreen;
