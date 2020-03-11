import React, { useState } from "react";
import Image from "./image";
import ClaimKeineAngstVorMieterhoehung from "../images/claims/claim--keine-angst-vor-mieterhoehung";
import ClaimAltWerdenInMeinemKiez from "../images/claims/claim--alt-werden-in-meinem-kiez";
import ClaimAlleineWohnen from "../images/claims/claim--alleine-wohnen";
import ClaimReichtDieKohle from "../images/claims/claim--reicht-die-kohle";
import ClaimMehrPlatzFuerFreunde from "../images/claims/claim--mehr-platz-fuer-freunde";

const Hero = ({ images }) => {
  const number = Math.floor(Math.random() * images.length);
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
          {number === 0 && <ClaimKeineAngstVorMieterhoehung />}
          {number === 1 && <ClaimAltWerdenInMeinemKiez />}
          {number === 2 && <ClaimMehrPlatzFuerFreunde />}
          {number === 3 && <ClaimAlleineWohnen />}
          {number === 4 && <ClaimReichtDieKohle />}
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
