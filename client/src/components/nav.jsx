import React from 'react';
import { Menu } from 'semantic-ui-react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu>
        <Menu.Item position='left'>UnifyID</Menu.Item>
      </Menu>
    )
  }
}