import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

const App = props => {
	useEffect(() => {
		axios.get('api/test').then(res => setState(res.data))
	}, [])

	const [state, setState] = useState("");

	return(
		<div>
			Home
			This is a test
			<p>{state}</p>
		</div>
	)


}

export default App;
