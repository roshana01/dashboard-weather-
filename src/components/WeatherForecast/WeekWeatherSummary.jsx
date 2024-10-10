
import WeatherForecastItem from "./WeatherForecastItem";
import TomorrowForecast from "./TomorrowForecast";
import TomorrowWeatherIcon from "./TomorrowWeatherIcon";


export default function WeekWeatherSummary() {

  return (
    <div className="w-full h-[260px] sm:w-[690px] sm:h-[335px]  bg-[#0E1421] rounded-[20px] px-2 py-1 sm:px-3 sm:py-2 ">
      <div>
        <h1 className="text-white mt-2 ml-3 sm:mt-2 sm:ml-5 text-[12px] sm:text-[17px] font-normal">
          Today/Week
        </h1>
      </div>

      <div
        className="  h-[157px] sm:h-[11rem] 
      grid grid-cols-7 gap-20 ms:gap-2 lg:gap-3 xl:gap-4 bg-[#1e243467] rounded-[20px] p-2 mt-1 sm:mt-3 overflow-x-scroll md:overflow-auto ms:px-2"
      >
        <WeatherForecastItem />
      </div>

      <div className="w-[100%] h-[50px] ms:w-[650px] ms:h-[200px] md:w-[665px] md:h-[60px] mt-2 ms:mt-5 md:mt-4 bg-gradient-to-r from-[#0E1421] via-[#1D325F] to-[#0E1421] flex justify-between rounded-[20px] items-center">
        <TomorrowForecast />
        <TomorrowWeatherIcon />
      </div>
    </div>
  );
}
// ms:h-20 md:40   grid grid-cols-6 gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-custom-6 ms:gap-2 lg:gap-3 xl:gap-4 bg-[#1e243467] rounded-[20px] overflow-x-auto p-2 sm:p-3 mt-1  sm:mt-2
