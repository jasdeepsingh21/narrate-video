import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { uniqBy } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import {
  hiddenLinkRoleConfig,
  rolesConfig,
  sideNavRoleConfig,
} from '../config/roles';

import { getLocalStorage } from '../utils/factory';
import * as RouteComponents from './RouteComponents';
import Header from '../components/common/Header';
import NotFound from '../components/common/PageNotFound';
import Sidebar from '../components/common/Sidebar';

const PrivateRoutes = ({ history, match: { path } }) => {
  const [allowedRoutes, setAllowedRoutes] = useState([]);
  const [allowedSidebarLinks, setAllowedSidebarLinks] = useState([]);
  const [allowedHiddenLinks, setAllowedHiddenLinks] = useState([]);
  const [toggleNav, setToggleNav] = useState(false);

  const toggleSideBar = () => {
    setToggleNav(!toggleNav);
    const sideNav =
      document.getElementById('sideBar').firstElementChild;
    sideNav.classList.toggle('short-sidebar');
  };
  useEffect(() => {
    const accessToken = getLocalStorage('x-auth-token');
    const user = getLocalStorage('user');
    const role = user && user.role;

    if (role && accessToken) {
      setAllowedRoutes(uniqBy(rolesConfig[role].routes, 'url'));
      setAllowedSidebarLinks(
        uniqBy(sideNavRoleConfig[role].sideNavs, 'url'),
      );
      setAllowedHiddenLinks(
        uniqBy(hiddenLinkRoleConfig[role].hiddenLinks, 'url'),
      );
    } else {
      history.push('/');
      // console.log(
      //   'uniqBy(rolesConfig[role].routes :  :: ',
      //   rolesConfig[role].routes,
      // );
      // setAllowedRoutes(uniqBy(rolesConfig[role].routes, 'url'));
    }
  }, [history]);

  return (
    <Grid container direction="row" className="container-body">
      <Grid item className="header-container">
        <Header toggleSideNav={toggleSideBar} />
      </Grid>
      <Grid item>
        <Sidebar />
      </Grid>
      <Grid
        item
        md={12}
        className={`main-container ${
          toggleNav && 'full-main-content'
        }`}
      >
        <Switch>
          {allowedRoutes.map((route) => {
            return (
              <Route
                exact
                key={route.url}
                component={RouteComponents[route.component]}
                path={`${path}${route.url}`}
              />
            );
          })}
          {allowedSidebarLinks.map((route) => {
            return (
              <Route
                exact
                key={route.url}
                component={RouteComponents[route.component]}
                path={`${path}${route.url}`}
              />
            );
          })}
          {/* Hidden Links Route Components */}
          {allowedHiddenLinks.map((route) => {
            return (
              <Route
                exact
                key={route.url}
                component={RouteComponents[route.component]}
                path={`${path}${route.url}`}
              />
            );
          })}
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </Grid>
  );
};

export default PrivateRoutes;
