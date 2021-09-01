const components = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    component: 'ManageDashboard',
    roles: ['ADMIN', 'SUPERADMIN', 'MANAGER'],
  },
  {
    title: 'Create Video',
    url: '/video',
    component: 'CreateVideo',
    roles: ['ADMIN', 'SUPERADMIN', 'MANAGER'],
  },
  {
    title: 'VideoScene',
    url: '/videoScene',
    component: 'VideoScene',
    roles: ['ADMIN', 'SUPERADMIN', 'MANAGER'],
  },
  // {
  //   title: 'SignUp',
  //   url: '/signup',
  //   component: 'SignUp',
  //   roles: ['ADMIN', 'SUPERADMIN', 'MANAGER'],
  // },
];
// for side bar
const sideNavigation = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    component: 'ManageDashboard',
    roles: ['ADMIN', 'MANAGER'],
    subMenu: [],
    icon: 'DashboardIcon',
  },
  {
    title: 'Video',
    url: '/video',
    component: 'CreateVideo',
    icon: 'VideoIcon',
    roles: ['ADMIN', 'SUPERADMIN', 'MANAGER'],
  },
  {
    title: 'Audio',
    url: '/audio',
    component: 'Customers',
    roles: ['ADMIN', 'SUPERADMIN', 'MANAGER'],
    icon: 'PersonIcon',
  },

  {
    title: 'Video List',
    url: '/videoList',
    component: 'VideoList',
    roles: ['ADMIN', 'SUPERADMIN', 'MANAGER'],
    icon: 'PersonIcon',
  },
  {
    title: 'Settings',
    url: '/setting',
    component: 'NewBooking',
    roles: ['ADMIN', 'MANAGER'],
    subMenu: [],
    icon: 'SettingsIcon',
  },
];

const hiddenLinkComponent = [
  {
    component: 'SaveConfiguration',
    url: '/save-config',
    roles: ['ADMIN', 'MANAGER'],
  },
];

export const rolesConfig = {
  SUPERADMIN: {
    routes: [
      ...Object.values(components).filter(
        (component) => component.roles.indexOf('SUPERADMIN') !== -1,
      ),
    ],
  },
  ADMIN: {
    routes: [
      ...Object.values(components).filter(
        (component) => component.roles.indexOf('ADMIN') !== -1,
      ),
    ],
  },
  MANAGER: {
    routes: [
      ...Object.values(components).filter(
        (component) => component.roles.indexOf('MANAGER') !== -1,
      ),
    ],
  },
};

export const sideNavRoleConfig = {
  SUPERADMIN: {
    sideNavs: [
      ...sideNavigation.filter(
        (component) => component.roles.indexOf('SUPERADMIN') !== -1,
      ),
    ],
  },
  ADMIN: {
    sideNavs: [
      ...sideNavigation.filter(
        (component) => component.roles.indexOf('ADMIN') !== -1,
      ),
    ],
  },
  MANAGER: {
    sideNavs: [
      ...sideNavigation.filter(
        (component) => component.roles.indexOf('MANAGER') !== -1,
      ),
    ],
  },
};
export const hiddenLinkRoleConfig = {
  SUPERADMIN: {
    hiddenLinks: [
      ...hiddenLinkComponent.filter(
        (component) => component.roles.indexOf('SUPERADMIN') !== -1,
      ),
    ],
  },
  ADMIN: {
    hiddenLinks: [
      ...hiddenLinkComponent.filter(
        (component) => component.roles.indexOf('ADMIN') !== -1,
      ),
    ],
  },
  MANAGER: {
    hiddenLinks: [
      ...hiddenLinkComponent.filter(
        (component) => component.roles.indexOf('MANAGER') !== -1,
      ),
    ],
  },
};
