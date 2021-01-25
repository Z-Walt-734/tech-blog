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
    zIndex: 999,
  },
  list: {
    background: '#333333',
    width: 250,
  },
  cardHolder: {
    margin: props.spacing(4),
  },
  cardFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  card: {
    'background': 'linear-gradient(-60deg, #333333, black, #333333)',
    [props.breakpoints.down('xs')]: {
      'minWidth': 345,
      'maxWidth': 450,
    },
    [props.breakpoints.up('sm')]: {
      'maxWidth': 650,
    },
    [props.breakpoints.up('md')]: {
      'maxWidth': 345,
    },
    [props.breakpoints.up('lg')]: {
      'minWidth': 345,
    },
    'flexDirection': 'column',
    'alignItems': 'stretch',
    'transition': '0.333s',
    '&:hover': {
      boxShadow: '0 6px 12px 0 black',
      transform: 'scale(1.07)',
    },
  },
  cardTitle: {
    fontSize: 32,
  },
  cardMedia: {
    height: 140,
  },
  cardTagline: {
    fontSize: 24,
    color: 'gray',
    fontWeight: 200,
    fontFamily: 'Helvetica Neue',
    letterSpacing: '-1px',
  },
  cardSummary: {
  },
  cardDate: {
    color: 'gray',
  },
}));

globalStyle.propTypes = {
  props: PropTypes.Theme,
};


export default globalStyle;


