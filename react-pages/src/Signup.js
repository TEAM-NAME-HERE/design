import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Signup.css';

class Signup extends Component{
	redirectHome = () =>{
		this.props.history.push("/");
	}

	render(){
		return(
			<div id="allContainer">
				<div id="background">
			        <div id="gap"></div>
				        <div id="signupBox">
				            <p id="boxHeader">Sign up for Quizrt, it'll only take a moment...</p>
				            <br />
				            <div id="inputBox">
				            	<p class="inputLabel">First Name:</p>
				            	<input type="text" name="firstNameInput" class="userInput"/>
				            	<p class="inputLabel">Last Name:</p>
				            	<input type="text" name="lastNameInput" class="userInput"/>
				            	<p class="inputLabel">Email:</p>
				            	<input type="text" name="emailInput" class="userInput"/>
				            	<p class="inputLabel">Password:</p>
				            	<input type="text" name="passwordInput" class="userInput"/>
				            	<p class="inputLabel">Confirm Password:</p>
				            	<input type="text" name="confirmPasswordInput" class="userInput"/>
				            	<br />
				                <button type="button" id="signupButton">Sign up</button>
				            </div>
				            <br />

				            <p id="signRedirectLine">Already have an account with us? Head to our </p>
				            <button id="signToLogin" onClick={this.redirectHome}>login page</button>
				            <br />
				            <br />
				    	</div>
			    </div>
			</div>
		);
	}
}

export default Signup;