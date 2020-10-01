import React from 'react';
import {connect} from 'react-redux';

import {Button} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {getSubmissions} from '../../store/actions/submissions';

const TableNavigation = props => {
  const [page, setPage] = React.useState(1);
  const [isFirst, setIsFirst] = React.useState(true);
  const [isLast, setIsLast] = React.useState(false);
  const {pages, getSubmissions} = props;

  React.useEffect(() => {
    setIsFirst(page === 1);
    setIsLast(page === pages);
    getSubmissions(page);
  }, [page, pages, getSubmissions]);

  const goToNextPage = () => {
    if (!isLast) {
      setPage(page + 1);
    }
  }

  const goToPrevPage = () => {
    if (!isFirst) {
      setPage(page - 1);
    }
  }

  return (
    <>
      <Button
        variant='outlined'
        color='secondary'
        onClick={goToPrevPage}
        disabled={isFirst}
      >
        <NavigateBeforeIcon />
      </Button>
      <Button
        variant='outlined'
        color='secondary'
        onClick={goToNextPage}
        disabled={isLast}
      >
        <NavigateNextIcon />
      </Button>
      </>
      )
    }

export default connect(null, {getSubmissions})(TableNavigation);