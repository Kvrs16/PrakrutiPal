import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api/movieApi";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };

    getMovieDetails();
  }, [id]);

  return movie ? (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default MovieDetails;
