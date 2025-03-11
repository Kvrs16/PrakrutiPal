import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import { fetchMovies } from "../api/movieApi";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const data = await fetchMovies(query);
    setMovies(data.Search || []);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieGrid movies={movies} />
    </div>
  );
};

export default Home;
