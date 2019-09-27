import React, { useState, useContext } from 'react';

import { Search } from 'grommet-icons';
import { Box, TextInput } from 'grommet';

import { Store } from '../store';
import * as actionTypes from '../store/actionTypes.js';

const SearchInput = () => {
  const [name, setName] = useState('');
  const [, dispatch] = useContext(Store);

  const onChange = e => {
    setName(e.target.value);
    dispatch({ type: actionTypes.SET_SEARCH_FILTER, payload: e.target.value });
  };

  return (
    <Box
      direction="row"
      align="center"
      pad={{ horizontal: 'small', vertical: 'xsmall' }}
      round="small"
      border={{ side: 'all' }}
    >
      <Search color="brand" />
      <TextInput
        type="search"
        plain
        value={name}
        onChange={onChange}
        placeholder="Enter campaign name..."
      />
    </Box>
  );
};

export default SearchInput;
