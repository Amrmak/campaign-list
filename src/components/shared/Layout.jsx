import React from 'react';
import { Box } from 'grommet';

import AppBar from './AppBar';

const Layout = ({ children }) => (
  <Box full>
    <AppBar />
    <Box direction="row" flex>
      {children}
    </Box>
  </Box>
);

export default Layout;
