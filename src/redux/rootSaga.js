import { all } from "redux-saga/effects";

import { watchGetTableResults } from "./sagas/table.sagas";
export default function* rootSaga() {
  yield all([watchGetTableResults()]);
}
