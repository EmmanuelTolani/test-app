import React from 'react';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Result = ({score, playAgain}) => {
    return (
        <div className="score-board">
    <div className="score"> Your score is {score} / 10 correct answer ! ! ! </div>
    <button className="playBtn" onClick={playAgain} > Play Again </button>
  </div>
    );
}

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;
// #endregion

export default Result;
