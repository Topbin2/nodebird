import { all, fork, takeLatest, call, put, delay } from "redux-saga/effects";
import axios from "axios";





export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchAddPost)]);
}
