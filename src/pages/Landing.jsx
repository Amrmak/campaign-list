import React, { useEffect } from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet';

const Landing = ({ history }) => {
  useEffect(() => {
    document.title = 'Hello 👋';
  }, []);
  return (
    <Box flex align="center" justify="center">
      <Heading level="1">
        Hello there{' '}
        <span role="img" aria-label="wave">
          👋
        </span>
      </Heading>
      <Paragraph size="xlarge">
        Click
        <span role="img" aria-label="point down">
          👇
        </span>
      </Paragraph>
      <Button
        primary
        label="Campaigns"
        onClick={() => history.push('/campaigns')}
      />
    </Box>
  );
};

export default Landing;
