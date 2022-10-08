import React, { Component } from "react";
import questionAPI2 from "../../../pages/api/qBank1";
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
      submitted: false
    };
    // this.showAllQuestions = this.showAllQuestions.bind.this;
  }

  getQuestions = () => {
    questionAPI2().then((question) => {
      this.setState({ questionList: question });
    });
  };

  showAllQuestions = () => {
    let length = this.state.questionList.length;
    return (
      this.state.questionList.length > 0 &&
      this.state.submitted === false &&
      this.state.questionList.map(
        ({ question, answers, correct, questionId }) => (
          <QuestionBox
            question={question}
            options={answers}
            key={questionId}
            selected={(answer) => this.computeAnswer(answer, correct)}
            index={(++length - 10)}
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

  // showAllQuestions = () => {
  //     this.questionList.map((question, answers, correct))
  //     <div></div>
  // }
  render() {
    console.log(this.state.questionList);
    return (
      <div className="quiz">
        <div className="container">
          <div className="quiz__title">Anki Quiz</div>
          <div className="quiz__questions-all">{this.showAllQuestions()}</div>
          <div className="quiz__questions-all">{this.showResult()}</div>
         <div className="quiz__questions-submit">
          <button onClick={this.handleSubmit}>
            Submit
          </button>
         </div>
        </div>
      </div>
    );
  }
}