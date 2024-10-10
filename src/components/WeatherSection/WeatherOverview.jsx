import { WeatherContext } from "../../context/WeatherContext ";

import { useContext } from "react";
import ExploreTheWeather from "./ExploreTheWeather";
import WeatherDetails from "./WeatherDetails";
import InvalidCityError from "../Error/InvalidCityError";
import Loading from "../Loading/Loading";


export default function WeatherOverview() {
  const { weatherData, WeatherIsLoading, weatherError } =
    useContext(WeatherContext);

  return (
    <div className="mt-4 w-full sm:w-[690px] h-[270px] sm:h-[350px] bg-[#0E1421] rounded-[20px]">
      {WeatherIsLoading ? (
        <>
          <div className="flex justify-center items-center w-full h-[300px] max-h-screen">
            <Loading />
          </div>
        </>
      ) : weatherError ? (
        <InvalidCityError />
      ) : !weatherData ? (
        <ExploreTheWeather />
      ) : (
        <WeatherDetails />
      )}
    </div>
  );
}
