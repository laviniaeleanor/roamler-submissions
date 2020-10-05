import React from 'react';
import {connect} from 'react-redux';
import SearchField from '../SearchField';
import DatePicker from '../DatePicker';

import {setFromDate, setToDate} from '../../store/actions/params';

const Header = props => {
  const {count, fromDate, toDate, setFromDate, setToDate} = props;

  return (
    <div style={{
      height: 'auto',
      background: 'url(https://my.roamler.com/Content/images/img-header-bg.png) no-repeat center bottom scroll',
      backgroundSize: 'cover',
      color: '#FFF',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div 
        style={{
          marginTop: 64,
          maxWidth: 800,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 16,
          width: '100%'
        }}
        >
      <h1
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 300,
          fontSize: 25,
          marginBottom: 2
        }}
      >Roamler Submissions</h1>
      <h3
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 300,
          fontSize: 16,
          margin: '0 0 32px'
        }}
      >
        Total: {count || '...'}
      </h3>
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: 4,
          width: '100%',
          padding: '8px 16px 16px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <SearchField />
        <DatePicker label={'From'} value={fromDate} onChange={setFromDate}/>
        <DatePicker label={'To'} value={toDate} onChange={setToDate}/>
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.total.count,
  fromDate: state.params.fromDate,
  toDate: state.params.toDate
});

export default connect(mapStateToProps, {setFromDate, setToDate})(Header);
