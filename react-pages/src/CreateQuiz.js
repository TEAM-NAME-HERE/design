import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './CreateQuiz.css';

class CreateQuiz extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle(){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  cancelQuiz = () =>{
    this.props.history.push("/UserLanding");
  }

  render() {
    return (
      <div id="allContainer">
        <div id="createToolBar">
          <h3 id="createLogo">Quizrt</h3>
          <button type="button" id="cancelButton" onClick={this.cancelQuiz}>Cancel</button>
          <button type="button" id="saveButton" onClick={this.cancelQuiz}>Save</button>
        </div>
        <div id="miniDisplay">
          <div class="dragQuestion">
            <p id="dragQuestionTitle">Qusetion 1</p>
          </div>
          <div class="dragQuestion">
            <p id="dragQuestionTitle">Qusetion 2</p>
          </div>
          <div class="dragQuestion">
            <p id="dragQuestionTitle">Qusetion 3</p>
          </div>
          <div class="dragQuestion">
            <p id="dragQuestionTitle">Qusetion 4</p>
          </div>
        </div>
        <div id="createContainer">
          <div id="questionsContainer">
            <span id="quizTitle">Quiz 1 <button type="button" id="editTitle">Edit Title</button></span>
            <br />
            <div class="questionBox">
              <p class="questionTitle">Question 1</p>
              <button class="editQuestion">Edit Question</button>
              <button class="deleteButton" id="deleteButton1">x</button>
              <br />
              <p class="durationLabel">Duration:</p>
              <p class="secondsTag">seconds</p>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <p class="createAnswer">Answer 1</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 4</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br /><br />
              <button type="button" class="addAnswerButton" id="addAnswerButton1">Add Answer</button>
            </div>
            <div class="questionBox">
              <p class="questionTitle">Question 2</p>
              <button class="editQuestion">Edit Question</button>
              <button class="deleteButton" id="deleteButton1">x</button>
              <br />
              <p class="durationLabel">Duration:</p>
              <p class="secondsTag">seconds</p>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <br /><br />
              <p class="createAnswer">Answer 1</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 4</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br /><br />
              <button type="button" class="addAnswerButton" id="addAnswerButton2">Add Answer</button>
            </div>
            <div class="questionBox">
              <p class="questionTitle">Question 3</p>
              <button class="editQuestion">Edit Question</button>
              <button class="deleteButton" id="deleteButton1">x</button>
              <br />
              <p class="durationLabel">Duration:</p>
              <p class="secondsTag">seconds</p>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <br /><br />
              <p class="createAnswer">Example of what a logner answer would look like</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 4</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br /><br />
              <button type="button" class="addAnswerButton" id="addAnswerButton3">Add Answer</button>
            </div>
            <div class="questionBox">
              <p class="questionTitle">Question 4</p>
              <button class="editQuestion">Edit Question</button>
              <button class="deleteButton" id="deleteButton1">x</button>
              <br />
              <p class="durationLabel">Duration:</p>
              <p class="secondsTag">seconds</p>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <br /><br />
              <p class="createAnswer">Answer 1</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="createAnswer">Answer 4</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br /><br />
              <button type="button" class="addAnswerButton" id="addAnswerButton4">Add Answer</button>
            </div>
            <button type="button" id="addQuestionButton">Add Question</button>
          </div> 
        </div>
      </div>
    );
  }
}

export default CreateQuiz;