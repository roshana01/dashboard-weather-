import React from "react";
import SideBar from "./SideBar/SideBar";
import SearchDashboard from "./SearchDashboard";
import { WeatherProvider } from "../context/WeatherContext ";
import WeatherOverview from "./WeatherSection/WeatherOverview";
import TodayHighlights from "./TodayHighlights";

export default function App() {
  return (
    <WeatherProvider>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 p-2 ">
          <SearchDashboard />
          <div className="mt-4 w-[690px] h-[369px] bg-[#0E1421] rounded-[20px] ">
            <WeatherOverview />
          </div>
        </div>
        {/* <TodayHighlights /> */}
      </div>
    </WeatherProvider>
  );
}
