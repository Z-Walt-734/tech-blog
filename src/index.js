import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

import { Routes } from './Components'
import globalTheme from './Styles/globalTheme'

ReactDOM.render(
	<ThemeProvider theme={globalTheme}>
	<Router>
			<Routes />
				</Router>
					</ThemeProvider>,
  document.getElementById('root')
);

