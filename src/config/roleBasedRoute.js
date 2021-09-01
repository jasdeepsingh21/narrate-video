import { rolesConfig, sideNavRoleConfig } from './roles';
import { getLocalStorage } from '../utils/factory';

export const getRoleBasedRoutes = (role) => {
  if (!role) return [];
  // const user = getLocalStorage('user');
  // const { role } = user;
  /* const allowedRoutes =
    (rolesConfig &&
      role &&
      rolesConfig[role] &&
      rolesConfig[role].routes) ||
    []; */
  return rolesConfig[role].routes;
};

export const getRoleBasedSideNav = () => {
  const user = getLocalStorage('user');
  const role = user && user.role;
  const allowedSideNav =
    (sideNavRoleConfig &&
      role &&
      sideNavRoleConfig[role] &&
      sideNavRoleConfig[role].sideNavs) ||
    [];
  return allowedSideNav;
};
