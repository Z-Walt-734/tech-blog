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
      fontWeight: '200',
    },
  },
});

export default globalTheme;
