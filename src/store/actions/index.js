import * as types from '../types';

export const userLogin = (data) => ({
  type: types.USER.LOGIN,
  data,
});

export const userSignup = (data) => ({
  type: types.USER.SIGNUP,
  data,
});

export const userLogout = (data) => ({
  type: types.USER.LOGOUT,
  data,
});
export const createVideo = (data) => {
  console.log('create vieo action', data);
  return {
    type: types.VIDEO.CREATE,
    data,
  };
};
