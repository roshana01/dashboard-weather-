import { WeatherContext } from "../../context/WeatherContext ";

import { useContext } from "react";
import ExploreTheWeather from "./ExploreTheWeather";
import WeatherDetails from "./WeatherDetails";
import InvalidCityError from "./InvalidCityError";
import Loading from "../Loading/Loading";

// [few clouds][ clear sky] [overcast clouds] [scattered clouds] [broken clouds][ haze ,rain , snow , sun]

export default function WeatherOverview() {
  const { weatherData, WeatherIsLoading, weatherError } =
    useContext(WeatherContext);

  return (
    <div className="mt-4 w-full sm:w-[690px] h-[270px] sm:h-[350px] bg-[#0E1421] rounded-[20px]">
      {/* {!weatherData && !WeatherIsLoading ? (
        <InvalidCityError />
      ) : WeatherIsLoading ? (
        <>
          <di className="flex justify-center items-center w-full h-[300px] max-h-screen">
            <Loading />
          </di>
        </>
      ) : (
        <WeatherDetails /> //
      )} */}

      {WeatherIsLoading ? (
        <>
          <di className="flex justify-center items-center w-full h-[300px] max-h-screen">
            <Loading />
          </di>
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
