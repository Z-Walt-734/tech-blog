import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import {Routes} from './Components';
import globalTheme from './Styles/globalTheme';

const App = () => {
  return (
    <>
      <MuiThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    </>
  );
};

export default App;

