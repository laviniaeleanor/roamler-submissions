import React from 'react';
import {connect} from 'react-redux';

import {Container, Logo} from '../styles';
import AppBar from '../AppBar';
import Header from '../Header';
import Table from '../Table';
import Error from '../Error';
import load from './roamler.svg';

import {getSubmissions} from '../../store/actions/submissions';

const AppComponent = props => {
  const {submissions: {error, data,loading}, getSubmissions, params} = props;

  React.useEffect(() => {
    getSubmissions({params});
  }, [params, getSubmissions]);

  return (
    <Container full>
      <AppBar />
      {error && <Error />}

      {loading && !data && 
        <Container background flex full>
          <Logo loading src={load}/>
        </Container>
      }

      {data && 
        <Container>
          <Header />
          <Table />
        </Container>
      }
    </Container>
  );
}

const mapStateToProps = state => ({
  submissions: state.submissions,
  params: state.params
});

export default connect(mapStateToProps, {getSubmissions})(AppComponent);
