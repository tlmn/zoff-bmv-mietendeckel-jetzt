import React, { useState } from "react";
import Image from "./image";
import { Textfit } from "react-textfit";

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
        <div className="d-none d-md-block">
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
            <Textfit mode="multi">{image.text}</Textfit>
          </span>
        </h1>
      </div>
    </>
  );
};

export default Hero;
