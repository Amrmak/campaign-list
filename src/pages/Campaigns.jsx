import React, { useEffect, useContext } from 'react';
import * as actionTypes from '../store/actionTypes.js';
import { Store } from '../store';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet';

import SearchInput from '../components/SearchInput';
import DateRange from '../components/DateRange';
import CampaignRow from '../components/CampaignRow';

const Campaigns = () => {
  const [state, dispatch] = useContext(Store);
  const { campaigns } = state;

  useEffect(() => {
    document.title = 'Campaigns';
  }, []);

  const tableHeaders = [
    'Name',
    'Start Date',
    'End Date',
    'Status',
    'Budget (USD)',
  ];

  window.AddCampaigns = array => {
    // TODO: validate input array
    dispatch({ type: actionTypes.ADD_CAMPAIGNS, payload: array });
  };

  return (
    <Box flex align="center" justify="center" pad="small" basis="small">
      <Box direction="row" width="large" justify="between" margin="medium">
        <SearchInput />
        <DateRange />
      </Box>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header, i) => (
              <TableCell key={i} scope="col">
                <Text>{header}</Text>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {campaigns.length ? (
            campaigns.map(campaign => (
              <CampaignRow key={campaign.id} {...campaign} />
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>
                <Text>
                  There are no campaigns here{' '}
                  <span role="img" aria-label="eyes closed monkey">
                    🙈
                  </span>
                </Text>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};

export default Campaigns;
