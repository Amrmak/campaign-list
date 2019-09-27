import React from 'react';
import { Box } from 'grommet';

import DatePicker from './shared/DatePicker';

const DateRange = () => {
  return (
    <Box direction="row" align="center">
      <DatePicker />
      <DatePicker />
    </Box>
  );
};

export default DateRange;
