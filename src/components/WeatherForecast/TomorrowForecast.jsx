import React, { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext ';

export default function TomorrowForecast() {
  const { tomorrowData } = useContext(WeatherContext);
  return (
    <>
       <div className="flex text-white items-center gap-5 p-2 ms:p-3 md:p-3 mx-2 ms:mx-4 md:mx-6">
          <div>
            <p className="text-[14px] ms:text-[16px] md:text-[18px]">
              Tomorrow
            </p>
            <p className="text-[10px] ms:text-[13px] md:text-[13px] text-[#676B73]">
              Thunder storm
            </p>
          </div>
          <div>
            <p className="ms:text-[40px] md:text-[40px] font-semibold">
              {tomorrowData?.main?.temp.toFixed(0) || "N/A"}
              <span>°C</span>
            </p>
          </div>
          {/* icon */}
        </div>
    </>
  )
}
