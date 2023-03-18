import React from "react";
import { BsCalculatorFill, BsFillSimFill, BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

import MenuItem from "../components/MenuItem";
import { FiSettings } from "react-icons/fi";

function Sidebar() {
  const menuItems = [
    {
      title: "Terminales",
      icon: <BsCalculatorFill />,
      arrowClose: <BsFillCaretRightFill />,
      arrowOpen: <BsFillCaretDownFill />,
      options: [
        {
          title: "Listado",
          path: "terminals/list",
        },
        {
          title: "Agregar",
          path: "terminals/add",
        },
      ],
    },
    {
      title: "Chips",
      icon: <BsFillSimFill />,
      arrowClose: <BsFillCaretRightFill />,
      arrowOpen: <BsFillCaretDownFill />,
      options: [
        {
          title: "Listado",
          path: "chips/list",
        },
        {
          title: "Agregar",
          path: "chips/add",
        },
      ],
    },
  ];

  const secMenuItems = [
    {
      title: "Settings",
      icon: <FiSettings />,
      arrowClose: <BsFillCaretRightFill />,
      arrowOpen: <BsFillCaretDownFill />,
      options: [
        {
          title: "Acquirentes",
          path: "settings/acquirers",
        },
        {
          title: "Ubicaciones",
          path: "settings/locations",
        },
        {
          title: "Estados",
          path: "settings/statuses",
        },
        {
          title: "Modelos",
          path: "settings/makes",
        },
        {
          title: "Conectividades",
          path: "settings/connectivities",
        },
        {
          title: "Proveedores chips",
          path: "settings/chip-providers",
        },
      ],
    },
  ];

  return (
    <div
      className="fixed top-24 h-full w-72 bg-neutral-50 shadow-oca-green
    shadow-2xl"
    >
      <div>
        {menuItems.map((item) => {
          return <MenuItem item={item} arrowClose={item.arrowClose} arrowOpen={item.arrowOpen} key={item.title} />;
        })}
      </div>
      <div>
        {secMenuItems.map((item) => {
          return <MenuItem item={item} arrowClose={item.arrowClose} arrowOpen={item.arrowOpen} key={item.title} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
