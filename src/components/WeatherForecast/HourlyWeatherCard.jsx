
import { WeatherContext } from "../../context/WeatherContext ";
import React, { useContext } from "react";
import moment from "moment";
import HourlyWeatherIcons from "./HourlyWeatherIcons";

export default function HourlyWeatherCard() {
  const { forecastDataForWeek } = useContext(WeatherContext);
  return (
    <>
      {forecastDataForWeek.map((item, index) => {
        const dayOfWeek = moment(item?.dt_txt).format("dddd").substring(0, 3);
        const timeFormatted = moment(item?.dt_txt).format("h A");
        const weatherStatus = item?.weather[0]?.main;
        const temp = item?.main?.temp.toFixed(0);

        return (
          <div
            key={index}
            className="flex flex-col justify-evenly items-center w-16 h-32 sm:w-[84px] sm:h-40 border border-gray-500 rounded-[20px] text-white"
          >
            <div>
              <p className="font-medium">{dayOfWeek}</p>
            </div>
            <p className="font-medium text-[13px]">{timeFormatted}</p>
            <HourlyWeatherIcons
              weatherStatus={weatherStatus}
              time={timeFormatted}
            />
            <p className="font-medium">
              {temp}
              <span>°C</span>
            </p>
          </div>
        );
      })}
    </>
  );
}
