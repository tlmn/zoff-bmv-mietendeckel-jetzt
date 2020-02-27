import React from "react";
import Image from "./image";

export default ({ images }) => {
  const image = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <div>
        <Image name={image.src} />
        <div
          style={{ paddingTop: "50%", marginTop: "-50%" }}
          className="hero__overlay"
        ></div>
      </div>
      <div className="text-center">
        <h1 className="circleTop circle circle--yellow text-center">
          {image.text}
        </h1>
      </div>
    </>
  );
};
