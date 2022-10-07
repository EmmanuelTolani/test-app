import React from "react";

const Video = () => {
  return (
    <div className="video">
      <div className="container">
        <div className="video__title">
          <h2>
            Watch what Anki can do for you
          </h2>
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
