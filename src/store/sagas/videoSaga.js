import { takeLatest, call } from 'redux-saga/effects';
import * as type from '../types';

import { envUrl, endPoint } from '../../utils/constants';
import {
  // getCall,
  postCall,
  // putCall,
  // deleteCall,
} from '../../utils/apiSignature';

// const loginFormSate = (state) => state.form.LoginForm.values;

function* createVideo(action) {
  // const loginForm = yield select(loginFormSate);
  yield console.log('video saga: ', action.data, ': : : : ');

  const { response, error } = yield call(
    postCall,
    `${envUrl.baseUrl}${endPoint.createVideo}`,
    action.data,
  );
  console.log('res user login is  :', response);
  if (response) {
    console.log('res :', response);
    // yield put({
    //   type: type.VIDEO.SAVE,
    //   payload: response.data,
    // });
  } else {
    const data = {
      msg: error,
      flagType: 'error',
    };
    console.log(' erro :', data);
    // yield put({ type: type.SHOW_ERROR, data });
  }
}

export default function* customerSaga() {
  yield takeLatest(type.VIDEO.CREATE, createVideo);

  //   yield takeLatest(type.BOOKING.SAVE, saveSingleBooking);
}
