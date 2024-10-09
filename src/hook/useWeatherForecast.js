import { useQuery } from "@tanstack/react-query";
const KEY_API = "3378869f5c1dba640f1b7929c4e82050";

const getWeatherForecast = async ({ lat, lon }) => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY_API}&units=metric`
  const res = await fetch(URL);
  const data = await res.json();
  return await data;
}
const useWeatherForecast = (coord) => {
  return useQuery({
    queryKey: ["weatherForecast", coord.lat, coord.lon],
    queryFn: () => getWeatherForecast(coord),
    enabled: !!coord.lat && !!coord.lon,
  })
};
export default useWeatherForecast;