import { About, Blog, Contact, Home, Projects, Resume } from '../Pages'

const Navlinks = [
	{title: 'Home', path:'/', component: Home},
	{title: `About`, path: `/about`, component: About},
	{title: `Resume`, path: `/resume`, component: Resume},
	{title: `Blog`, path: `/blog`, component: Blog},
	{title: `Projects`, path: `/projects`, component: Projects},
	{title: `Contact`, path: `/contact`, component: Contact},
]

export default Navlinks;
