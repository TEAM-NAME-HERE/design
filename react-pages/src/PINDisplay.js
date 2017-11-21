import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './PINDisplay.css';

class PINDisplay extends Component{
	redirectHome = () =>{
		this.props.history.push("/");
	}

	render(){

		return(
			<div id="allContainer">
				<div id="pinToolBar">
					<p id="pinLogo">Quizrt</p>
					<p id="pinQuizTitle">Quiz 1</p>
					<button id="pinToHome" onClick={this.redirectHome}>Home</button>
					<button id="homeButton">Logout</button>
				</div>
				<div id="pinUsersContainer">
					<p id="pinTest">Users Container</p>
				</div>
			</div>
		);
	}
}

export default PINDisplay;