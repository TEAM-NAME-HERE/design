import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './GuestJoinQuiz.css';

class GuestJoinQuiz extends Component{
	redirectHome = () =>{
		this.props.history.push("/");
	}

	join = () =>{
		this.props.history.push("/StudentDisplayQuestion");
	}

	render(){
		return(
			<div id="allContainer">
				<div id="allContainer">
					<div id="joinToolBar">
						<p id="joinHeader">Quizrt</p>
						<button id="guestJoinToHome" onClick={this.redirectHome}>Back To Login Page</button>
					</div>
					
					<div id="guestJoinMainContainer">
						<p id="guestEnterPINHeader">Enter the PIN for the quiz you wish to join:</p>
						<input type="text" id="guestPINInput"/>
						<p id="guestNicknameHeader">Enter your nickname:</p>
						<input type="text" id="guestNameInput"/><br />
						<button id="enterQuiz" onClick={this.join}>Join Quiz</button>
					</div>
			</div>
			</div>
		);
	}
}

export default GuestJoinQuiz;