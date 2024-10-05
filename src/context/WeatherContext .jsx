import { createContext, useCallback, useState } from "react";
export const WeatherContext = createContext(); //1
import { debounce } from "lodash";
import { useForm } from "react-hook-form";
import { useWeatherApi } from "../hook/useWeatherApi";
import { format } from "date-fns";

export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState("");
  const { data: weatherData, error, isLoading } = useWeatherApi(cityName);
  const { register, handleSubmit, reset } = useForm();

  const city = weatherData?.name;
  const temperature = weatherData?.main.temp.toFixed(0);
  const tempMin = weatherData?.main?.temp_min.toFixed(0);
  const tempMax = weatherData?.main?.temp_max.toFixed(0);
  const feelsLike = weatherData?.main?.feels_like.toFixed(0);
  const description = weatherData?.weather[0]?.description;
  const descriptionWeatherIcons = weatherData?.weather[0]?.description;
  console.log(descriptionWeatherIcons);

  console.log(weatherData);

  //date
  const currentDate = format(new Date(), "eeee");
  const formattedDate = format(new Date(), "dd MMMM, yyyy");

  <div className="text-white">
    <h2 className="text-[40px] mt-[34px] font-medium">{currentDate}</h2>
    <p className="mt-2 text-[16px]">{formattedDate}</p>
  </div>;

  const debouncedSearch = useCallback(
    debounce((value) => {
      setCityName(value);
    }, 1000),
    []
  );
  console.log(typeof error);

  const onSubmitHandler = (data) => {
    setCityName(data.city);
    reset();
  };

  const handleCityChange = (e) => {
    debouncedSearch(e.target.value);
  };

  return (
    <>
      <WeatherContext.Provider
        value={{
          weatherData,
          isLoading,
          error,
          cityName,
          isLoading,
          setCityName,
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
          descriptionWeatherIcons
        }}
      >
        {children}
      </WeatherContext.Provider>
    </>
  );
};
