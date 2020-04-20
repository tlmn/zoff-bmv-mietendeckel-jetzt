import React from "react";
import Hero from "./hero";

const HeroWrapper = ({ images }) => {
  return <Hero image={images[Math.floor(Math.random() * images.length)]} />;
};

export default HeroWrapper;
