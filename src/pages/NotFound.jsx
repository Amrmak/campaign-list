import React, { useEffect } from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet';

const NotFound = ({ history }) => {
  useEffect(() => {
    document.title = 'Error!';
  }, []);

  return (
    <Box flex align="center" justify="center">
      <Heading level="1">
        Oops! Wrong URL?{' '}
        <span role="img" aria-label="eyes closed monkey">
          🙈
        </span>
      </Heading>
      <Paragraph size="xlarge">No worries !</Paragraph>
      <Paragraph size="xlarge">
        Just Click
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

export default NotFound;
