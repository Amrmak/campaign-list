import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import { Box } from 'grommet';

import { Store } from '../store';
import * as actionTypes from '../store/actionTypes.js';

import DatePicker from './shared/DatePicker';

const DateRange = () => {
  const [boundStart, setBoundStart] = useState('1900-01-01');
  const [boundEnd, setBoundEnd] = useState('2200-01-01');
  const [, dispatch] = useContext(Store);

  const handleStartDateChange = date => {
    setBoundStart(format(new Date(date), 'yyyy-MM-dd'));
    dispatch({
      type: actionTypes.SET_START_DATE,
      payload: format(new Date(date), 'yyyy-MM-dd'),
    });
  };

  const handleEndDateChange = date => {
    setBoundEnd(format(new Date(date), 'yyyy-MM-dd'));
    dispatch({
      type: actionTypes.SET_END_DATE,
      payload: format(new Date(date), 'yyyy-MM-dd'),
    });
  };

  return (
    <Box direction="row" align="center">
      <DatePicker boundEnd={boundEnd} onChange={handleStartDateChange} />
      <DatePicker boundStart={boundStart} onChange={handleEndDateChange} />
    </Box>
  );
};

export default DateRange;
