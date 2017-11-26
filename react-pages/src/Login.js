import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Login.css'

class Login extends Component{
	loginRedirect = () =>{
		this.props.history.push("/UserLanding");
	}

	signupRedirect = () =>{
		this.props.history.push("/Signup");
	}


	render(){
		return(
			<div id="allContainer">
				<div id="banner">
        			<h3 id="logo">Quizrt</h3>
    			</div>
    			<div id="loginOuterContainer">
        			<div id="loginInnerContainer">
                		<p id="loginHeader">Login</p>
                		<br />
                		<p class="inputLabel">Username: </p>
                		<input id="loginInput" class="inputField" type="text"/>
                		<br />
                		<p class="inputLabel">Password: </p>
                		<input id="passwordInput" class="inputField" type="text"/>
                		<br />
                		<button type="button" id="loginButton" onClick={this.loginRedirect}>Login</button>
                		<br /> <br />
                		<p  class="redirectLine">Forgot your username or password? Click</p>
                		<button id="recoveryButton">here</button>
                		<br />
                		<p class="redirectLine">New to Quizrt? You can </p>
                		<button id="signupButtonRedirect" onClick={this.signupRedirect}> sign up here</button>
        			</div>
    			</div>
    			<div id="guestContainer">
            		<button type="button" id="guestButton">Sign In As Guest</button>
    			</div>
			</div>
		);
	}
}

export default Login;