import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';

const SideTextMenu = () => {
  return (
    <Menu vertical compact>
      <Menu.Item link>All</Menu.Item>
      <Menu.Item link>Most Used</Menu.Item>
      <Menu.Item link>My shared logins</Menu.Item>
      <Menu.Item link>Shared with me</Menu.Item>
    </Menu>
  );
};

export default SideTextMenu;