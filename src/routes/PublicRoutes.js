import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Tnc from '../views/Tnc';
import Login from '../views/Login/index';
import SignUp from '../views/SignUp';
import NotFound from '../components/common/PageNotFound';

const PublicRoutes = () => {
  console.log('IN PUBLIC ROUTES=====');
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/tnc" component={Tnc} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default PublicRoutes;
