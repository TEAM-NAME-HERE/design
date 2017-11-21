import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';

import UserLanding from './UserLanding';
import CreateQuiz from './CreateQuiz';
import JoinQuiz from './JoinQuiz';
import PINDisplay from './PINDisplay';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={UserLanding}/>
			<Route path='/UserLanding' component={UserLanding}/>
			<Route path='/CreateQuiz' component={CreateQuiz}/>
			<Route path='/JoinQuiz' component={JoinQuiz}/>
			<Route path='/PINDisplay' component={PINDisplay}/>
		</div>
	</BrowserRouter>,
	document.getElementById('root'));