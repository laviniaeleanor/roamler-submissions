import React from 'react';
import {AppBar} from '@material-ui/core';
import {Logo, ViewButton, ToolBar} from '../styled-components';

export default function(props) {
  const {mapView, setMapView, disableViewButton} = props;

  return (
    <AppBar position="fixed" color="secondary">
      <ToolBar>
        <Logo 
          alt="Roamler logo"
          src="https://www.roamler.com/assets/logo-roamler-main-15102f48afec6394db0c63386b0d72d9.svg" 
        />
        <ViewButton onClick={setMapView} disabled={disableViewButton}>
          {mapView ? 'View list' : 'View map'}
        </ViewButton>
      </ToolBar>
    </AppBar>
  );
}
