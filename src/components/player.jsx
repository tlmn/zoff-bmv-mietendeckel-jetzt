import React from 'react';
import ReactPlayer from 'react-player';

const Player = ({ videoURL, classNames }) => (
  <div className={classNames}>
    <div className="wrapper__player">
      <ReactPlayer
        className="player"
        url={videoURL}
        width="100%"
        height="100%"
        controls
      />
    </div>
  </div>
);

export default Player;
