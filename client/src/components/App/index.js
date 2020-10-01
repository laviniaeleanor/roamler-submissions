import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {App, Header} from './styles';
import AppBar from '../AppBar';
import Table from '../Table';

import {getSubmissions} from '../../store/actions/submissions';

const AppComponent = props => {
  const {submissions, getSubmissions} = props;

  useEffect(() => {
    getSubmissions();
  }, []);

  return (
    <App>
      <AppBar />
      <Header>
        <h1>Roamler Submissions</h1>
      </Header>
      <Table data={submissions.data}/>
    </App>
  );
}

const mapStateToProps = state => ({
  submissions: state.submissions
});

export default connect(mapStateToProps, {getSubmissions})(AppComponent);
