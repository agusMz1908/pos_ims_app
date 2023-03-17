import React from "react";
import { useState } from 'react'
import { BsCalculatorFill, BsFillSimFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import TerminalsMenu from "../components/TerminalsMenu";
import ChipsMenu from "../components/ChipsMenu";
import SettingsMenu from "../components/SettingsMenu";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  const sidebarItems = [
    {
      title: "Terminals",
      icon: <BsCalculatorFill />,
      subOptions: [
        { label: 'Listado' },
        { label: 'Agregar' }
      ]
    },
    {
      title: "Chips",
      icon: <BsFillSimFill />,
      subOptions: [
        { label: 'Listado' },
        { label: 'Agregar' }
      ]
    },
    {
      title: "Settings",
      icon: <FiSettings />,
      subOptions: [
        { label: 'Agregar adquirente' },
        { label: 'Agregar ubicación' }
      ]
    }
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="fixed top-24 h-full w-60 bg-neutral-50 shadow-oca-green shadow-2xl">
      <TerminalsMenu />
      <ChipsMenu />
      <SettingsMenu />
    </div>
  );
}

export default Sidebar;
