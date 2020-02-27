import React from "react";
import Image from "./image";

export default ({ images }) => {
  const number = Math.floor(Math.random() * images.length);
  const image = images[number];
  console.log(number);
  return (
    <>
      <div>
        <Image name={image.src} />
        <div
          style={{ paddingTop: "50%", marginTop: "-50%" }}
          className="hero__overlay"
        ></div>
      </div>
      <div className="circleTop circle circle--yellow">
        <h1 dangerouslySetInnerHTML={{__html: image.text}}/>
      </div>
    </>
  );
};
