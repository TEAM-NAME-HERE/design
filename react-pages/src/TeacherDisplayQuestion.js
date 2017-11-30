import React, {Component} from 'react';
import "./TeacherDisplayQuestion.css";

class TeacherDisplayQuestion extends Component{
	redirectHome = () =>{
		this.props.history.push("/UserLanding");
	}

	logout = () =>{
		this.props.history.push("/");
	}

	editQuiz = () =>{
		this.props.history.push("/CreateQuiz");
	}

	toResults = () =>{
		this.props.history.push("/DisplayResults");
	}

	render(){
		return(
			<div id="allContainer">
				<div id="teacherToolBar">
					<p id="teacherLogo">Quizrt</p>
					<button id="addQuestion" onClick={this.editQuiz}>Edit Quiz</button>
					<button id="cancelAndReturn" onClick={this.redirectHome}>Cancel Quiz</button>
					<button id="teacherLogout" onClick={this.logout}>Logout</button>
				</div>
				<div id="teacherMainContainer">
					<div id="teacherQuestionContainer">
						<p id="teacherQuestion">This is where the question will be displayed to the students taking the quiz</p>
						<div id="timerAndNext">
							<p id="timeRemaining">Time Reaming: 30</p>
							<button id="endQuestion" onClick={this.toResults}>End Question</button>
						</div>
					</div>
					<div id="teacherAnswersContainer">
						<div id="firstAnswer">
							<p class="answerHeader">1</p>
							<p class="answer">This will be the first answer to the question</p>
						</div>
						<div id="secondAnswer">
							<p class="answerHeader">2</p>
							<p class="answer">This will be the second answer to the question</p>
						</div>
						<div id="thirdAnswer">
							<p class="answerHeader">3</p>
							<p class="answer">This will be the third answer to the question</p>
						</div>
						<div id="fourthAnswer">
							<p class="answerHeader">4</p>
							<p class="answer">This will the the fourth answer to the question</p>
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default TeacherDisplayQuestion;