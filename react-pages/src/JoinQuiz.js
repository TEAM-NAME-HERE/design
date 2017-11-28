import React, {Component} from 'react';
import './JoinQuiz.css';

class JoinQuiz extends Component{
	redirectHome = () =>{
		this.props.history.push("/UserLanding");
	}

	logout = () =>{
		this.props.history.push("/Login");
	}

	render(){
		return(
			<div id="allContainer">
				<div id="joinToolBar">
					<p id="joinHeader">Quizrt</p>
					<button id="joinToHome" onClick={this.redirectHome}>Home</button>
					<button id="joinLogout" onClick={this.logout}>Logout</button>
				</div>
				<div id="joinMainContainer">
					<p id="enterPINHeader">Enter the PIN for the quiz you wish to join:</p>
					<input type="text" id="PINInput"/><br />
					<button id="enterQuiz">Join Quiz</button>
				</div>
			</div>
		);
	}
}

export default JoinQuiz;