import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { WeatherContext } from "../context/WeatherContext ";
import Loading from "./Loading";

export default function SearchDashboard() {
  const {
    onSubmitHandler,
    register,
    handleCityChange,
    handleSubmit,
    isLoading,
  } = useContext(WeatherContext);
 
  return (
    <form
      className="flex items-center"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="relative w-[690px]">
        <input
          type="text"
          className="bg-[#0E1421] py-4 px-7 w-full rounded-[20px] pr-10 text-[20px] text-[#b6bfd0]"
          placeholder="enter your city name..."
          {...register("city", { onchange: handleCityChange })}
        />
        <div className="absolute right-5 top-4 flex items-center">
          {isLoading ? (
            <Loading className="loading loading-ring loading-lg bg-[#742BEC]" />
          ) : (
            <IoSearch className="text-[#742BEC] w-7 h-7" />
          )}
        </div>
      </div>
    </form>
  );
}
