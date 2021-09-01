import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import videoSaga from './videoSaga';
// import customerSaga from './customerSaga';

export default function* rootSaga() {
  yield all([loginSaga(), videoSaga()]);
}
