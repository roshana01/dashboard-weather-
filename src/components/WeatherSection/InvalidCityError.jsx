import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/icons/Animation - 1727941802165.json"


export default function InvalidCityError() {
  return (
    <div className="flex  items-center justify-center h-full">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: 260, height: 260 }}
      />
      <h1 className="text-[40px] font-bold text-[#364962da]">
        City Not Found :(
      </h1>
    </div>
  );
}
