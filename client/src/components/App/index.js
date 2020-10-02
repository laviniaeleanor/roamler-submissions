import React from 'react';
import {connect} from 'react-redux';

import {App, Header} from './styles';
import AppBar from '../AppBar';
import Table from '../Table';

const AppComponent = props => {
  const {count} = props;

  return (
    <App>
      <AppBar />
      <Header>
        <h1>Roamler Submissions</h1>
        {!!count && <h2>Total: {count}</h2>}
      </Header>
      <Table/>
    </App>
  );
}

const mapStateToProps = state => ({
  count: state.total.count
});

export default connect(mapStateToProps)(AppComponent);
