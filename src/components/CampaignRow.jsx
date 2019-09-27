import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';
import { getCampaignStatus } from '../utils';

import { TableCell, TableRow, Text } from 'grommet';

const CampaignRow = ({ name, startDate, endDate, Budget }) => {
  const status = getCampaignStatus(startDate, endDate);

  return (
    <TableRow>
      <TableCell>
        <Text>{name}</Text>
      </TableCell>
      <TableCell>
        <Text>{format(new Date(startDate), 'dd/MM/yyyy')}</Text>
      </TableCell>
      <TableCell>
        <Text>{format(new Date(endDate), 'dd/MM/yyyy')}</Text>
      </TableCell>
      <TableCell>
        <StyledText status={status}>{status}</StyledText>
      </TableCell>
      <TableCell>
        <Text>{Budget}</Text>
      </TableCell>
    </TableRow>
  );
};

const StyledText = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin: 0;
  padding: 5px 10px;
  color: ${props => (props.status === 'Active' ? 'green' : 'red')};
  border: 2px solid ${props => (props.status === 'Active' ? 'green' : 'red')};
  border-radius: 999px;
`;

CampaignRow.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  status: PropTypes.string,
  Budget: PropTypes.number.isRequired,
};

export default CampaignRow;
