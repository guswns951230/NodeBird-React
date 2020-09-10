import axios from 'axios';
import { delay, put, takeLatest, all, fork } from "redux-saga/effects";

function addPostAPI(data) {
  return axios.post('/api/post', data) // 실제로 서버에 요청
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data) // 요청의 결과를 받음
    yield delay(1000);
    yield put({
      type: 'ADD_POST_SUCCESS',
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}