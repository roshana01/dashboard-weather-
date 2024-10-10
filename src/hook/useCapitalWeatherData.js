import { useQuery } from "@tanstack/react-query";
const API_KEY = "3378869f5c1dba640f1b7929c4e82050";

const capitals = ["Rome", "Berlin ", "Tehran", "landon", "Japan", " Vienna"];
export const fetchCapitalWeather = async () => {
  const requests = capitals.map((capital) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}&units=metric`
    )
  );
  try {
    const res = await Promise.all(requests);
    const successfulResponses = res.filter(res => res.ok);
    const errorResponses = res.filter(res => !res.ok);

    if (errorResponses.length > 0) {
      // console.error('Errors occurred while fetching:', errorResponses);
      throw new Error('Failed to fetch some weather data.');
    }

    const data = await Promise.all(successfulResponses.map((res) => res.json()));
    return data;

  } catch (error) {
    // console.error('An error occurred:', error);
    return [];
  }
};
export const useCapitalWeatherApi = () => {
  return useQuery({
    queryKey: ["capitalWeather"],
    queryFn: fetchCapitalWeather,
    // staleTime: 1000 * 60 * 10,
    // cacheTime: 1000 * 60 * 60,
    // refetchOnWindowFocus: false, 
    // refetchOnMount: false,
  });
};
