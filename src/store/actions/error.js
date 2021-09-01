import * as types from '../types';

export const showError = (data) => ({
  type: types.SHOW_ERROR,
  data,
});
export const hideError = () => ({
  type: types.HIDE_ERROR,
});
