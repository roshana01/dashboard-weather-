import React, { useContext } from "react";
import WeatherInfoCard from "./WeatherInfoCard";
import { WeatherContext } from "../../context/WeatherContext ";
import Loading from "../Loading/Loading";

function MultiCityWeather() {
  const {
    capitalWeatherData,
    capitalWeatherError,
    capitalWeatherLoading,
  } = useContext(WeatherContext);


  return (
    <>
      <div className="flex flex-col">
        {capitalWeatherLoading ? (
          <Loading />
        ) : capitalWeatherError  ? (
          <p className="text-[12px] sm:text-[20px] md:text-[20px] text-[#5c6d84da]">
            Connection lost. Please check your internet and try again.🌐
          </p>
        ) : capitalWeatherData ? (
          <>
            <div className="sm:ml-5 sm:pt-2">
              <h1 className="text-white text-md mb-4">Other Cities</h1>
            </div>
            <div className="grid p-3 grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
              <WeatherInfoCard />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default React.memo(MultiCityWeather);
{
  /* {!capitalWeatherData ? (
        <p>Oops</p>
      ) : (
        <div className="flex flex-col">
          <div className="sm:ml-5 sm:pt-2">
            <h1 className="text-white text-md mb-4">Other Cities</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
            <WeatherInfoCard />
          </div>
        </div>
      )} */
}
