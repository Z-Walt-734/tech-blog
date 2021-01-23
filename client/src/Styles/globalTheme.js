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
    h3: {
      color: 'gray',
      fontFamily: 'Helvetica Neue',
      fontSize: '42px',
      fontWeight: '100',
    },
    body1: {
      color: 'white',
      fontSize: '21px',
    },
    body2: {
      color: 'white',
      fontSize: '18px',
    },
  },
});

export default globalTheme;
