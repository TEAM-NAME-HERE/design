import React, { Component } from 'react';
import './CreateQuiz.css';

class CreateQuiz extends Component {
  render() {
    return (
      <div id="allContainer">
        <div id="createToolBar">
          <h3 id="logo">Quizrt</h3>
          <button type="button" id="cancelButton">Cancel</button>
          <button type="button" id="saveButton">Save</button>
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
              <span class="questionTitle">Question 1<button type="button" class="deleteButton" id="deleteButton1">X</button></span>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <br /><br />
              <p class="answer">Answer 1</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 4</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br /><br />
              <button type="button" class="addAnswerButton" id="addAnswerButton1">Add Answer</button>
            </div>
            <div class="questionBox">
              <span class="questionTitle">Question 2<button type="button" class="deleteButton" id="deleteButton2">X</button></span>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <br /><br />
              <p class="answer">Answer 1</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 4</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br /><br />
              <button type="button" class="addAnswerButton" id="addAnswerButton2">Add Answer</button>
            </div>
            <div class="questionBox">
              <span class="questionTitle">Question 3<button type="button" class="deleteButton" id="deleteButton3">X</button></span>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <br /><br />
              <p class="answer">Example of what a logner answer would look like</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 4</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br /><br />
              <button type="button" class="addAnswerButton" id="addAnswerButton3">Add Answer</button>
            </div>
            <div class="questionBox">
              <span class="questionTitle">Question 4<button type="button" class="deleteButton" id="deleteButton4">X</button></span>
              <br />
              <p class="answerLabel">Answers:</p>
              <p class="correctLabel">Mark as correct:</p>
              <br /><br />
              <p class="answer">Answer 1</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 2</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 3</p>
              <input type="checkbox" class="check"/>
              <button type="button" class="deleteAnswer">X</button><br />
              <p class="answer">Answer 4</p>
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