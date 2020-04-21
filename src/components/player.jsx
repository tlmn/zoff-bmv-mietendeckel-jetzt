import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "gatsby";
import Image from "../components/image";
import PlayIcon from "../images/icons/playIcon";

const Player = ({ videoURL, classNames }) => {
  const [playerStatus, setPlayerStatus] = useState(false);
  function handleClick() {
    setPlayerStatus(true);
  }
  return (
    <div className={classNames}>
      {playerStatus === false ? (
        <>
          <div className="position-relative">
            <button
              className="player__button"
              style={{ zIndex: 1 }}
              onClick={() => handleClick()}
            >
              <div className="player__icon">
                <PlayIcon />
              </div>
              <p className="player__disclaimer">
                Mit einem Klick stimmst du der Einbettung eines YouTube-Videos
                zu und spielst das Kampagnen-Video ab.{" "}
                <Link to="/datenschutz">Erfahre mehr zum Datenschutz</Link>
              </p>
            </button>
            <Image name="campaign-video-still.jpg" />
          </div>
        </>
      ) : (
        <div className="wrapper__player">
          <ReactPlayer
            className="player"
            url={videoURL}
            width="100%"
            height="100%"
            controls
          />
        </div>
      )}
    </div>
  );
};

export default Player;
