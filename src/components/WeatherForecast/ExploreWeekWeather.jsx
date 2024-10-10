import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/icons/Animation - 1728559465052.json"

export default function ExploreWeekWeather() {
  return (
    <div className="flex justify-center items-center h-full ">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 800, height: 350 }}
      />
    </div>
  );
}
