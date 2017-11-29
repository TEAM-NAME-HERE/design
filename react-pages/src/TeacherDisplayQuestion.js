import React, {Component} from 'react';
import "./TeacherDisplayQuestion.css";

class TeacherDisplayQuestion extends Component{
	redirectHome = () =>{
		this.props.history.push("/UserLanding");
	}

	logout = () =>{
		this.props.history.push("/");
	}

	render(){
		return(
			<div id="allContainer">
				<div id="teacherToolBar">
					<p id="teacherLogo">Quizrt</p>
					<button id="cancelAndReturn" onClick={this.redirectHome}>Cancel Quiz</button>
					<button id="teacherLogout" onClick={this.logout}>Logout</button>
				</div>
			</div>
		);
	}
}

export default TeacherDisplayQuestion;