import React from 'react';
import {connect} from 'react-redux';

import {Container, Logo} from '../styled-components';
import AppBar from './AppBar';
import Header from './Header';
import Table from './Table';
import Error from './Error';

import {getSubmissions} from '../store/actions/submissions';

const AppComponent = props => {
  const {submissions: {error, data, loading}, getSubmissions, params} = props;

  const [mapView, setMapView] = React.useState(false);

  React.useEffect(() => {
    getSubmissions({params});
  }, [params, getSubmissions]);

  return (
    <Container full>
      <AppBar
        mapView={mapView}
        setMapView={() => setMapView(!mapView)}
        disableViewButton={loading || error || !data.length}
      />

      {error && <Error />}

      {loading && !data && 
        <Container background flex full>
          <Logo loading="true"/>
        </Container>
      }

      {data && 
        <Container>
          <Header />
          <Table
            mapView={mapView}
            goToList={() => setMapView(false)}
          />
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
