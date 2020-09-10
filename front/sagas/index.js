import { all, fork, take, call, put } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data) // 실제로 서버에 요청
}

call(logInAPI, action.data);
// call: 동기 함수 호출, fork: 비동기 함수 호출
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data) // 요청의 결과를 받음
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data
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
    const result = yield call(logOutAPI) // 요청의 결과를 받음
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data) // 실제로 서버에 요청
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data) // 요청의 결과를 받음
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogIn), // call
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}