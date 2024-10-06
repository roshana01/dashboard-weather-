import { useContext } from "react";
import IconMenu from "./IconMenu";
import LogoTitle from "./LogoTitle";
import ModeToggle from "./ModeToggle";
import { IoMenu } from "react-icons/io5";
// import { WeatherContext } from "../../context/WeatherContext ";

export default function SideBar() {
  const toggleMenu = () => {
    console.log("open sideBar");
  };
  return (
    <>
      <div className="block sm:hidden">
        <button onClick={toggleMenu}>
          <IoMenu className="w-7 h-7 text-[#742BEC]" />
        </button>
      </div>
      <div className="hidden sm:block">
        <div className="w-[87px] h-[775px] mx-6 mt-2 flex flex-col bg-[#0E1421] rounded-[20px] items-center justify-start py-4">
          <LogoTitle />
          <IconMenu />
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
// const { isSidebarOpen, setIsSidebarOpen, toggleSidebar } =
//   useContext(WeatherContext);

// return (
//   <div>
//     <button onClick={toggleSidebar} className="sm:hidden">
//       {" "}
//       <img src="./assets/img/logo.svg" alt="Menu" className="w-20 h-20" />
//     </button>

//     {isSidebarOpen && (
//       <div
//         className="fixed inset-0 bg-black opacity-50 z-10"
//         onClick={toggleSidebar}
//       ></div>
//     )}
