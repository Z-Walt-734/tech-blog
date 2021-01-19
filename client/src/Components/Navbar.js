import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, List, ListItem, ListItemText, Container, Fab} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import globalStyle from '../Styles/globalStyle';
import logo_trans from '../Images/Logos/logo_trans.png'
import Navlinks from './Navlinks'
import { DropMenu, HideOnScroll, ScrollToTop } from './NavFunctions';


const Navbar = (props) => {
	const classes = globalStyle();
	return (
		<>
		<div className={classes.offset} />
		<HideOnScroll { ...props }>
		<AppBar className={classes.toolbar}>
		<Toolbar>
				<Container className={classes.navDisplayFlex}>
				<Link to='/'><img src={logo_trans} alt="Logo" className={classes.logo} /> </Link>
				<List component='nav' aria-labelledby='main navigation' className={classes.navDisplayFlex}>
					{Navlinks.map(({ title, path, component }) => (
						<Link to={path} key={title} className={classes.linkText}>
							<ListItem button>
								<ListItemText primary={title} />
							</ListItem>
						</Link>
					))}
		</List>
			<DropMenu />
			</Container>
			</Toolbar>
				</AppBar>
					</HideOnScroll>
		<Toolbar id='back-to-top-anchor'/>
			<ScrollToTop>
			<Fab variant='extended' color='secondary' size='large' aria-label='scroll back to top'>
				<KeyboardArrowUpIcon />	
				Back to top
			</Fab>
			</ScrollToTop>
		</>
	)
}

export default Navbar