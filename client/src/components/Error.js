import React from 'react';
import {Container} from '../styled-components';

export default function Error() {
  return (
    <Container full background flex>

      <Container flex col>
        <h1>Oops...</h1>
        <span>
          It seems like there was a problem fetching the submissions. <br/>
          Check that the server is running correctly and reload the page.
        </span>
      </Container>

    </Container>
  );
}
