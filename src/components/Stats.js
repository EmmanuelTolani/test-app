import React from "react";
const Stats = () => {
  return (
    <div className="stats">
      <div className="container">
      <div className="stats__title-box">
        <span className="stats__subtitle">Pricing</span>
          <h2 className="stats__title">Our Pricing Plan</h2>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
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
