import React,{useState} from 'react';

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
const ChooseQuiz = () => {
    const [quiz, setQuiz] = useState()
    return(
        <div className='choose-quiz'>
            <div>
            <h1>Choose a Quiz</h1>
            <div className='choose-quiz__all'>
                <div className='choose-quiz__quiz'>
                    
                </div>
            </div>
            </div>
        </div>
    );
}

ChooseQuiz.propTypes = propTypes;
ChooseQuiz.defaultProps = defaultProps;
// #endregion

export default ChooseQuiz;