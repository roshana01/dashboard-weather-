import React from "react";
import { iconData } from "../../data/dataIcons";

export default function IconMenu() {
  return (
    <>
      <ul className="flex flex-col items-center mt-20 gap-[50px]">
        {iconData.slice(0, 5).map((icon) => (
          <li key={icon.id}>
            <a href="#">
              <img src={icon.src} alt={icon.name} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
