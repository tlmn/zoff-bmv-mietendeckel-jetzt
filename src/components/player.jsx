import React from "react";
import ReactPlayer from "react-player";

export default ({ videoURL, classNames }) => (
  <div className={classNames}>
    <div className="wrapper__player">
      <ReactPlayer
        className="player"
        playing
        url={videoURL}
        width="100%"
        height="100%"
      />
    </div>
  </div>
);
