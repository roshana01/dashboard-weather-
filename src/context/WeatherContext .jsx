import { createContext, useCallback, useEffect, useState } from "react";
export const WeatherContext = createContext(); //1
import { debounce } from "lodash";
import { useForm } from "react-hook-form";
import { useWeatherApi } from "../hook/useWeatherApi";
import { format } from "date-fns";
import useWeatherForecast from "../hook/useWeatherForecast";
import moment from "moment";
import { useCapitalWeatherApi } from "../hook/useCapitalWeatherData";

export const WeatherProvider = ({ children }) => {
  //state
  const [cityName, setCityName] = useState("Russia");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [animationData, setAnimationData] = useState("");
  const [coord, setCoord] = useState({});
  const [forecastDataForWeek, setForecastDataForWeek] = useState([]);
  const [tomorrowData, setTomorrowData] = useState(null);

  //query
  const {
    data: weatherData,
    error: weatherError,
    isLoading: WeatherIsLoading,
  } = useWeatherApi(cityName);
  const {
    data: weekWeatherData,
    error: weekWeatherError,
    isLoading: weekWeatherLoading,
  } = useWeatherForecast(coord);
  // get coord lat lon getWeatherForecast:
  const {
    data: capitalWeatherData,
    error: capitalWeatherError,
    isLoading: capitalWeatherLoading,
  } = useCapitalWeatherApi();
  

  useEffect(() => {
    if (weatherData?.coord) setCoord(weatherData.coord);
  }, [weatherData?.coord]);

  //Hook-form
  const { register, handleSubmit, reset } = useForm();
  //data uesWeatherApi
  const city = weatherData?.name;
  const temperature = weatherData?.main.temp.toFixed(0);
  const tempMin = weatherData?.main?.temp_min.toFixed(0);
  const tempMax = weatherData?.main?.temp_max.toFixed(0);
  const feelsLike = weatherData?.main?.feels_like.toFixed(0);
  const description = weatherData?.weather[0]?.description;
  const descriptionWeatherIcons = weatherData?.weather[0]?.description;

  //date
  const currentDate = format(new Date(), "eeee");
  const formattedDate = format(new Date(), "dd MMMM, yyyy");

  // data uesWeatherForecast:

  useEffect(() => {
    if (weekWeatherData && weekWeatherData.list) {
      setForecastDataForWeek(weekWeatherData.list.slice(0, 7));

      // Find tomorrow's data
      const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
      const tomorrowWeather = weekWeatherData.list.find(
        (item) => moment(item.dt_txt).format("YYYY-MM-DD") === tomorrow
      );
      setTomorrowData(tomorrowWeather);
    }
  }, [weekWeatherData]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setCityName(value);
    }, 1000),
    []
  );

  const onSubmitHandler = (data) => {
    setCityName(data.city);
    reset();
  };

  const handleCityChange = (e) => {
    debouncedSearch(e.target.value);
  };

  const toggleSidebar = () => {
    // setIsSidebarOpen(!isSidebarOpen);
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <WeatherContext.Provider
        value={{
          weatherData,
          weatherError,
          cityName,
          setCityName,
          isSidebarOpen,
          setIsSidebarOpen,
          animationData,
          setAnimationData,
          coord,
          toggleSidebar,
          WeatherIsLoading,
          register,
          handleSubmit,
          handleCityChange,
          debouncedSearch,
          onSubmitHandler,
          city,
          temperature,
          tempMin,
          tempMax,
          feelsLike,
          description,
          currentDate,
          formattedDate,
          descriptionWeatherIcons,
          weekWeatherData,
          weekWeatherError,
          weekWeatherLoading,
          forecastDataForWeek,
          tomorrowData,
          capitalWeatherData,
          capitalWeatherError,
          capitalWeatherLoading
        }}
      >
        {children}
      </WeatherContext.Provider>
    </>
  );
};
