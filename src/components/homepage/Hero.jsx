import React from "react";
import HeroSlider from "./HeroSlider";
import SmallCarry from "./SmallCarry";

const Hero = () => {
  return (
    <div className="flex">
      <HeroSlider />
      <SmallCarry />
    </div>
  );
};

export default Hero;
