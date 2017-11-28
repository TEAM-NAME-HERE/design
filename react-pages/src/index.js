import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';

import Login from './Login';
import Signup from './Signup';
import UserLanding from './UserLanding';
import CreateQuiz from './CreateQuiz';
import JoinQuiz from './JoinQuiz';
import GuestJoinQuiz from './GuestJoinQuiz';
import PINDisplay from './PINDisplay';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path='/' component={Login}/>
			<Route path='/Login' component={Login}/>
			<Route path='/Signup' component={Signup}/>
			<Route path='/UserLanding' component={UserLanding}/>
			<Route path='/CreateQuiz' component={CreateQuiz}/>
			<Route path='/JoinQuiz' component={JoinQuiz}/>
			<Route path='/GuestLogin' component={GuestJoinQuiz}/>
			<Route path='/PINDisplay' component={PINDisplay}/>
		</div>
	</BrowserRouter>,
	document.getElementById('root'));