import React from "react";
import HighlightCard from "./HighlightCard";

export default function TodayHighlights() {
  return (
    <div className="w-[90%] h-auto sm:w-[530px] text-center sm:text-left sm:min-h-[375px] bg-gradient-to-r from-[#162850] to-[#121A2D] my-3 mx-auto rounded-[20px] flex flex-col p-3 md:py-2">
      <div className="sm:ml-5 sm:pt-2">
        <h1 className="text-white text-md mb-4">Today Highlights</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-3 justify-items-center">
        <HighlightCard />
      </div>
    </div>
  );
}
