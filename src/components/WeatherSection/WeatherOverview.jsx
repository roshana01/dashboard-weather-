import { WeatherContext } from "../../context/WeatherContext ";

import { useContext } from "react";
import ExploreTheWeather from "./ExploreTheWeather";
import WeatherDetails from "./WeatherDetails";
import InvalidCityError from "./InvalidCityError";


// [few clouds][ clear sky] [overcast clouds] [scattered clouds] [broken clouds][ haze ,rain , snow , sun]

export default function WeatherOverview() {
  const { weatherData, WeatherIsLoading } = useContext(WeatherContext);

  return (
    <div className="mt-4 w-full sm:w-[690px] h-[270px] sm:h-[350px] bg-[#0E1421] rounded-[20px]">
      {!weatherData && !WeatherIsLoading ? (
        <ExploreTheWeather />
      ) : WeatherIsLoading ? (
        <InvalidCityError />
      ) : (
        <WeatherDetails />
      )}
    </div>
  );
}