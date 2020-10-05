import React from 'react';
import {Container} from '../styled-components';

export default function() {
  return (
    <Container full background flex>

      <Container col padding={'16px'}>
        <h1>Oops...</h1>
        <span>
          It seems like there was a problem fetching the submissions. <br/>
          Check that the server is running correctly and reload the page.
        </span>
      </Container>

    </Container>
  );
}
