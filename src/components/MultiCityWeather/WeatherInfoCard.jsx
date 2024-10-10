import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext ";
import multiWeatherIcons from "../../data/multiCityWeather";
export default function WeatherInfoCard() {
  const { capitalWeatherData } = useContext(WeatherContext);

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case "clear":
        return multiWeatherIcons.clear;
      case "clouds":
        return multiWeatherIcons.cloudy;
      case "rain":
        return multiWeatherIcons.rain;
      case "snow":
        return multiWeatherIcons.snow;
      case "fog":
        return multiWeatherIcons.fog;
      case "hail":
        return multiWeatherIcons.hail;
      case "wind":
        return multiWeatherIcons.windy;
      case "thunderstorm":
        return multiWeatherIcons.thunderstorm;
      default:
        return multiWeatherIcons.clear;
    }
  };

  return (
    <>
      {capitalWeatherData?.map((item) => (
        <div
          key={item.id}
          className="bg-[#0E1421] w-[120px] h-[100px] aspect-square sm:w-[180px] sm:h-[120px] rounded-[20px] flex flex-col justify-between"
        >
          <div className="flex justify-around mt-2">
            <div>
              <p className="text-[19px] md:text-[40px] font-normal text-white mt-2 ml-3">
                {item.main.temp.toFixed(0)}
                <span>°</span>
              </p>
              <p className="text-[#8494b3] mx-2 sm:mx-4 md:mx-5 mt-2 text-[14px] md:text-[16px] whitespace-nowrap">
                {item.name}
              </p>
            </div>
            <div className="flex justify-end items-end mx-2 md:mx-4">
              <img
                src={getWeatherIcon(item.weather[0].main.toLowerCase())}
                alt={item.weather[0].description}
                className="sm:w-20 sm:h-20 md:w-12 md:h-12 w-10 h-10"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
