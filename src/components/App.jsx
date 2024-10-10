import React from "react";
import SideBar from "./SideBar/SideBar";
import { WeatherProvider } from "../context/WeatherContext ";
import WeatherOverview from "./WeatherSection/WeatherOverview";
import WeekWeatherSummary from "./WeatherForecast/WeekWeatherSummary";
import MultiCityWeather from "./MultiCityWeather/MultiCityWeather";
import SearchDashboard from "./SearchBar/SearchDashboard";
import TodayHighlights from "./TodayHighlights/TodayHighlights";

export default function App() {
  return (
    <WeatherProvider>
      <div className="flex flex-col sm:flex-row h-screen ">
        <SideBar className="hidden sm:block sm:w-auto" />
        <div className="flex-1 py-1 px-2 sm:py-2 sm:px-2">
          <SearchDashboard />
          <div className="flex flex-col gap-3">
            <WeatherOverview />
            <WeekWeatherSummary />
          </div>
        </div>
        <div className="w-[96%] h-auto mt-2 sm:w-[650px] sm:h-[775px] bg-[#0E1421] rounded-[20px] mx-auto sm:mx-5 flex flex-col items-start gap-2">
          <TodayHighlights />
          <div className="w-[90%] ml-3 my-2 md:w-[625px] md:my-2 md:mx-3 flex justify-center items-center  h-[400px] bg-[#060C1A] rounded-[20px]">
            <MultiCityWeather />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}
