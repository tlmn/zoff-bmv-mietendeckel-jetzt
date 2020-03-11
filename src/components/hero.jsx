import React, { useState } from "react";
import Image from "./image";
import { Textfit } from "react-textfit";
import ClaimKeineAngstVorMieterhoehung from "../images/claim--keine-angst-vor-mieterhoehung";

const Hero = ({ images }) => {
  //const number = Math.floor(Math.random() * images.length);
  const number = 0;
  const [image] = useState(images[number]);

  return (
    <>
      <div>
        <Image name={image.src} className="d-none d-md-block" />
        <Image name={image.srcMobile} className="d-block d-md-none" />
        <div
          style={{ paddingTop: "55%", marginTop: "-55%" }}
          className="hero__overlay"
        />
        <div className="claim__wrapper">
          <ClaimKeineAngstVorMieterhoehung />
        </div>
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
      {/* <div className="circleTop circle circle--yellow">
        <h1>
          <div>
            <i>Endlich!</i>
          </div>
          <br />
          <div className={image.className}>{image.text}</div>
        </h1>
      </div> */}
    </>
  );
};

export default Hero;
