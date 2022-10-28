import React from "react";

const Video = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="video__title-box">
        <span className="video__subtitle">Learn</span>
          <h2 className="video__title">Learn how Anki Works</h2>
          <p>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        </div>
        <div className="video__vid-box">
          <div className="video__video">
            <iframe
              className="responsive-iframe"
              src="https://www.youtube.com/embed/eVajQPuRmk8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
