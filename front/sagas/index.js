import { all, fork, take, call, put } from "redux-saga/effects";
import axios from "axios";

function logInAPI() {
  return axios.post("/api/login");
}

function* logIn() {
  const result = yield call(logInAPI);
  yield put({
    type: "LOG_IN_SUCCESS",
    data: result.data,
  });
}

function* watchLogin() {
  yield take("LOG_IN", logIn);
}

function* watchLogout() {
  yield take("LOG_OUT");
}

function* watchAddPost() {
  yield take("ADD_POST");
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchAddPost)]);
}
