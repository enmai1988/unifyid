import React from 'react';
import { Menu } from 'semantic-ui-react';

const SideMenu = ({ visibility }) => {
  const menus = [];

  return (
    <Menu vertical>
      <Menu.Item>Key</Menu.Item>
      <Menu.Item>User</Menu.Item>
      <Menu.Item>Device</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
    </Menu>
  );
};

export default SideMenu;