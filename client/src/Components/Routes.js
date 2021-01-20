import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './Navbar';
import Navlinks from './Navlinks';

const Routes = () => {
  return (
    <div>
      <Navbar />
      {Navlinks.map(({title, path, component}) => (
        <Route exact path={path} component={component} key={title}/>
      ))}
    </div>

  );
};

export default Routes;
