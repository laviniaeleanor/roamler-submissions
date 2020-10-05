import React from 'react';
import {connect} from 'react-redux';

import {
  TableBody,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core';
import {
  Container,
  BasicTable,
  Cell
} from '../styled-components.js';
import ExpandableRow from './ExpandableRow';
import TableNavigation from './TableNavigation';
import Map from './Map';

import {formatData, getDate} from '../utils';
import {toggleSortDate} from '../store/actions/params';

const Table = props => {
  const {
    data,
    pages,
    mapView,
    goToList,
    params: {
      order,
      searchTerm,
      fromDate,
      toDate
    },
    toggleSortDate
  } = props;

  const rows = formatData(data);

  if (!data.length) return (
    <Container col>
      <Container maxWidth={832}>
        <h3>
          No submission found
          {searchTerm && 
            <span> for <strong>{searchTerm}</strong></span>
          }
          {fromDate && toDate &&
            <span> between <strong>{getDate(fromDate)}</strong> and <strong>{getDate(toDate)}</strong></span>
          }
          {fromDate && !toDate &&
            <span> after <strong>{getDate(fromDate)}</strong></span>
          }
          {toDate && !fromDate &&
            <span> before <strong>{getDate(toDate)}</strong></span>
          }
        </h3>
      </Container>
    </Container>
  )

  return (
    <Container col>
      <BasicTable aria-label="simple table">
        {mapView ?
          <>
            <TableHead>
              <TableRow>
                <Cell head>
                  <Container spaceBetween>
                    Locations
                    <TableNavigation pages={pages}/>
                  </Container>
                </Cell>
              </TableRow>
            </TableHead>

            <Map goToList={goToList}/>
          </>
          :
          <>
            <TableHead>
              <TableRow>
                <Cell head align="center">ID</Cell>

                <Cell head>
                  <TableSortLabel
                    active
                    direction={order}
                    onClick={toggleSortDate}
                    >
                    Date
                  </TableSortLabel>
                </Cell>

                <Cell head>
                  <Container spaceBetween>
                    Address
                    <TableNavigation pages={pages}/>
                  </Container>
                </Cell>

              </TableRow>
            </TableHead>

            <TableBody>
              {rows && rows.map((row) => (
                <ExpandableRow key={row.number} row={row}/>
                ))}
            </TableBody>
          </>
        }

        </BasicTable>
    </Container>
  );
}

const mapStateToProps = state => ({
  params: state.params,
  pages: state.total.pages,
  data: state.submissions.data
});

export default connect(mapStateToProps, {toggleSortDate})(Table);
