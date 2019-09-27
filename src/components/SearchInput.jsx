import React, { useState } from 'react';

import { Search } from 'grommet-icons';
import { Box, TextInput } from 'grommet';

const SearchInput = () => {
  const [name, setName] = useState('');

  const onChange = e => setName(e.target.value);

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
