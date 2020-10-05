import React from 'react';
import {connect} from 'react-redux';
import SearchField from '../SearchField';
import DatePicker from '../DatePicker';

import {setFromDate, setToDate} from '../../store/actions/params';
import {Container} from '../styles';

const Header = props => {
  const {count, fromDate, toDate, setFromDate, setToDate} = props;

  return (
    <Container background col>
      <Container header>

        <h1>Roamler Submissions</h1>
        <h3>{count ? 'Total: ' + count : 'No results'}</h3>

        <Container white spaceBetween>
          <SearchField />

          <Container spaceBetween>
            <DatePicker label={'From'} value={fromDate} onChange={setFromDate}/>
            <DatePicker label={'To'} value={toDate} onChange={setToDate}/>
          </Container>

        </Container>
      </Container>
    </Container>
  );
}

const mapStateToProps = state => ({
  count: state.total.count,
  fromDate: state.params.fromDate,
  toDate: state.params.toDate
});

export default connect(mapStateToProps, {setFromDate, setToDate})(Header);
