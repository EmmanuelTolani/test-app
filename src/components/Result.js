import React from "react";

const Result = ({ score, playAgain }) => {
  function scoreToMessage(score) {
    switch (true) {
      case score == 0:
        score = "Please Try Again";
        break;
      case score > 0 && score < 5:
        score = "Get Some More Practice";
        break;
      case score > 5 && score < 9:
        score = "Almost there! Don't Give Up";
        break;
      case score == 10:
        score = "Excellent";
        break;
    }
    return score;
  }
  return (
    <div className="score-board">
      <p className="subtitle">Your score is {score} / 10</p>
      <div className="score">{scoreToMessage(score)}</div>
      <div className="btn-container">
        <button className="playBtn" onClick={playAgain}>
          {" "}
          Play Again{" "}
        </button>
      </div>
    </div>
  );
};

export default Result;
