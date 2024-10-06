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
      <div className="flex flex-col mx-5 my-8 md:mx-14 md:my-4">
        <div className="flex flex-row rounded-[20px] items-center max-w-[130px] h-7 bg-[#742BEC] mt-2 px-1 md:mt-6 md:px-2">
          <IoLocationSharp className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          <p className="text-white text-md gap-2">{city}</p>
        </div>

        <div className="text-white">
          <h2 className="text-[36px] md:text-[40px] mt-2 md:mt-[34px] font-medium">
            {currentDate}
          </h2>
          <p className="md:mt-2 text-[14px] md:text-[16px]">{formattedDate}</p>
        </div>

        <div className="text-white">
          <p className="text-[45px] md:text-[65px] font-medium">
            {temperature}
            <span>°C</span>
          </p>
        </div>

        <div className="text-white flex md:flex-row gap-4 items-center">
          <p className="text-[12px] md:text-[16px] whitespace-nowrap">
            High: <span className="font-bold">{tempMax}</span>
          </p>
          <p className="text-[12px] md:text-[16px] whitespace-nowrap">
            Low: <span className="font-bold">{tempMin}</span>
          </p>

          <img
            src="./src/assets/img/cloud_svgrepo.com.svg"
            alt=""
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
      </div>

      <img src="./src/assets/img/cloud_svgrepo.com.svg" alt="" className="" />

      <div className="text-white flex flex-col px-2 ms:px-8 md:px-8 items-center mt-2 ms:mt-4">
        <IconsWeatherAnimation />
        <div className="mb-6">
          <p className="text-[16px] sm:text-[30px] break-words truncate">
            {description}
          </p>
          <p className="text-[12px] sm:text-[16px]">
            Feels Like:<span className="font-bold"> {feelsLike}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
