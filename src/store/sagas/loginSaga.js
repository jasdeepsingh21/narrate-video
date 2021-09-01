import { takeLatest, put } from 'redux-saga/effects';
import * as type from '../types';
// import { envUrl, endPoint } from '../../utils/constants';
// import { postCall } from '../../utils/apiSignature';
import {
  clearLocalStorage,
  setLocalStorage,
} from '../../utils/factory';

function* userLogin(action) {
  // const { response, error } = yield call(
  //   postCall,
  //   `${envUrl.baseUrl}${endPoint.login}`,
  //   action.data,
  // );
  console.log('res user login is  :', action);
  if (action) {
    setLocalStorage('x-auth-token', '123#');
    setLocalStorage('user', {
      userName: 'admin',
      role: 'ADMIN',
    });

    yield put({
      type: type.USER.SAVED_DATA,
      payload: action,
    });

    const data = {
      msg: 'User authenticated !',
      flagType: 'success',
    };
    yield put({ type: type.SHOW_ERROR, data });
  } else {
    // console.log('ERROR OCCURED :::::', error);
    const data = {
      msg: 'not valid',
      flagType: 'error',
    };
    yield put({ type: type.SHOW_ERROR, data });
  }
}

function* userLogout(action) {
  clearLocalStorage();
  action.data.history.push('/');
  const data = {
    msg: 'Logout Successfuly !',
    flagType: 'success',
  };
  yield put({ type: type.SHOW_ERROR, data });
}
export default function* loginWatcher() {
  yield takeLatest(type.USER.LOGIN, userLogin);
  yield takeLatest(type.USER.LOGOUT, userLogout);
}
