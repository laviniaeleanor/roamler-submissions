import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

export default function ButtonAppBar() {
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