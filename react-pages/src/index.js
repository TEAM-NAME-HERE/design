import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';

import UserLanding from './UserLanding';
import CreateQuiz from './CreateQuiz';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={UserLanding}/>
			<Route exact path='/UserLanding' component={UserLanding}/>
			<Route exact path='/CreateQuiz' component={CreateQuiz}/>
		</div>
	</BrowserRouter>,
	document.getElementById('root'));