import React from 'react';
import {connect} from 'react-redux';

import {Button} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {getSubmissions} from '../../store/actions/submissions';
import {setPage} from '../../store/actions/params';

const TableNavigation = props => {
  const {params, pages, getSubmissions, setPage} = props;
  const {page} = params;
  const [isFirst, setIsFirst] = React.useState(true);
  const [isLast, setIsLast] = React.useState(true);

  React.useEffect(() => {
    setIsFirst(page === 1);
    setIsLast(page === pages);
  }, [page, pages])

  React.useEffect(() => {
    getSubmissions({params});
  }, [params, getSubmissions]);

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
    <div style={{display: 'flex', position: 'sticky', top: 100}}>
      <Button
        variant='outlined'
        color='secondary'
        style={{marginRight: 8, minWidth: 0, padding: 5}}
        onClick={goToPrevPage}
        disabled={isFirst}
      >
        <NavigateBeforeIcon />
      </Button>
      <Button
        style={{minWidth: 0, padding: 5}}
        variant='outlined'
        color='secondary'
        onClick={goToNextPage}
        disabled={isLast}
      >
        <NavigateNextIcon />
      </Button>
    </div>
  )
}

const mapStateToProps = state => ({
  params: state.params,
  pages: state.total.pages
});

export default connect(mapStateToProps, {getSubmissions, setPage})(TableNavigation);