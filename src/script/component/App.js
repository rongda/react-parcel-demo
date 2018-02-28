import React from 'react';
import Alin from '../containers/Alin';
import Roda from '../containers/Roda';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
		        <li><Link to="/">Home</Link></li>
		        <li><Link to="/about">About</Link></li>
		      </ul>
		      <hr/>
		      <Route exact path="/" component={Roda}/>
		      <Route path="/about" component={Alin}/>
		      <Alin />
		      <Roda />
				</div>
			</Router>
		);
	}
}

export default App