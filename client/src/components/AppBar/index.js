import React from 'react';
import {connect} from 'react-redux';
import {AppBar, Toolbar, InputBase} from '@material-ui/core';

import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import {setSearchTerm} from '../../store/actions/params';

const useStyles = makeStyles((theme) => ({
  logo: {
    height: 38,
    flexGrow: 1
  },
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '18ch',
      '&:focus': {
        width: '24ch',
      },
    },
  },
}));

const AppBarComponent = props => {
  const {searchTerm, setSearchTerm} = props;
  const classes = useStyles();

  const searchAddresses = e => {
    setSearchTerm(e.target.value);
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <div className={classes.logo}>
          <img 
            alt="Roamler logo"
            style={{height: 38}}
            src="https://www.roamler.com/assets/logo-roamler-main-15102f48afec6394db0c63386b0d72d9.svg" 
          />
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search addresses…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={searchAddresses}
            variant="outlined"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => ({
  searchTerm: state.params.searchTerm
});

export default connect(mapStateToProps, {setSearchTerm})(AppBarComponent);
