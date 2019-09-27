import React, { useState } from 'react';
import { Box, Text, Calendar, DropButton } from 'grommet';
import { Schedule } from 'grommet-icons';

const DropContent = ({ bounds = ['1970-01-01', '2200-12-31'], onClose }) => {
  const [date, setDate] = useState();

  const handleSelect = date => {
    setDate(date);
    onClose(date);
  };

  return (
    <Box align="center">
      <Calendar
        date={date}
        onSelect={handleSelect}
        showAdjacentDays={false}
        bounds={bounds}
      />
    </Box>
  );
};

const DatePicker = ({ bounds }) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState();

  const onClose = nextDate => {
    setDate(nextDate);
    setOpen(false);
    setTimeout(() => setOpen(undefined), 1);
  };

  return (
    <DropButton
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      dropContent={<DropContent bounds={bounds} onClose={onClose} />}
    >
      <Box direction="row" gap="small" align="center" pad="small">
        <Text color={date ? undefined : 'dark-5'}>
          {date
            ? `${new Date(date).toLocaleDateString('en-GB')}`
            : 'Select date & time'}
        </Text>
        <Schedule />
      </Box>
    </DropButton>
  );
};

export default DatePicker;
