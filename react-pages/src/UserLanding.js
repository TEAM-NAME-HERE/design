import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './UserLanding.css';

class UserLanding extends Component {
  redirectCreate = () =>{
    this.props.history.push("/CreateQuiz");
  }

  redirectJoin = () =>{
    this.props.history.push("/JoinQuiz");
  }

  redirectPINDisplay = () =>{
    this.props.history.push("/PINDisplay");
  }

  logout = ()=>{
    this.props.history.push("/");
  }

  render() {
    return (
      <div id="allContainer">
        <div id="landingToolBar">
          <button type="button" id="settingsButton">Settings</button>
          <button type="button" id="logoutButton" onClick={this.logout}>Logout</button>
        </div>
        <div id="welcomeContainer">
            <p id="welcomeTag">Welcome to Quizrt, User</p>
            <div id="buttonBar">
              <div class="borderHelper">
                <button type="button" id="createButton" onClick={this.redirectCreate}>Create a Quiz</button>
              </div>
              <div id="dummyContainer">
                <p id="dummyText">My Quizes</p>
              </div>
              <div class="borderHelper">
                <button type="button" id="joinButton" onClick={this.redirectJoin}>Join a Quiz</button>
              </div>
            </div>
        </div>
        <div id="myQuizContainer">
          <div class="quizContainer">
            <p class="quizTitle">Quiz 1</p>
            <button type="button" id="startButton1" class="startButton" onClick={this.redirectPINDisplay}>Start Quiz</button>
            <button type="button" id="editButton1" class="editButton" onClick={this.redirectCreate}>Edit Quiz</button>
          </div>
          <div class="quizContainer">
            <p class="quizTitle">Quiz 2</p>
            <button type="button" id="startButton2" class="startButton" onClick={this.redirectPINDisplay}>Start Quiz</button>
            <button type="button" id="editButton2" class="editButton" onClick={this.redirectCreate}>Edit Quiz</button>
          </div>
          <div class="quizContainer">
            <p class="quizTitle">Quiz 3</p>
            <button type="button" id="startButton3" class="startButton" onClick={this.redirectPINDisplay}>Start Quiz</button>
            <button type="button" id="editButton3" class="editButton" onClick={this.redirectCreate}>Edit Quiz</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLanding;