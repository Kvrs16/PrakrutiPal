import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  return (
    <div>
      {movies.length ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieGrid;
