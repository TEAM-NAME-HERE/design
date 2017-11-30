import React, {Component} from 'react';
import './StudentDisplayQuestion.css';

class StudentDisplayQuestion extends Component{
	redirectStudentHome = () =>{
		this.props.history.push("/UserLanding");
	}

	logout = () =>{
		this.props.history.push("/");
	}

	render(){
		return(
			<div id="allContainer">
				<div id="studentToolBar">
					<p id="studentLogo">Quizrt</p>
					<button id="studentExit" onClick={this.redirectStudentHome}>Exit Quiz</button>
					<button id="studentLogout" onClick={this.logout}>Logout</button>
				</div>
				<div id="studentMainContainer">
					<div id="studentQuestionContainer">
						<p id="studentQuestion">This is where the question will be displayed for the student that is taking the quiz</p>
					</div>
					<div id="studentAnswersContainer">
						<div id="studentFirstAnswer">
							<p class="studentAnswerHeader">1</p>
							<p class="studentAnswer">This will be the first answer to the question</p>
						</div>
						<div id="studentSecondAnswer">
							<p class="studentAnswerHeader">2</p>
							<p class="studentAnswer">This will be the second answer to the question</p>
						</div>
						<div id="studentThirdAnswer">
							<p class="studentAnswerHeader">3</p>
							<p class="studentAnswer">This will be the third answer to the question</p>
						</div>
						<div id="studentFourthAnswer">
							<p class="studentAnswerHeader">4</p>
							<p class="studentAnswer">This will the the fourth answer to the question</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StudentDisplayQuestion;