import React from 'react';
import { Input } from 'semantic-ui-react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Input icon='search' placeholder='Search...' />
    );
  }
}

export default Search;