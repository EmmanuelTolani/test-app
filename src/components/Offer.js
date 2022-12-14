import React from "react";

const Offer = () => {
  return (
    <div className="offers">
      <div className="container">
        <div className="offers__title-box">
          <span className="offers__subtitle">Features</span>
          <h2 className="offers__title">Main Features Of Anki</h2>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="offers__all">
          <div className="offers__offer">
            <div className="offers__offer-logo">
              <i className="fa-solid fa-file-circle-check"></i>
            </div>
            <div className="offers__offer-info">
              <h3 className="offers__offer-title">Live Tests</h3>
              <p className="offers__offer-p">
                Register for the exam you want to appear. You can register in
                single click for the exam of your choice from dashboard.
              </p>
            </div>
          </div>
          <div className="offers__offer">
            <div className="offers__offer-logo">
              <i className="fa-regular fa-circle-question"></i>
            </div>
            <div className="offers__offer-info">
              <h3 className="offers__offer-title">High Yield Questions</h3>
              <p className="offers__offer-p">
                Take live test on time, you can take the missed test from
                dashboard. Live exams link appears only when the exam is live.
              </p>
            </div>
          </div>
          <div className="offers__offer">
            <div className="offers__offer-logo">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
            </div>
            <div className="offers__offer-info">
              <h3 className="offers__offer-title">Insightful Analytics</h3>
              <p className="offers__offer-p">
                Dashboard is true sense that helps you analyze your performance.
                Everytging you do at one place. Your real preparation pal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
