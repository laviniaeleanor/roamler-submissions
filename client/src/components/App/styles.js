import styled from 'styled-components';

export const App = styled.div`
  height: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 200px;
  background: url(https://my.roamler.com/Content/images/img-header-bg.png) no-repeat center bottom scroll;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-direction: column;
  margin-top: 64px;
  
  h1 {
    font-weight: 300;
    font-family: 'Montserrat' !important;
    font-size: 36px;
    margin: 0;
    padding: 4;
    border-bottom: 1px solid #fff;
    text-align: center;
  }

  h2 {
    padding: 4;
    margin-top: 0;
    font-weight: 300;
    font-family: 'Montserrat' !important;
    font-size: 30px;
  }
`;