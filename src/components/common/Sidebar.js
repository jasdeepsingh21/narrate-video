import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link, useLocation } from 'react-router-dom';
import { ListItemIcon, Tooltip } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import VideocamIcon from '@material-ui/icons/Videocam';

import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { getRoleBasedSideNav } from '../../config/roleBasedRoute';

function Sidebar() {
  const sideNav = getRoleBasedSideNav();

  const location = useLocation();
  const sideIcon = (icon) => {
    switch (icon) {
      case 'DashboardIcon':
        return (
          <Tooltip title="Dashboard" placement="right">
            <DashboardIcon />
          </Tooltip>
        );
      case 'VideoIcon':
        return (
          <Tooltip title="Person" placement="right">
            <VideocamIcon />
          </Tooltip>
        );
      case 'SettingsIcon':
        return (
          <Tooltip title="Configurations" placement="right">
            <SettingsIcon />
          </Tooltip>
        );
      default:
        return (
          <Tooltip title="Analytics" placement="right">
            <AssessmentOutlinedIcon />
          </Tooltip>
        );
    }
  };

  return (
    <Drawer
      variant="permanent"
      // open={toggleNav}
      id="sideBar"
      className="sidebar-conatiner"
    >
      <List component="nav" aria-label="mailbox folders">
        {sideNav.map((navItem) => {
          return (
            <Link
              to={`/app${navItem.url}`}
              className={`side-nav-link ${
                location.pathname
                  .toLowerCase()
                  .includes(navItem.url) === true
                  ? 'active-side-nav'
                  : ''
              }`}
              key={navItem.title}
              id={navItem.title}
            >
              <ListItem
                button
                // onClick={() => {
                //   handleClick(navItem.title);
                // }}
              >
                <ListItemIcon>{sideIcon(navItem.icon)}</ListItemIcon>
                <ListItemText primary={navItem.title} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
}

export default Sidebar;
