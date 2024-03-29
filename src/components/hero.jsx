import React, { useState, useEffect } from "react";
import Image from "./image";

import ClaimKeineAngstVorMieterhoehung from "../images/claims/claim--keine-angst-vor-mieterhoehung";
import ClaimAltWerdenInMeinemKiez from "../images/claims/claim--alt-werden-in-meinem-kiez";
import ClaimAlleineWohnen from "../images/claims/claim--alleine-wohnen";
import ClaimReichtDieKohle from "../images/claims/claim--reicht-die-kohle";
import ClaimMehrPlatzFuerFreunde from "../images/claims/claim--mehr-platz-fuer-freunde";

const getRandomImage = images => images[Math.floor(Math.random() * images.length)];

const Hero = ({ images }) => {
  let [image, setImage] = useState(getRandomImage(images));
  let [status, setStatus] = useState(false);

  useEffect(() => {
    setImage(getRandomImage(images));
    setStatus(true);
  }, []);

  return (
    <>
      <div>
        {image && (
          <>
            <Image name={image.src} className="d-none d-md-block" />
            <Image name={image.srcMobile} className="d-block d-md-none" />
          </>
        )}
        <div
          style={{ paddingTop: "55%", marginTop: "-55%" }}
          className="hero__overlay"
        />
        {image && status === true && (
          <div className="claim__wrapper">
            {image.src === "header-keine-angst-vor-mieterhoehungen.jpg" && <ClaimKeineAngstVorMieterhoehung />}
            {image.src === "header-alt-werden-im-eigenen-kiez.jpg" && <ClaimAltWerdenInMeinemKiez />}
            {image.src === "header-platz-fuer-freunde.jpg" && <ClaimMehrPlatzFuerFreunde />}
            {image.src === "header-alleine-wohnen.jpg" && <ClaimAlleineWohnen />}
            {image.src === "header-reicht-die-kohle.jpg" && <ClaimReichtDieKohle />}
          </div>
        )}
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
    </>
  );
};

export default Hero;
