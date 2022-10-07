import React from "react";
// import styled from 'styled-components';
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
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__links">
          <li className="footer__link"><a href="#">About</a></li>
          <li className="footer__link"><a href="#">Privacy</a></li>
          <li className="footer__link"><a href="#">Terms</a></li>
          <li className="footer__link"><a href="#">Contact</a></li>
          <li className="footer__link"><a href="#">Careers</a></li>
          <li className="footer__link"><a href="#">Challenges</a></li>
        </ul>
        <div className="footer__info">
          <div className="footer__socials">
            <a href="#" alt="facebook"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" alt="linkedin" ><i className="fa-brands fa-linkedin"></i></a>
            <a href="#" alt="twitter" ><i className="fa-brands fa-square-twitter"></i></a>
          </div>
          <span className="footer__copyright">&copy; 2022 Anki</span>
        </div>
      </div>
    </footer>
  );
};

// Header.propTypes = propTypes;
// Header.defaultProps = defaultProps;
// #endregion

export default Footer;
