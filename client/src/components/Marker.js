import React from 'react';
import {connect} from 'react-redux';
import {Container, Logo} from '../styled-components';
import roamler from '../assets/roamler.svg';

import {setSearchTerm} from '../store/actions/params';

const Marker = (props) => {
  const {address, setSearchTerm, goToList} = props;

  const clickMarker = () => {
    setSearchTerm(address);
    goToList();
  }

  return (
    <Container onClick={clickMarker}>
      <Logo src={roamler} />
    </Container>
  )
};

export default connect(null, {setSearchTerm})(Marker);
