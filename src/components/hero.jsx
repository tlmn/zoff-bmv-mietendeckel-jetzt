import React, { useState } from "react";
import Image from "./image";

const Hero = ({ images }) => {
  const number = Math.floor(Math.random() * images.length);
  const [image] = useState(images[number]);

  return (
    <>
      <div>
        <Image name={image.src} />
        <div
          style={{ paddingTop: "55%", marginTop: "-55%" }}
          className="hero__overlay"
        />
        <div
          id="background-wrap svg-overlay"
          style={{ paddingTop: "55%", marginTop: "-55%" }}
        >
          <div className="bubble x1"></div>
          <div className="bubble x2"></div>
          <div className="bubble x3"></div>
          <div className="bubble x4"></div>
          <div className="bubble x5"></div>
          <div className="bubble x6"></div>
          <div className="bubble x7"></div>
          <div className="bubble x8"></div>
          <div className="bubble x9"></div>
          <div className="bubble x10"></div>
        </div>
      </div>
      <div className="circleTop circle circle--yellow">
        <h1>
          <span>
            <i>Endlich!</i>
            <br />
            {image.text}
          </span>
        </h1>
      </div>
    </>
  );
};

export default Hero;
