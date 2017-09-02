import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const SideIconMenu = ({ visibility }) => {
  const menus = [];

  return (
    <Menu vertical icon compact>
      <Menu.Item link active><Icon name='key' size='large'/></Menu.Item>
      <Menu.Item link><Icon name='user' size='large'/></Menu.Item>
      <Menu.Item link><Icon name='tablet' size='large'/></Menu.Item>
      <Menu.Item link><Icon name='setting' size='large'/></Menu.Item>
    </Menu>
  );
};

export default SideIconMenu;