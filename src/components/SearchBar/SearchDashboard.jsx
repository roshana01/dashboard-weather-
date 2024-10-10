import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { WeatherContext } from "../../context/WeatherContext ";
import Loading from "../Loading/Loading";

export default function SearchDashboard() {
  const {
    onSubmitHandler,
    register,
    handleCityChange,
    handleSubmit,
    WeatherIsLoading,
  } = useContext(WeatherContext);

  return (
    <form
      className="flex items-center justify-center sm:block"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="relative w-[270px] sm:w-[690px] flex">
        <input
          type="text"
          className="bg-[#0E1421] py-3 px-4 sm:py-4 sm:px-7 w-full rounded-[20px] pr-10 text-[17px] text-[#b6bfd0] z-10 relative sm:text-[20px] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#742BEC] focus:ring-opacity-50 focus:ring-offset-2 focus:shadow-lg hover:shadow-lg"
          placeholder="search for your city name..."
          {...register("city", { onChange: handleCityChange })}
        />

        <div className="absolute right-5 top-3 sm:top-4 flex items-center z-20">
          {WeatherIsLoading ? (
            <Loading className="loading loading-ring loading-lg bg-[#742BEC]" />
          ) : (
            <button type="submit" className="z-20">
              <IoSearch className="text-[#742BEC] w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
