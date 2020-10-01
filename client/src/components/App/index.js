import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {App, Header} from './styles';
import AppBar from '../AppBar';
import Table from '../Table';

import {getSubmissions} from '../../store/actions/submissions';

const AppComponent = props => {
  const {submissions, total, getSubmissions} = props;

  useEffect(() => {
    getSubmissions();
  }, []);

  return (
    <App>
      <AppBar />
      <Header>
        <h1>Roamler Submissions</h1>
        {total.count && <h2>Total: {total.count}</h2>}
      </Header>
      <Table data={submissions.data}/>
    </App>
  );
}

const mapStateToProps = state => ({
  submissions: state.submissions,
  total: state.total
});

export default connect(mapStateToProps, {getSubmissions})(AppComponent);