
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  palette: {
    primary: {
      main: '#ff6738',
      contrastText: '#fff'
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff'
    },
  },
});

export default theme;