import * as types from '../types';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case types.USER.SAVED_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case types.USER.SIGNUP:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
