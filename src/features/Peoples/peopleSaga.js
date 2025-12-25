import { call, put, takeLatest, delay, all } from "redux-saga/effects";
import { getPopularPeople, getPersonDetails, getPersonMovieCredits, searchPeople } from "../../core/api";
import {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
  fetchSearchPeople,
  fetchSearchPeopleSuccess,
  fetchSearchPeopleError,
  fetchPersonDetails,
  fetchPersonDetailsSuccess,
  fetchPersonDetailsError,
} from "./peopleSlice";

// Worker dla Listy
function* fetchPopularPeopleHandler({ payload: page }) {
  try {
    yield delay(500);
    const people = yield call(getPopularPeople, page);
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

// Worker dla Wyszukiwarki
function* fetchSearchPeopleHandler({ payload: { query, page } }) {
  try {
    yield delay(500);
    const people = yield call(searchPeople, query, page);
    yield put(fetchSearchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchSearchPeopleError());
  }
}

// Worker dla Profilu
function* fetchPersonDetailsHandler({ payload: id }) {
  try {
    yield delay(500);
    const [details, credits] = yield all([
      call(getPersonDetails, id),
      call(getPersonMovieCredits, id),
    ]);
    yield put(fetchPersonDetailsSuccess({ details, credits }));
  } catch (error) {
    yield put(fetchPersonDetailsError());
  }
}

// Watcher
export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchSearchPeople.type, fetchSearchPeopleHandler);
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}