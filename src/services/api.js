import axios from "axios";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTNjZTNmNjZkZWIyYzVhODFiYWZkOGViNWJkZjlmYSIsIm5iZiI6MTczODg1NDEwMi40ODYsInN1YiI6IjY3YTRjZWQ2YmYzNjA0MGM1ZDg1YzZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PQ7U32GwCQucwvBW6UX_Km9kHnv3hlZlsQeDWjJ6Lns";
const BASE_URL = "https://api.themoviedb.org/3";
const HEADERS = {
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    HEADERS
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`,
    HEADERS
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
    HEADERS
  );
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
    HEADERS
  );
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
    HEADERS
  );
  return response.data.results;
};
