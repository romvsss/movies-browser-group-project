import { call, put, takeLatest, delay, all } from "redux-saga/effects";
import { getPopularMovies, getMovieDetails, getMovieCredits, searchMovies,  getMovieGenres } from "../../core/api";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
  fetchSearchMovies,
  fetchSearchMoviesSuccess,
  fetchSearchMoviesError,
  fetchGenres,
  fetchGenresSuccess,
  fetchGenresError,
} from "./movieSlice";

// Worker dla Listy
function* fetchPopularMoviesHandler({ payload: page }) {
  try {
    yield delay(500); // Symulacja ładowania
    const movies = yield call(getPopularMovies, page);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

// Worker dla Szczegółów 
function* fetchMovieDetailsHandler({ payload: id }) {
  try {
    yield delay(500);
    const [details, credits] = yield all([
      call(getMovieDetails, id),
      call(getMovieCredits, id),
    ]);
    yield put(fetchMovieDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchMovieDetailsError());
  }
}

// Worker dla Wyszukiwania filmów
function* fetchSearchMoviesHandler({ payload }) {
  const { query, page } = payload; 
  try {
    yield delay(500);
    const movies = yield call(searchMovies, query, page);
    yield put(fetchSearchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchSearchMoviesError());
  }
}

// Worker dla Wyszukiwania genre
function* fetchGenresHandler() {
  try {
    const data = yield call(getMovieGenres);
    const genresMap = {};
    data.genres.forEach((genre) => {
      genresMap[genre.id] = genre.name;
    });

    yield put(fetchGenresSuccess(genresMap));
  } catch (error) {
    yield put(fetchGenresError());
  }
}


// Watcher
export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeLatest(fetchSearchMovies.type, fetchSearchMoviesHandler);
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}