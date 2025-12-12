import { call, put, takeLatest, delay, all } from "redux-saga/effects";
import { getPopularPeople, getPersonDetails, getPersonMovieCredits } from "../../core/api";
import {
  fetchPopularPeople,
  fetchPopularPeopleSuccess,
  fetchPopularPeopleError,
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
  yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
}