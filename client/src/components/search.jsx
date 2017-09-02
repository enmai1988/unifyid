import React from 'react';
import { Input } from 'semantic-ui-react';

const Search = ({ handleSearch }) => (
  <Input icon='search' placeholder='Search...' onChange={handleSearch} />
);

export default Search;