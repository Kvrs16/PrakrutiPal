import axios from "axios";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Search: [] };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return {};
  }
};
