import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';

export default function AppBarComponent() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <img 
          alt="Roamler logo"
          style={{height: 38}}
          src="https://www.roamler.com/assets/logo-roamler-main-15102f48afec6394db0c63386b0d72d9.svg" 
        />
      </Toolbar>
    </AppBar>
  );
}
