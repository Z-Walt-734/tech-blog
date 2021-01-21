import {createStyles, makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const globalStyle = makeStyles((props) => createStyles({
  offset: props.mixins.toolbar,
  toolbar: {
    background: '#333333',
  },
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkText: {
    textTransform: 'uppercase',
    color: 'white',
    textDecoration: 'none',
  },
  logo: {
    maxWidth: 60,
    marginRight: '10px',
  },
  code: {
    fontFamily: ['source-code-pro',
      'Menlo',
      'Monaco',
      'Consolas',
      'Courier New',
      'monospace',
    ].join(','),
  },
  backToTop: {
    position: 'fixed',
    bottom: props.spacing(2),
    right: props.spacing(2),
  },
  list: {
    background: '#333333',
    width: 250,
  },
  tagline: {
    color: 'white',
  },
  articles: {

  },

}));

globalStyle.propTypes = {
  props: PropTypes.Theme,
};


export default globalStyle;


