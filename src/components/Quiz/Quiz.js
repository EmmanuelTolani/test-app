import React, { Component } from 'react'
import questionAPI2 from '../../../pages/api/qBank1';
import questionAPI from '../question/qBank2';
export default class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {
            questionList : [],
            score: 0,
            responses: 0
        }
        // this.showAllQuestions = this.showAllQuestions.bind.this;
    }

    getQuestions = () => {
        questionAPI().then(question => {
        this.setState({questionList: question});
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
    console.log(this.state.questionList)
    return (
      <div className='quiz'>

      </div>
    )
  }
}

// import React, {Component} from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// import questionAPI from './question';
// import QuestionBox from './components/QuestionBox';
// import Result from './components/ResultBox';

// class Quiz extends Component {
// constructor() {
// 	super();
// 	this.state = {
// 	questionBank: [],
// 	score: 0,
// 	responses: 0
// 	};
// }

// // Function to get question from ./question


// // Set state back to default and call function
// playAgain = () => {
// 	this.getQuestions();
// 	this.setState({score: 0, responses: 0});
// };

// // Function to compute scores
// computeAnswer = (answer, correctAns) => {
// 	if (answer === correctAns) {
// 	this.setState({
// 		score: this.state.score + 1
// 	});
// 	}
// 	this.setState({
// 	responses: this.state.responses < 5
// 		? this.state.responses + 1
// 		: 5
// 	});
// };


// render() {
// 	return (<div className="container">
// 	<div className="title">
// 		QuizOn
// 	</div>

// 	{this.state.questionBank.length > 0 &&
// 	this.state.responses < 5 &&
// 	this.state.questionBank.map(({question, answers,
// 	correct, questionId}) => <QuestionBox question=
// 	{question} options={answers} key={questionId}
// 	selected={answer => this.computeAnswer(answer, correct)}/>)}

// 	{
// 		this.state.responses === 5
// 		? (<Result score={this.state.score}
// 			playAgain={this.playAgain}/>)
// 		: null
// 	}

// 	</div>)
// }
// }

// ReactDOM.render(<Quiz/>, document.getElementById("root"));

