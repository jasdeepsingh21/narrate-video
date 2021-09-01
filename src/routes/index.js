import React from 'react';
// import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ErrorSnackbar from '../Uikit/Snackbar';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { getLocalStorage } from '../utils/factory';
import { HOME_PAGE } from '../utils/constants';

const authenticate = () => {
  console.log('CALLING AUTH ...');
  const user = getLocalStorage('user');
  const role = user && user.role;
  console.log(
    'in authenticate role and user is :',
    role,
    'user :',
    user,
  );
  if (role) {
    console.log('HOME_PAGE[role] :', HOME_PAGE[role]);

    return <Redirect to={HOME_PAGE[role]} />;
  }
  return <PublicRoutes />;
};

const Routes = (props) => {
  const { history } = props;

  const { error } = useSelector((store) => store.error);

  return (
    <Router history={history}>
      <Switch>
        <Route path="/app" component={PrivateRoutes} />
        <Route path="/" render={authenticate} />
      </Switch>
      {error && <ErrorSnackbar />}
    </Router>
  );
};

export default Routes;
