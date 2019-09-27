import React from 'react';
import PropTypes from 'prop-types';

import { TableCell, TableRow, Text } from 'grommet';

const CampaignRow = ({ name, startDate, endDate, status, Budget }) => (
  <TableRow>
    <TableCell>
      <Text>{name}</Text>
    </TableCell>
    <TableCell>
      <Text>{startDate}</Text>
    </TableCell>
    <TableCell>
      <Text>{endDate}</Text>
    </TableCell>
    <TableCell>
      <Text>{status}</Text>
    </TableCell>
    <TableCell>
      <Text>{Budget}</Text>
    </TableCell>
  </TableRow>
);

CampaignRow.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  status: PropTypes.string,
  Budget: PropTypes.number.isRequired,
};

export default CampaignRow;
