import React from "react";
import PropTypes from "prop-types";

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
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <a href="/">Anki</a>
        </div>
        <div className="header__menu">
          <ul className="header__anchor-nav">
            <li>
              <a href="/test" alt="test">
                Test
              </a>
            </li>
            <li>
              <a href="/" alt="courses">
                Courses
              </a>
            </li>
          </ul>
          <ul className="header__profile-nav">
            <li>
              <a href="/" alt="login">
                Login
              </a>
            </li>
            <li>
              <a href="/" alt="sign up">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Header.propTypes = propTypes;
// Header.defaultProps = defaultProps;
// #endregion

export default Header;
