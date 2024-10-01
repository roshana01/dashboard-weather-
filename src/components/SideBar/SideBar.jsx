import IconMenu from "./IconMenu";
import LogoTitle from "./LogoTitle";
import ModeToggle from "./ModeToggle";

export default function SideBar() {
  return (
    <div className="w-[87px] h-[775px] mx-6 mt-2 flex flex-col bg-[#0E1421] rounded-[20px] items-center justify-start py-4">
      <LogoTitle />
      <IconMenu />
      <ModeToggle />
    </div>
  );
}
