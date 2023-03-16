import React from "react";

import { BsCalculatorFill, BsFillSimFill } from "react-icons/bs";

function Sidebar() {
  const sidebarItems = [
    { title: "Terminals", icon: <BsCalculatorFill /> },
    { title: "Chips", icon: <BsFillSimFill /> },
  ];

  return (
    <div
      className="fixed top-24 h-full w-60 bg-neutral-50
      shadow-oca-green shadow-2xl"
    >
      {sidebarItems.map((item) => {
        return (
          <div
            className="flex mx-8 my-6 text-neutral-500 items-center font-bold
          text-xl first:mt-10 hover:text-oca-green"
          >
            {item.icon}
            <div className="ml-6">{item.title}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
