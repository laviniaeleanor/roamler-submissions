import React from 'react';
import {connect} from 'react-redux';

import {NavigationButton, Container} from '../styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {setPage} from '../../store/actions/params';

const TableNavigation = props => {
  const {page, pages, setPage} = props;
  const [isFirst, setIsFirst] = React.useState(true);
  const [isLast, setIsLast] = React.useState(true);

  React.useEffect(() => {
    setIsFirst(page === 1);
    setIsLast(page === pages);
  }, [page, pages])

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
    <Container flex>
      <NavigationButton
        onClick={goToPrevPage}
        disabled={isFirst}
      >
        <NavigateBeforeIcon />
      </NavigationButton>
      <NavigationButton
        onClick={goToNextPage}
        disabled={isLast}
      >
        <NavigateNextIcon />
      </NavigationButton>
    </Container>
  )
}

const mapStateToProps = state => ({
  page: state.params.page,
  pages: state.total.pages
});

export default connect(mapStateToProps, {setPage})(TableNavigation);