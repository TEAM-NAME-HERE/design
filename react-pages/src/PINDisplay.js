import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './PINDisplay.css';

var pin = "809123";

class PINDisplay extends Component{
	redirectHome = () =>{
		this.props.history.push("/");
	}

	setPin = () =>{
		
	}

	addName = () =>{

	}

	render(){

		return(
			<div id="allContainer">
				<div id="pinToolBar">
					<p id="pinLogo">Quizrt</p>
					<p id="pinQuizTitle">Quiz 1</p>
					<button id="pinToHome" onClick={this.redirectHome}>Home</button>
					<button id="pinLogout">Logout</button>
				</div>
				<div id="pinUsersContainer">
					<div id="pinGap"></div>
					<p id="pinLabel">The PIN for this Quiz is...</p>
					<p id="quizPIN">235689</p>
					<p id="testLabel">This is for testing: enter name</p>
					<input id="nameInput" type="text"/>		
					<button id="addNameButton" onClick={this.setPin}>Add Name</button>
				</div>
			</div>
		);
	}
}

export default PINDisplay;