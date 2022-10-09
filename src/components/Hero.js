import React from 'react';
// import styled from 'styled-components';
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
const Hero = () => {
    return (
    <div className="hero">
        <div className="hero__image">
            <div className="hero__info">
            <span className="hero__subtitle">Learn Faster Now. Study Smarter.</span>
               <h1 className="hero__title">Anki Learning Software</h1>
               <span className="hero__p">Study with Anki spaced repetition platform and boost learning for the rest of your life.</span>
               <div className="hero__info-links">
                    <a href='#'>Try for free!</a>
               </div>
            </div>
            {/* <img
                src="https://images.pexels.com/photos/6140676/pexels-photo-6140676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="hero__image-img"
            /> */}
        </div>
    </div>
);
}

// Header.propTypes = propTypes;
// Header.defaultProps = defaultProps;
// #endregion

export default Hero;