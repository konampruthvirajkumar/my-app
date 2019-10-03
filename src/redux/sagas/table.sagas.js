import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";
import {loadTableResultsSuccess} from '../actions/table.actions';

function fetchQuakes() {
  return axios.get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
  );
}

export function* workerGetTableResults() {
  try {
    console.log("handleLoadQuakes");
    let resp = yield call(fetchQuakes);

    yield put(loadTableResultsSuccess(resp.data))
  } catch (e) {
    console.error(e);
  }
}

export function* watchGetTableResults() {
  yield takeEvery("LOAD_TABLE_RESULTS", workerGetTableResults);
}
