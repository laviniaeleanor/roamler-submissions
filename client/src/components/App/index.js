import React from 'react';

import AppBar from '../AppBar';
import Header from '../Header';
import Table from '../Table';

export default function AppComponent(){
  return (
    <div style={{height: '100%', overflowY: 'auto'}}>
      <AppBar />
      <Header />
      <Table />
    </div>
  );
}
