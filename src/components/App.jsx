import React from "react";
import SideBar from "./SideBar/SideBar";
import SearchDashboard from "./SearchDashboard";
import { WeatherProvider } from "../context/WeatherContext ";
import WeatherOverview from "./WeatherSection/WeatherOverview";

export default function App() {
  return (
    <WeatherProvider>
      <div className="flex flex-col sm:flex-row h-screen">
      <SideBar className="hidden sm:block sm:w-auto" />
        <div className="flex-1 py-1 px-2 sm:py-2 sm:px-2">
          <SearchDashboard />
          <div className="mt-4 w-full sm:w-[690px] h-[300px] sm:h-[369px] bg-[#0E1421] rounded-[20px]">
            <WeatherOverview />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}




