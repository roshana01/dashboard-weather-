import { useContext } from "react";
import { weatherForecastIcons } from "../../data/weatherForecastIcons";
import { WeatherContext } from "../../context/WeatherContext ";
export default function HourlyWeatherIcons({ weatherStatus, time }) {
  const { tomorrowData } = useContext(WeatherContext);

  const isDayTime = time.toLowerCase().includes("pm");
  const weatherDescription = tomorrowData?.weather[0]?.description.toLowerCase();
  const icon = weatherForecastIcons[weatherDescription];

  return (
    <>
      <div>
        <img
          src={icon ? (isDayTime ? icon.day : icon.night) : defaultIcon}
          alt={weatherStatus}
          className="w-4 h-4 sm:w-7 sm:h-7"
        />
      </div>
    </>
  );
}
