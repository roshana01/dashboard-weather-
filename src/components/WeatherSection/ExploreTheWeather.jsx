import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/icons/Animation - 1727870962590.json";

export default function ExploreTheWeather() {
  return (
    <div className="flex justify-center items-center h-full">
     
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 550, height: 550 }}
      />
    
    </div>
  );
}
