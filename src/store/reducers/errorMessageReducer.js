import * as type from '../types';

const initialState = {
  error: false,
  flagType: '',
  errorMessage: '',
};

function errorMessageReducer(state = initialState, action) {
  switch (action.type) {
    case type.SHOW_ERROR:
      return {
        ...state,
        error: true,
        flagType: action.data.flagType,
        errorMessage: action.data.msg,
      };
    case type.HIDE_ERROR:
      return {
        ...state,
        error: false,
        flagType: '',
        errorMessage: '',
      };
    default:
      return state;
  }
}

export default errorMessageReducer;
