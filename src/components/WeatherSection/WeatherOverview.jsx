import { WeatherContext } from "../../context/WeatherContext ";

import { useContext } from "react";
import ExploreTheWeather from "./ExploreTheWeather";
import WeatherDetails from "./WeatherDetails";
import InvalidCityError from "./InvalidCityError";


// [few clouds][ clear sky] [overcast clouds] [scattered clouds] [broken clouds][ haze ,rain , snow , sun]

export default function WeatherOverview() {
  const { weatherData, error } = useContext(WeatherContext);

  return (
    <>
      {!weatherData && !error ? (
        <ExploreTheWeather />
      ) : error ? (
        <InvalidCityError />
      ) : (
        <WeatherDetails />
      )}
    </>
  );
}