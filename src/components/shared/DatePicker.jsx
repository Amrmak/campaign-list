import React, { useState } from 'react';
import { Box, Text, Calendar, DropButton } from 'grommet';
import { Schedule } from 'grommet-icons';

const DropContent = ({
  boundStart = '1900-01-01',
  boundEnd = '2200-01-01',
  onClose,
}) => {
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
        bounds={[boundStart, boundEnd]}
      />
    </Box>
  );
};

const DatePicker = ({ boundStart, boundEnd, onChange }) => {
  const [date, setDate] = useState();
  const [open, setOpen] = useState();

  const onClose = nextDate => {
    setDate(nextDate);
    setOpen(false);
    onChange(nextDate);
    setTimeout(() => setOpen(undefined), 1);
  };

  return (
    <DropButton
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      dropContent={
        <DropContent
          boundStart={boundStart}
          boundEnd={boundEnd}
          onClose={onClose}
        />
      }
    >
      <Box direction="row" gap="small" align="center" pad="small">
        <Text color={date ? undefined : 'dark-5'}>
          {date
            ? `${new Date(date).toLocaleDateString('en-GB')}`
            : 'Select date'}
        </Text>
        <Schedule />
      </Box>
    </DropButton>
  );
};

export default DatePicker;
