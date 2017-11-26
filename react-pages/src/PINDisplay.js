import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './PINDisplay.css';

var pin = "809123";

class PINDisplay extends Component{
	constructor(props){
		super(props);
		this.state = {nameToDisplay: ""}
	}

	redirectHome = () =>{
		this.props.history.push("/UserLanding");
	}

	logout = ()=>{
		this.props.history.push("/");
	}

	addName = () =>{
		var elementCenter = document.getElementById("centerNameContainer");
		var elementLeft = document.getElementById("leftNameContainer");
		var elementRight = document.getElementById("rightNameContainer");
		var para = document.createElement("p");
		para.className=("name");
		var text = document.createTextNode(this.state.nameToDisplay);
		para.appendChild(text);
		if(elementRight.childElementCount == elementCenter.childElementCount){
			elementCenter.appendChild(para);
		}else if(elementRight.childElementCount == elementLeft.childElementCount){
			elementLeft.appendChild(para);
		}else{
			elementRight.appendChild(para);
		}
	}

	setName = (e) =>{
		var nameText = e.target.value;
		this.setState(prevState => ({
			nameToDisplay: nameText
		}));
	}

	render(){

		return(
			<div id="allContainer">
				<div id="pinToolBar">
					<p id="pinLogo">Quizrt</p>
					<p id="pinQuizTitle">Quiz 1 title will go here, even if its super duper extra long john silvers</p>
					<button id="pinToHome" onClick={this.redirectHome}>Home</button>
					<button id="pinLogout" onClick={this.logout}>Logout</button>
				</div>
				<div id="pinUsersContainer">
					<div id="pinGap"></div>
					<p id="pinLabel">The PIN for this Quiz is...</p>
					<p id="quizPIN">235689</p>
					<button id="startQuizFinal">Start Quiz</button><br />
					<p id="testLabel">This is for testing: enter name</p>
					<input id="nameInput" type="text" onChange={this.setName}/>		
					<button id="addNameButton" onClick={this.addName}>Add Name</button><br />
					<div id="leftNameContainer">
						<p class="initDiv">1</p>
					</div>
					<div id="centerNameContainer">
						<p class="initDiv">1</p>
					</div>
					<div id="rightNameContainer">
						<p class="initDiv">1</p>
					</div>
				</div>
			</div>
		);
	}
}

export default PINDisplay;