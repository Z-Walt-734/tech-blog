import {createMuiTheme} from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#353535',
    },
    secondary: {
      main: '#882832',
    },
    background: {
      default: '#181a1b',
    },

  },
  spacing: 8,
  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
    ].join(','),
    allVariants: {
      color: 'white',
    },
    h1: {
      fontSize: '36px',
    },
    h2: {
      fontSize: '34px',
    },
    h3: {
      color: 'gray',
      fontFamily: 'Helvetica Neue',
      fontSize: '32px',
      fontWeight: '100',
    },
    h4: {
      fontSize: '28px',
    },
    body1: {
      color: 'white',
      fontSize: '18px',
    },
    body2: {
      color: 'white',
      fontSize: '18px',
    },
  },
});

export default globalTheme;
