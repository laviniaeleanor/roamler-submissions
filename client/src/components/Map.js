import React from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

import {Container} from '../styled-components';

const mapsAPIkey = process.env.GOOGLE_MAPS_API || 'AIzaSyD_nCryCz1F2qroU7ALIs4-aYm8-g32K1I';

const getMapBounds = (maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.Latitude,
      place.Longitude,
    ));
  });
  return bounds;
};

const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

const apiIsLoaded = (map, maps, places) => {
  const bounds = getMapBounds(maps, places);
  map.fitBounds(bounds);
  bindResizeListener(map, maps, bounds);
};

const Map = props => {
  const {data, goToList} = props;

  return (
    <Container map>
      <GoogleMapReact
        defaultZoom={10}
        defaultCenter={{
          lat: 52.36,
          lng: 4.90
        }}
        bootstrapURLKeys={{
          key: mapsAPIkey
        }}
        onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, data)}
      >
        {data.map(place => (
          <Container
            key={place.SubmissionId}
            lat={place.Latitude}
            lng={place.Longitude}
          >
            <Marker address={place.Address} goToList={goToList}/>
          </Container>
        ))}
      </GoogleMapReact>
    </Container>
  )
}

const mapStateToProps = state => ({
  data: state.submissions.data
});

export default connect(mapStateToProps, {})(Map);
