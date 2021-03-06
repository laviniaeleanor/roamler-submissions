import React from 'react';
 
import {IconButton, Collapse} from '@material-ui/core';
import {Cell, Row, InfoRow} from '../styled-components';
import {Container} from '../styled-components';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const ExpandableRow = props => {
  const {row} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Row onClick={() => setOpen(!open)}>

        <Cell align='center'>{row.number}</Cell>
        <Cell>{row.date}</Cell>

        <Cell colSpan={2}>
          <Container flex spaceBetween>
            <p>{row.address}</p>
            <IconButton
              aria-label='expand row' 
              size='small'
              onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </Container>
        </Cell>

      </Row>

      <InfoRow>
        <Cell colSpan={4} padding='none'>
          <Collapse in={open} timeout='auto' unmountOnExit>

            <Container subInfo>
              {row.answers.map(({answer, question}, i) => {
                return (
                  <p key={i}>
                    {i + 1}. 
                    <strong> {question}</strong>
                    {answer && answer !== 'NULL' && ` - ${answer}`}
                  </p>
                )
              })}
            </Container>

          </Collapse>
        </Cell>
      </InfoRow>

    </>
  );
}

export default ExpandableRow;
