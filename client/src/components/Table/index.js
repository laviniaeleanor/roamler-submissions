import React from 'react';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core';
import ExpandableRow from '../ExpandableRow';
import TableNavigation from '../TableNavigation';

import {formatData} from '../../utils';
import {toggleSortDate} from '../../store/actions/params';

const useStyles = makeStyles({
  tableContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  table: {
    height: '100%',
    maxWidth: 800
  },
  tableHead: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: 700,
    color: '#555'
  }
});

const BasicTable = props => {
  const classes = useStyles();
  const {data, pages, order, toggleSortDate} = props;

  const rows = formatData(data);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead} align="right">ID</TableCell>
            <TableCell className={classes.tableHead}>
              <TableSortLabel
                active
                direction={order}
                onClick={toggleSortDate}
              >
                Date
              </TableSortLabel>
            </TableCell>
            <TableCell className={classes.tableHead}>Time</TableCell>
            <TableCell className={classes.tableHead}>Address</TableCell>
            <TableCell>
              <TableNavigation pages={pages}/>
            </TableCell>
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

const mapStateToProps = state => ({
  order: state.params.order,
  pages: state.total.pages,
  data: state.submissions.data
});

export default connect(mapStateToProps, {toggleSortDate})(BasicTable);
