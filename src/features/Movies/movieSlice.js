import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // Stan dla Listy Filmów
    movieList: [],
    status: "initial",
    page: 1,
    totalPages: 0,
    totalResults: 0,

    // Stan dla Szczegółów Filmu
    movieDetails: null,
    movieCredits: null,
    detailsStatus: "initial",
  },
  reducers: {
    // --- LISTA ---
    fetchPopularMovies: (state, { payload: page }) => {
      state.status = "loading";
      state.page = page;
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.status = "success";
      state.movieList = movies.results;
      state.totalPages = movies.total_pages;
      state.totalResults = movies.total_results;
    },
    fetchPopularMoviesError: (state) => {
      state.status = "error";
    },

    // --- SZCZEGÓŁY ---
    fetchMovieDetails: (state) => {
      state.detailsStatus = "loading";
    },
    fetchMovieDetailsSuccess: (state, { payload }) => {
      state.detailsStatus = "success";
      state.movieDetails = payload.details;
      state.movieCredits = payload.credits;
    },
    fetchMovieDetailsError: (state) => {
      state.detailsStatus = "error";
    },

    // --- SEARCH MOVIES ---
    fetchSearchMovies: (state, { payload }) => {
      state.status = "loading";
      state.page = payload.page;
    },
    fetchSearchMoviesSuccess: (state, { payload }) => {
      state.status = "success";
      state.movieList = payload.results;
      state.totalPages = payload.total_pages;
      state.totalResults = payload.total_results;
    },
    fetchSearchMoviesError: (state) => {
      state.status = "error";
    },
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchSearchMovies,
  fetchSearchMoviesSuccess,
  fetchSearchMoviesError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovieList = (state) => selectMoviesState(state).movieList;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectPage = (state) => selectMoviesState(state).page;
export const selectTotalPages = (state) => selectMoviesState(state).totalPages;

export const selectMovieDetails = (state) =>
  selectMoviesState(state).movieDetails;
export const selectMovieCredits = (state) =>
  selectMoviesState(state).movieCredits;
export const selectDetailsStatus = (state) =>
  selectMoviesState(state).detailsStatus;
export const selectTotalResults = (state) =>
  selectMoviesState(state).totalResults;

export default moviesSlice.reducer;
