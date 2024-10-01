import React from "react";

export default function LogoTitle() {
  return (
    <div className="flex flex-col items-center mt-5 space-y-2">
      <img src="./src/assets/img/logo.svg" alt="Logo" className="w-12 h-12" />
      <p className="text-white text-sm font-semibold tracking-wide">SkySense</p>
    </div>
  );
}
