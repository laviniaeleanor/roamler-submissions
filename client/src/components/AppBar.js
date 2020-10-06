import React from 'react';
import {AppBar} from '@material-ui/core';
import {Logo, ViewButton, ToolBar} from '../styled-components';

export default function(props) {
  const {mapView, setMapView, disableViewButton} = props;

  return (
    <AppBar position="fixed" color="secondary">
      <ToolBar>
        <Logo full/>
        <ViewButton onClick={setMapView} disabled={disableViewButton}>
          {mapView ? 'View list' : 'View map'}
        </ViewButton>
      </ToolBar>
    </AppBar>
  );
}
