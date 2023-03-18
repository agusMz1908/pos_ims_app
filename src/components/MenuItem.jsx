import React, { useState } from "react";
import { Link } from "react-router-dom";

function item({ item, arrowClose }) {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button
        className="flex mx-8 my-4 text-neutral-500 items-center font-bold text-2xl first:mt-5 hover:text-oca-green"
        onClick={toggleMenu}
      >
        <div className="flex flex-row items-center space-x-3">
          {item.icon}
          <span>{item.title}</span>
          {showMenu ? item.arrowOpen : item.arrowClose}
        </div>
      </button>
      {showMenu && (
        <div className="flex flex-col mt-3">
          {item.options.map((option) => {
            return (
              <Link
                to={option.path}
                key={option.title}
                className="ml-12 my-1 text-neutral-500 hover:text-oca-green font-bold text-lg
                last:mb-6"
              >
                {option.title}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default item;
