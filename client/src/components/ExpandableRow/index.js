import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
 
import {
  TableCell,
  TableRow,
  IconButton,
  Collapse
} from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles({
  tableRow: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontWeight: 400,
    color: '#555',
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderBottom: 'none',
    cursor: 'pointer'
  }
});

const ExpandableRow = props => {
  const {row} = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.tableRow} onClick={() => setOpen(!open)}>
        <TableCell component="th" scope="row" align="right" style={{border: 'none'}}>
          {row.number}
        </TableCell>
        <TableCell style={{border: 'none'}}>
          {row.date}
        </TableCell>
        <TableCell
          colSpan={4}
          style={{border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
        >
          {row.address}
          <IconButton
            aria-label="expand row" 
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: 'none'}} colSpan={6}>
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
