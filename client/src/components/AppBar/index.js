import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {Logo} from '../styles';

export default function AppBarComponent() {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Logo 
          alt="Roamler logo"
          src="https://www.roamler.com/assets/logo-roamler-main-15102f48afec6394db0c63386b0d72d9.svg" 
        />
      </Toolbar>
    </AppBar>
  );
}
