import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, index, number }) => {
  function indextoChar(index) {
    switch (index) {
      case 0:
        index = "A";
        break;
      case 1:
        index = "B";
        break;
      case 2:
        index = "C";
        break;
      case 3:
        index = "D";
        break;
    }
    return index;
  }
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="question-box">
      <p className="question-box__subtitle">
        Question {index} / {number}
      </p>
      <h1 className="question-box__question">{question}</h1>
      {options.map((text, index) => (
        <div
          className="question-box__answers"
          key={index}
          style={{
            backgroundColor: index === isActive ? "#374A7C" : "",
            color: index === isActive ? "white" : "",
          }}
          onClick={() => {
            setIsActive(index);
            let answer = text;
            console.log(answer);
            selected(answer);
          }}
        >
          <span className="question-box__answer-index">
            {" "}
            {indextoChar(index)}
          </span>
          <span className="question-box__answer">{text}</span>
        </div>
      ))}
    </div>
  );
};

export default QuestionBox;
