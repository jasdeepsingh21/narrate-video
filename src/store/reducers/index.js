import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import errorMessageReducer from './errorMessageReducer';
import userReducer from './userReducer';
import videoReducer from './videoReducer';

const appReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  error: errorMessageReducer,
  videoReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_SIGNOUT') {
    console.log(
      'in emptu store :_++++++============================>',
    );
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
