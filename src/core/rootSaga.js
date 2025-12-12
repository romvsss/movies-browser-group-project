import { all } from "redux-saga/effects";
import { moviesSaga } from "../features/Movies/movieSaga";
import { peopleSaga } from "../features/Peoples/peopleSaga";

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    peopleSaga(),
  ]);
}