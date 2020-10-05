import styled from 'styled-components';

import {
  Table,
  TableCell,
  TableRow,
  Button
} from '@material-ui/core';
import {KeyboardDatePicker} from '@material-ui/pickers';

export const Container = styled.div`
  height: ${p => p.full ? '100vh' : 'auto'};

  p {
    max-width: 200px;
    font-size: 14px;
  }

  h3 {
    align-self: flex-start;
    font-weight: 400;
  }

  ${p => p.maxWidth && `
    max-width: ${p.maxWidth}px;
    width: 100%;
    padding: 16px;
  `}

  ${p => (p.flex || p.col || p.spaceBetween) && `
    display: flex;
    align-items: center;
    justify-content: ${p.spaceBetween ? 'space-between' : 'center'};
    flex-direction: ${p.col ? 'column' : 'row'};
  `}

  ${p => p.background && `
    background: url(https://my.roamler.com/Content/images/img-header-bg.png) no-repeat center bottom scroll;
    background-size: cover;
    color: #fff;

    h1 {
      align-self: flex-start;
    }

    h3 {
      font-weight: 300;
      margin: 2px 0 32px;
    }

    span {
      font-size: 20px;
    }
  `}

  ${p => p.header && `
    padding: 90px 16px 16px;
    color: #fff;
    max-width: 832px;
    width: 100%;

    h1 {
      font-weight: 300;
      margin: 0;
      font-size: 25px;
    }
  `}

  ${p => p.subInfo && `
    margin: 0 32px 32px 64px;

    h3 {
      font-size: 14px;
    }

    p {
      margin-bottom: 8px;
      max-width: 100%;
    }
  `}

  ${p => p.white && `
    background-color: #fff;
    border-radius: 4px;
    padding: 8px 16px 16px;
    flex-wrap: wrap;
    align-items: baseline;
  `}
  
`;

export const Logo = styled.img`
  height: 38px;
  
  ${p => p.loading && `
    animation: pulse 3s infinite;
    height: 60px;
    margin-top: 50px;

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
  `}
`;

export const BasicTable = styled(Table)`
  max-width: 800px;
  height: 100%;
`;
    
export const Cell = styled(TableCell)`
  border: none;
  font-size: 14px;
  padding: 8px;
  
  ${p => p.noPadding && `
  padding: 0;
  `}
  
  ${p => p.head && `
    font-size: 14px;
    font-weight: 700;
  `}
`;

export const Row = styled(TableRow)`
  border-top: 1px solid rgba(224, 224, 224, 1);
  border-bottom: none;
  cursor: pointer;

  ${p => p.noBorder && `
    border: none;
  `}
`;

export const NavigationButton = styled(Button).attrs({
  variant: 'outlined',
  color: 'primary'
})`
  min-width: 0;
  padding: 5px;
  margin-left: 8px;
`;

export const DatePicker = styled(KeyboardDatePicker)`
  width: 48%;
  margin: 8px 0 0;
  max-width: 250px;

  input {
    font-size: 14px;
  }
`;
