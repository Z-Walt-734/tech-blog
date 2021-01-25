import React from 'react';
import {useState} from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText, Drawer} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

import globalStyle from '../Styles/globalStyle';


const HideOnScroll = (props) => {
  const {children, window} = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.instanceOf(window.constructor),
};

const ScrollToTop = (props) => {
  const style = globalStyle();
  const {children, window} = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document)
      .querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role='presentation'
        className={style.backToTop}
      >
        {children}
      </div>
    </Zoom>
  );
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.instanceOf(window.constructor),
};


const DropMenu = ({Navlinks}) => {
  const style = globalStyle();
  const [state, setState] = useState({right: false});

  const toggleMenu = (anchor, open) => (event) => {
    if (event.type === 'keydown' &&
        (event.key === 'Tab' ||
        event.key === 'Shift')
    ) {
      return;
    }
    setState({[anchor]: open});
  };

  const dropMenuList = (anchor) => (
    <div
      role='presentation'
      onClick={toggleMenu(anchor, false)}
      onKeyDown={toggleMenu(anchor, false)}
    >
      <List component='nav'>
        {Navlinks.map(({title, path, component}) => (
          <Link to={path} key={title} className={style.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        color='secondary'
        edge='start'
        aria-label='menu'
        onClick={toggleMenu('right', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        classes = {{paper: style.list}}
        anchor='right'
        open={state.right}
        onClose={toggleMenu('right', false)}

      >
        {dropMenuList('right')}
      </Drawer>
    </>
  );
};

DropMenu.propTypes = {
  Navlinks: PropTypes.array.isRequired,
};

export {
  HideOnScroll,
  ScrollToTop,
  DropMenu,
};
