import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const devLightGray = '#E5E5E5'; //'#F6F6F6';
const devGray = '#404040';
const devBlue = '#55B9F6';
const devLightBlue = '#8ACFF9';
const black = '#000';
const white = '#fff';

export default createMuiTheme({
  palette: {
    common: {
      black: `${black}`,
      white: `${white}`,
    },
    primary: {
      light: `${devLightGray}`,
      main: `${devGray}`,
    },
    secondary: {
      light: `${devLightBlue}`,
      main: `${devBlue}`,
    },
    status: {
      danger: 'orange',
    },
    text: {
      primary: `${black}`,
      secondary: `${white}`,
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontweight: 700,
      fontSize: '1rem',
    }
  }
});

