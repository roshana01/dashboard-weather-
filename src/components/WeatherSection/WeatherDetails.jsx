import React, { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";

import { WeatherContext } from "../../context/WeatherContext ";
import IconsWeatherAnimation from "./IconsWeatherAnimation";

export default function WeatherDetails() {
  const {
    city,
    temperature,
    tempMin,
    tempMax,
    feelsLike,
    description,
    currentDate,
    formattedDate,
  } = useContext(WeatherContext);

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col my-7 mx-14">
        <div className="flex flex-row rounded-[20px]  items-center max-w-[120px] h-7 bg-[#742BEC] mt-6 px-1">
          <IoLocationSharp className="text-white w-4 h-4" />
          <p className="text-white text-md gap-2 ">{city}</p>
        </div>

        <div className="text-white">
          <h2 className="text-[40px] mt-[34px] font-medium">{currentDate}</h2>
          <p className="mt-2 text-[16px]">{formattedDate}</p>
        </div>

        <div className="text-white">
          <p className="text-[65px] font-medium">
            {temperature}
            <span>°C</span>
          </p>
        </div>

        <div className="text-white flex gap-4">
          <p>
            High: <span>{tempMax}</span>
          </p>
          <p>
            Low: <span>{tempMin}</span>
          </p>
          <img
            src="./src/assets/img/cloud_svgrepo.com.svg"
            alt=""
            className=""
          />
        </div>
      </div>
      <img src="./src/assets/img/cloud_svgrepo.com.svg" alt="" className="" />
      <div className="text-white flex flex-col px-6 items-center  mt-4">
        <IconsWeatherAnimation />
        <div className="mb-6">
          <p className="text-[30px] break-words truncate">{description}</p>
          <p>
            Feels Like:<span> {feelsLike}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
