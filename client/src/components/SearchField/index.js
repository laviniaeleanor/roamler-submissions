import 'date-fns';
import React from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';

import {setSearchTerm} from '../../store/actions/params';

const SearchField = props => {
  const {searchTerm, setSearchTerm} = props;

  const searchAddresses = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <TextField
      label='Search by address'
      id='outlined-basic'
      value={searchTerm}
      onChange={searchAddresses}
    />
  );
}

const mapStateToProps = state => ({
  searchTerm: state.params.searchTerm
});

export default connect(mapStateToProps, {setSearchTerm})(SearchField);
