import { all, fork, takeLatest, call } from 'redux-saga/effects'
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data) // 실제로 서버에 요청
}

// call: 동기 함수 호출, fork: 비동기 함수 호출
function* logIn(action) {
  try {
    console.log('saga logIn');
    // const result = yield call(logInAPI) // 요청의 결과를 받음
    yield delay(2000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/api/logout') // 실제로 서버에 요청
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI) // 요청의 결과를 받음
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ]);
}