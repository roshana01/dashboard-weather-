// import Lottie from "lottie-react";
// import animationData from "../assets/icons/Animation - 1727768987571.json";
// import { iframeUrls } from "../assets/iframes";

import React from "react";
import SideBar from "./SideBar/SideBar";
import SearchDashboard from "./SearchDashboard";
import CityWeather from "./CityWeather";

export default function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 p-2 ">
        <SearchDashboard />
        <div className="mt-4 w-[690px] h-[369px] bg-[#0E1421]  rounded-[20px] ">
          <CityWeather />
        </div>
      </div>
    </div>
  );
}
