import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

// TODO Move this junk to the Styles dir
const styles = makeStyles((theme) => createStyles({
  backToTop: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

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
  const style = styles();
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


const DropMenu = () => {
  return (
    <>
      <IconButton color='secondary' edge='start' aria-label='menu'>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export {
  HideOnScroll,
  ScrollToTop,
  DropMenu,
};
