import React from "react";
import Link from "next/link";
const ChooseQuiz = ({ name, link, difficulty, length }) => {
  return (
    <Link href={link}>
      <div className="choose-quiz">
        <div className="container">
          <div className="choose-quiz__quiz">
            <h1>{name}</h1>
            <div className="choose-quiz__info">
              <p>{difficulty}</p>
              <p>{length} Questions</p>
              <a href={link}>Start Quiz</a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChooseQuiz;
