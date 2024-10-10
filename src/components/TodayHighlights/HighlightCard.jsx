import React from "react";
import Lottie from "lottie-react";
import { highlightsData } from "../../data/highlighIcons";

export default function HighlightCard() {
  return (
    <>
      {highlightsData.map((item) => (
        <div
          key={item.id}
          className="bg-[#0E1421] w-[80%] aspect-square sm:w-[235px] sm:h-[150px] rounded-[20px] flex flex-col "
        >
          <p className="text-white mx-2 ms:mx-4 md:mx-5 mt-4 ms:mt-3 md:mt-4">
            {item.title}
          </p>
          <div className="flex justify-center items-center ">
            <Lottie
              animationData={item.icon}
              loop={true}
              autoplay={true}
              className="w-[130px] h-[130px] mt-5 sm:mt-0 md:mt-0 md:w-[115px] md:h-[115px] "
            />
          </div>
        </div>
      ))}
    </>
  );
}
