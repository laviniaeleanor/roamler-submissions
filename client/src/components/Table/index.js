import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@material-ui/core';
import ExpandableRow from '../ExpandableRow';

import {getDate, getTime} from '../../utils/time';

const useStyles = makeStyles({
  table: {
    height: '100%'
  },
});

function createData(data) {
  return {
    number: data.SubmissionId,
    date: getDate(data.Date),
    time: getTime(data.Date),
    address: data.Address,
    answers: data.answers
      .sort((a, b) => a.question.Index - b.question.Index)
      .map(answer => ({
        question: answer.question.Text,
        answer: answer.Text
      }))
  };
}

const BasicTable = props => {
  const classes = useStyles();
  const {data} = props;

  const rows = data && data.map(submission => createData(submission));

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">#</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.map((row) => (
            <ExpandableRow key={row.number} row={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
