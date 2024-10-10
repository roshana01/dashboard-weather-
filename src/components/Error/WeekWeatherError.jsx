import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/icons/Animation - 1727941802165.json";

export default function WeekWeatherError() {
  return (
    <div className="flex  items-center justify-center h-full">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 100, height: 100 }}
      />
      <h1 className="text-[20px] px-3 ms:text-[30px] md:text-[30px] font-medium text-[#5c6d84da]">
        Weather data not available. Please try again
      </h1>
    </div>
  );
}
