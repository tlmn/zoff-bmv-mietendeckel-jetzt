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
          <div className="bubble bubble--1"></div>
          <div className="bubble bubble--2"></div>
          <div className="bubble bubble--3"></div>
          <div className="bubble bubble--4"></div>
          <div className="bubble bubble--5"></div>
          <div className="bubble bubble--6"></div>
          <div className="bubble bubble--7"></div>
          <div className="bubble bubble--8"></div>
          <div className="bubble bubble--9"></div>
          <div className="bubble bubble--10"></div>
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
