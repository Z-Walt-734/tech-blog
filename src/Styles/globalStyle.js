import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


//TODO Move this junk to the Styles dir
const globalStyle = makeStyles((theme: Theme) => createStyles({
	offset: theme.mixins.toolbar,
	toolbar: {
		background : '#181a1b'
	},
	navDisplayFlex: {
		display:'flex',
		justifyContent:'space-between'
	},
	linkText: {
		textTransform:'uppercase',
		color: 'white',
		textDecoration: 'none'
	},
	logo:{
		maxWidth: 60,
		marginRight:'10px'
	},
	code: {
		fontFamily: ['source-code-pro', 
			'Menlo', 
			'Monaco', 
			'Consolas', 
			'Courier New', 
			'monospace'
		].join(','),
	},
	articles: {

	}
}));


export default globalStyle;
