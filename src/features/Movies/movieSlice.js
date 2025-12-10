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
  },
});

export const {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectMovieList = (state) => selectMoviesState(state).movieList;
export const selectStatus = (state) => selectMoviesState(state).status;
export const selectPage = (state) => selectMoviesState(state).page;

export const selectMovieDetails = (state) => selectMoviesState(state).movieDetails;
export const selectMovieCredits = (state) => selectMoviesState(state).movieCredits;
export const selectDetailsStatus = (state) => selectMoviesState(state).detailsStatus;

export default moviesSlice.reducer;