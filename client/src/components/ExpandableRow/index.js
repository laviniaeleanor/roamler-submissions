import React from 'react';
import {
  TableCell,
  TableRow,
  IconButton,
  Collapse
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const ExpandableRow = props => {
  const {row} = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="right">
          {row.number}
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.time}</TableCell>
        <TableCell>{row.address}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <div>
              {row.answers.map((answer, i) => {
                return <div key={i}>{i + 1}. <strong>{answer.question}</strong> - {answer.answer}</div>
              })}
            </div>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default ExpandableRow;
