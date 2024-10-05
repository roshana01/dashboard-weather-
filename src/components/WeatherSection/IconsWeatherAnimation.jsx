import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { weatherIcons } from "../../data/weatherIcons";
import { WeatherContext } from "../../context/WeatherContext ";

export default function IconsWeatherAnimation() {
  const [animationData, setAnimationData] = useState("");

  const { descriptionWeatherIcons } = useContext(WeatherContext);
  console.log(descriptionWeatherIcons);

  (async () => {
    const data = await weatherIcons[descriptionWeatherIcons]?.();
    setAnimationData(data.default);
    console.log(data);
  })();

  return (
    <div>
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{ width: 250, height: 250 }}
        />
      )}
    </div>
  );
}
