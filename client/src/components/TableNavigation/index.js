import React from 'react';
import {connect} from 'react-redux';

import {Button} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {getSubmissions} from '../../store/actions/submissions';
import {setPage} from '../../store/actions/params';

const TableNavigation = props => {
  const {params, pages, getSubmissions, setPage} = props;
  const {page: {isLast, isFirst, num}} = params;

  React.useEffect(() => {
    getSubmissions({params});
  }, [params, getSubmissions]);

  const goToNextPage = () => {
    if (!isLast) {
      setPage({
        num: num + 1,
        isLast: num + 1 === pages,
        isFirst: false
      });
    }
  }

  const goToPrevPage = () => {
    if (!isFirst) {
      setPage({
        num: num - 1,
        isLast: false,
        isFirst: num - 1 === 1
      });
    }
  }

  return (
    <div style={{display: 'flex'}}>
      <Button
        variant='outlined'
        color='secondary'
        style={{marginRight: 8}}
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
    </div>
  )
}

const mapStateToProps = state => ({
  params: state.params,
  pages: state.total.pages
});

export default connect(mapStateToProps, {getSubmissions, setPage})(TableNavigation);