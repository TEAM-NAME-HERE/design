import React, {Component} from 'react';
import Podium from './Podium'
import './DisplayResults.css';

class DisplayResults extends Component{
	displayEdit = () =>{
		this.props.history.push("/CreateQuiz");
	}

	cancelQuiz = () =>{
		this.props.history.push("/UserLanding");
	}

	logout = () =>{
		this.props.history.push("/");
	}

	nextQuestion = () =>{
		this.props.history.push("/TeacherDisplayQuestion");
	}

	render(){
		return(
			<div id="allContainer">
				<div id="displayToolbar">
					<p id="displayLogo">Quizrt</p>
					<button id="displayAddQuestion" onClick={this.displayEdit}>Add Question</button>
					<button id="displayCancelQuiz" onClick={this.cancelQuiz}>End Quiz</button>
					<button id="displayLogout" onClick={this.logout}>Logout</button>
				</div>
					<button id="displayNextQuestion" onClick={this.nextQuestion}>Next Question</button>
				<div id="displayMainContainer">
					<div id="displayGap"></div>
					<div id="podiumContainer">
						<Podium></Podium>
					</div>

					<div id="barContainer">
						<p class="test">bar</p>
					</div>
				</div>
			</div>
		);
	}
}

export default DisplayResults;