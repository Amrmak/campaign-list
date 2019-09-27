import React from 'react';
import { Box, Heading } from 'grommet';

const AppBar = () => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="center"
    background="brand"
    pad="medium"
    elevation="medium"
    style={{ zIndex: '1' }}
  >
    <Heading level="3" margin="none">
      Campaign List
    </Heading>
  </Box>
);

export default AppBar;
