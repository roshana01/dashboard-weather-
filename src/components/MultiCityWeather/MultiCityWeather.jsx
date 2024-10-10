import React from "react";
import WeatherInfoCard from "./WeatherInfoCard";

function MultiCityWeather() {
  return (
    <div className="flex flex-col">
      <div className="sm:ml-5 sm:pt-2">
        <h1 className="text-white text-md mb-4">Other Cities</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
        <WeatherInfoCard />
      </div>
    </div>
  );
}

export default React.memo(MultiCityWeather);
