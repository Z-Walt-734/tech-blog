import { createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#353535',
    },
    secondary: {
      main: '#882832',
		},
	},
	spacing: 8,
	typography: {
		fontFamily: [
			'Roboto',
			'Arial',
		].join(','),
	},
});

export default globalTheme;
