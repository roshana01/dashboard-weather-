import React from 'react'
import animationData from "../../assets/icons/Animation - 1727768987571.json";
import Lottie from 'lottie-react';
export default function TomorrowWeatherIcon() {
  return (
    <>
      <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-[80px] h-[80px] md:w-[130px] md:h-[130px]"
        />
    </>
  )
}
