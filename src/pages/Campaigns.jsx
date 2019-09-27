import React, { useEffect } from 'react';
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
  useEffect(() => {
    document.title = 'Campaigns';
  }, []);

  const tableHeaders = ['Name', 'Start Date', 'End Date', 'Status', 'Budget'];
  const data = [
    {
      id: 1,
      name: 'Divavu',
      startDate: '9/19/2017',
      endDate: '3/9/2018',
      budget: 88377,
    },
    {
      id: 2,
      name: 'Jaxspan',
      startDate: '11/21/2017',
      endDate: '2/21/2018',
      budget: 608715,
    },
  ];

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
          {data.length ? (
            data.map(campaign => (
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
