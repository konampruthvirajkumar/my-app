import { all } from "redux-saga/effects";

import { watchGetTableResults } from "./sagas/table.sagas";
import { watchGetUser } from "./sagas/user.sagas";
export default function* rootSaga() {
  yield all([watchGetTableResults()]);
  yield all([watchGetUser()]);
}
