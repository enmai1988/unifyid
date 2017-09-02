import React from 'react';
import { Menu } from 'semantic-ui-react';
import { navStyle } from '../style';

const Nav = ({ toggleSidebar }) => (
  <Menu inverted fluid style={navStyle}>
    <Menu.Item position='left'>UnifyID</Menu.Item>
  </Menu>
);

export default Nav;