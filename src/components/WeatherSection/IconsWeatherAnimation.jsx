import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { weatherIcons } from "../../data/weatherIcons";
import { WeatherContext } from "../../context/WeatherContext ";

export default function IconsWeatherAnimation() {
  const [animationData, setAnimationData] = useState("");

  const { descriptionWeatherIcons } = useContext(WeatherContext);

  (async () => {
    const data = await weatherIcons[descriptionWeatherIcons]?.();
    setAnimationData(data.default);
  })();

  return (
    <div>
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-[100px] h-[100px] md:w-[250px] md:h-[250px]"
        />
      )}
    </div>
  );
}
