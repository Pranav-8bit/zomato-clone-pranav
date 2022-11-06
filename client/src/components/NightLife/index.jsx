import React from "react";
// components
import NightLifeCarousel from "./NightLifeCarousel";

const NightLife = () => {
  return (
    <div className="mb-10">
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        NightLife Resaturant in Ahmedabad
      </h1>
      <NightLifeCarousel />
    </div>
  );
};

export default NightLife;
