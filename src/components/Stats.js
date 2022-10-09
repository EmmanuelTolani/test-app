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
const Stats = () => {
  return (
    <div className="stats">
      <div className="container">
        <div className="stats__title-box">
          <h2 className="stats__title">Let us handle the rest</h2>
          <p>Stay focused on your goal. Here's what makes us special.</p>
        </div>
        <div className="stats__all">
          <div className="stats__stat">
            <div className="stats__stat-number">
            <h3>100%</h3>
            </div>
            <div className="stats__stat-info">
              <h3 className="stats__stat-title">Satisfaction</h3>
            </div>
          </div>
          <div className="stats__stat">
          <div className="stats__stat-number">
            <h3>24/7</h3>
            </div>
            <div className="stats__stat-info">
              <h3 className="stats__stat-title">Support</h3>
            </div>
          </div>
          <div className="stats__stat">
          <div className="stats__stat-number">
            <h3>1000+</h3>
            </div>
            <div className="stats__stat-info">
              <h3 className="stats__stat-title">Tests</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stats;