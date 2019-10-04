import { put, takeEvery, call, select } from "redux-saga/effects";
import axios from "axios";
import { loadTableResultsSuccess } from "../actions/table.actions";
import { getUser } from "../selectors/user.selectors";

function fetchQuakes() {
  return axios.get(
    "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"
  );
}

export function* workerCreatePreflight(action) {
  try {
    console.log("form", action);
    let test = yield select(getUser);
    console.log(test);
    let resp = yield call(fetchQuakes);

    yield put(loadTableResultsSuccess(resp.data));
  } catch (e) {
    console.error(e);
  }
}

export function* watchCreatePreflight() {
  yield takeEvery("CREATE_PREFLIGHT", workerCreatePreflight);
}
