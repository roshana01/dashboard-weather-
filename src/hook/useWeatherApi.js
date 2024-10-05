import { useQuery } from "@tanstack/react-query";
const KEY_API = "3378869f5c1dba640f1b7929c4e82050";

export const fetchWeather = async (cityName) => {
  if (!cityName) return null;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY_API}&units=metric`;
  try {
    const res = await fetch(URL);
    console.log(res);
    
    if (!res.ok) {
      throw new Error("")
    } else {
      const data = await res.json();
      console.log
        (`Successfully fetched weather information for ${cityName}!`);
      return data;
    }
  } catch (error) {
    console.error("Error fetching the weather data:", error);
    throw error;
  }
};

export const useWeatherApi = (cityName) => {
  return useQuery({
    queryKey: ['weather', cityName],
    retry: 0,
    refetchOnWindowFocus: false,
    queryFn: () => fetchWeather(cityName),
    enabled: !!cityName
  })
};
