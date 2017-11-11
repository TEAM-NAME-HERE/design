import React, { Component } from 'react';
import './UserLanding.css';

class UserLanding extends Component {
  render() {
    return (
      <div id="allContainer">
        <div id="toolBar">
          <button type="button" id="settingsButton">Settings</button>
          <button type="button" id="logoutButton">Logout</button>
        </div>
        <div id="welcomeContainer">
            <p id="welcomeTag">Welcome, User</p>
            <div id="buttonBar">
              <div class="borderHelper">
                <button type="button" id="createButton">Create a Quiz</button>
              </div>
              <div id="dummyContainer">
                <p id="dummyText">My Quizes</p>
              </div>
              <div class="borderHelper">
                <button type="button" id="joinButton">Join a Quiz</button>
              </div>
            </div>
        </div>
        <div id="myQuizContainer">
          <div class="quizContainer">
            <p class="quizTitle">Quiz 1</p>
            <button type="button" id="startButton1" class="startButton">Start Quiz</button>
            <button type="button" id="editButton1" class="editButton">Edit Quiz</button>
          </div>
          <div class="quizContainer">
            <p class="quizTitle">Quiz 2</p>
            <button type="button" id="startButton2" class="startButton">Start Quiz</button>
            <button type="button" id="editButton2" class="editButton">Edit Quiz</button>
          </div>
          <div class="quizContainer">
            <p class="quizTitle">Quiz 3</p>
            <button type="button" id="startButton3" class="startButton">Start Quiz</button>
            <button type="button" id="editButton3" class="editButton">Edit Quiz</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserLanding;