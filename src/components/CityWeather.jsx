import { IoLocationSharp } from "react-icons/io5";
import Lottie from "lottie-react";
import animationData from "../assets/icons/Animation - 1727789626500.json";

export default function CityWeather() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col my-7 mx-14">
        <div className="flex flex-row rounded-[20px] justify-center items-center w-[85px] h-7 bg-[#742BEC] mt-6">
          <IoLocationSharp className="text-white w-4 h-4" />
          <p className="text-white text-md gap-2">Iran</p>
        </div>

        <div className="text-white">
          <h2 className="text-[40px] mt-[34px] font-medium">Monday</h2>
          <p className="mt-2 text-[16px]">24 Dec, 2024</p>
        </div>

        <div className="text-white">
          <p className="text-[65px] font-medium">
            26<span>°C</span>
          </p>
        </div>

        <div className="text-white flex gap-4">
          <p>
            High: <span>27</span>
          </p>
          <p>
            Low: <span>10</span>
          </p>
          <img src="./src/assets/img/cloud_svgrepo.com.svg" alt="" className="" />
        </div>
      </div>
      <img src="./src/assets/img/cloud_svgrepo.com.svg" alt="" className="" />
      <div className="text-white flex flex-col px-6 items-center  mt-4">
        <div>
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 250, height: 250 }}
          />
        </div>
        <div className="mb-6">
       
          <p className="text-[32px]">Cloudy</p>
          <p>
            Feels Like<span>27</span>
          </p>
        </div>
        
      </div>
    </div>
  );
}
