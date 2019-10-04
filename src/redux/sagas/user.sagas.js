import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';
import {loadUserSuccess} from '../actions/user.actions';

function fetchUserProfile() {
  return axios.get(
    'https://reqres.in/api/users/2'
  );
}

export function* workerGetUser() {
  try {
    let resp = yield call(fetchUserProfile);

    yield put(loadUserSuccess(resp.data))
  } catch (e) {
    console.error(e);
  }
}

export function* watchGetUser() {
  yield takeEvery('LOAD_USER', workerGetUser);
}
