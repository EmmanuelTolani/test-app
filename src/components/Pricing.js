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
const Pricing = () => {
  return (
    <div className="pricings">
      <div className="container">
        <div className="pricings__title-box">
          <h2 className="pricings__title">Pricing</h2>
          <span className="pricings__p">We don't brag, but we don't mind letting our students do it for us.</span>
        </div>
        <div className="pricings__all">
          <div className="pricings__pricing">
            <div className="pricings__pricing-info">
              <h3 className="pricings__pricing-title">Basic Plan</h3>
              <h4 className="pricings__pricing-price">
                Free
              </h4>
              <p className="pricings__pricing-p">
                Register for the exam you want to appear. You can register in single click for the exam of your choice from dashboard.
              </p>
            </div>
            <a className="pricings__pricing-button" href="#">
              Buy Now
            </a>
          </div>
          <div className="pricings__pricing">
            <div className="pricings__pricing-info">
              <h3 className="pricings__pricing-title">Premium Plan</h3>
              <h4 className="pricings__pricing-price">
                $15 monthly
              </h4>
              <p className="pricings__pricing-p">
                Register for the exam you want to appear. You can register in single click for the exam of your choice from dashboard.
              </p>
            </div>
            <a className="pricings__pricing-button" href="#">
              Buy Now
            </a>
          </div>
          <div className="pricings__pricing">
            <div className="pricings__pricing-info">
              <h3 className="pricings__pricing-title">Organization Plan</h3>
              <h4 className="pricings__pricing-price">
                $60 monthly
              </h4>
              <p className="pricings__pricing-p">
                Register for the exam you want to appear. You can register in single click for the exam of your choice from dashboard.
              </p>
            </div>
            <a className="pricings__pricing-button" href="#">
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;
// #endregion

export default Pricing;
