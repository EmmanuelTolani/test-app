import React, { Component } from "react";
import questionAPI from "../question/qBank2";
import QuestionBox from "./QuestionBox";
import Result from "../Result";
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionList: [],
      score: 0,
      responses: 0,
      submitted: false,
      quizInfo: []
    };
  }

  getQuestions = () => {
    questionAPI().then((question) => {
      this.setState({ quizInfo: question.slice(0,1) })
      this.setState({ questionList: question.slice(1,question.length) });
    });
  };

  showAllQuestions = () => {
    let length = this.state.questionList.length;
    let numberofQuestions = this.state.questionList.length;
    return (
      this.state.questionList.length > 0 &&
      this.state.submitted === false &&
      this.state.questionList.map(
        ({ question, answers, correct, questionId}) => (
          <QuestionBox
            question={question}
            options={answers}
            key={questionId}
            selected={(answer) => this.computeAnswer(answer, correct)}
            index={(++length - 10)}
            number={numberofQuestions}
          />
        )
      )
    );
  };
  showResult = () => {
    return this.state.submitted === true ? (
      <Result score={this.state.score} playAgain={this.playAgain} />
    ) : null;
  };

  // Set state back to default and call function
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 , submitted: false});
  };

  handleSubmit = () => {
    this.setState({
      submitted: true
    })
  }
  // Function to compute scores
  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 10 ? this.state.responses + 1 : 10,
    });
  };

  // componentDidMount function to get question
  componentDidMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="quiz">
        <div className="container">
          <div className="quiz__title"></div>
          <div className="quiz__questions-all">{this.showAllQuestions()}
          <button style={{ display: this.state.submitted ? "none" : "block"  }} className="quiz__questions-submit" onClick={this.handleSubmit}>
            Submit
          </button>
          </div>
        </div>
        <div className="quiz__questions-all">{this.showResult()}</div>
      </div>
    );
  }
}