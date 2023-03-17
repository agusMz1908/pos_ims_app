import React from "react";
import { useState } from 'react'
import { BsCalculatorFill, BsFillSimFill } from "react-icons/bs";

import TerminalsMenu from "../components/TerminalsMenu";
import ChipsMenu from "../components/ChipsMenu";
import SettingsMenu from "../components/SettingsMenu";

function Sidebar() {

  return (
    <div className="fixed top-24 h-full w-60 bg-neutral-50 shadow-oca-green shadow-2xl">
      <TerminalsMenu />
      <ChipsMenu />
      <SettingsMenu />
    </div>
  );
}

export default Sidebar;
