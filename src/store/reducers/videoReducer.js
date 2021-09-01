import * as types from '../types';

const videoReducer = (state = {}, action) => {
  switch (action.type) {
    case types.VIDEO.SAVE:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};

export default videoReducer;
