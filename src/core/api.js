import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_API_KEY;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// --- Movies ---

export const getPopularMovies = async (page = 1) => {
  const response = await axiosInstance.get("/movie/popular", {
    params: { page },
  });
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axiosInstance.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCredits = async (id) => {
  const response = await axiosInstance.get(`/movie/${id}/credits`);
  return response.data;
};

// --- People ---

export const getPopularPeople = async (page = 1) => {
  const response = await axiosInstance.get("/person/popular", {
    params: { page },
  });
  return response.data;
};

export const getPersonDetails = async (id) => {
  const response = await axiosInstance.get(`/person/${id}`);
  return response.data;
};

export const getPersonMovieCredits = async (id) => {
  const response = await axiosInstance.get(`/person/${id}/movie_credits`);
  return response.data;
};

// --- Search ---

export const searchMovies = async (query, page = 1) => {
  const response = await axiosInstance.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return response.data;
};

export const searchPeople = async (query, page = 1) => {
  const response = await axiosInstance.get("/search/person", {
    params: {
      query,
      page,
    },
  });
  return response.data;
};