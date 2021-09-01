import { takeLatest } from 'redux-saga/effects';
import * as type from '../types';
// import { envUrl, endPoint } from '../../utils/constants';
// import {
//   getCall,
//   //   postCalls,
//   // putCall,
//   // deleteCall,
// } from '../../utils/apiSignature';
// const loginFormSate = (state) => state.form.LoginForm.values;

function* createVideo(action) {
  // const loginForm = yield select(loginFormSate);
  yield console.log('cideos saga: ', action.data, ': : : : ');

  // const { response, error } = yield call(
  //   getCall,
  //   `${envUrl.baseUrl}${endPoint.getCustomerAddress}/${action.data}`,
  // );
  // if (error) {
  //   yield console.log('err :', error);
  // }
  // // yield console.log('res user login is  :', response);
  // if (response) {
  //   yield put({
  //     type: type.CUSTOMER.SAVE_ADDRESS,
  //     payload: response.addressList,
  //   });
  // } else {
  //   const data = {
  //     msg: error,
  //     flagType: 'error',
  //   };
  //   yield put({ type: type.SHOW_ERROR, data });
  // }
}

export default function* createVideoWatcher() {
  yield takeLatest(type.VIDEO.CREATE, createVideo);
}
