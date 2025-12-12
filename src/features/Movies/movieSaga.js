import { call, put, takeLatest, delay, all } from "redux-saga/effects";
import { getPopularMovies, getMovieDetails, getMovieCredits } from "../../core/api";
import {
  fetchPopularMovies,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesError,
  fetchMovieDetails,
  fetchMovieDetailsSuccess,
  fetchMovieDetailsError,
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

// Watcher
export function* moviesSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
}