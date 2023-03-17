import React from "react";
import logo from "../assets/images/logo.png";

import { BiLogOut, BiSearchAlt } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed w-full px-16 h-24 bg-oca-green flex justify-between items-center">
      <Link to="/">
        <img src={logo} alt="logo" className="h-14" />
      </Link>
      <div className="flex items-center">
        <input
          type="text"
          className="bg-green-200 h-8 rounded-l-lg z-10 pl-4 text-green-600 font-bold "
        />
        <button className="bg-green-200 h-8 px-4 rounded-r-lg hover:bg-green-300">
          <BiSearchAlt className="text-neutral-700" />
        </button>
      </div>
      <div className="flex space-x-6 text-white font-bold">
        <button>
          <FiUser
            size={40}
            className="rounded-full p-2 bg-green-200 text-oca-green hover:text-oca-green hover:bg-black"
          />
        </button>
        <button>
          <BiLogOut size={35} className="hover:text-black" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
