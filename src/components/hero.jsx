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
          style={{ paddingTop: "55%", marginTop: "-55%" }}
          className="svg-overlay--alt-werden"
        />
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
