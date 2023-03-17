import { useState } from "react";
import { FiSettings } from "react-icons/fi";

const SettingsMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <button
        className="flex mx-8 text-neutral-500 items-center font-bold text-2xl first:mt-5 hover:text-oca-green"
        onClick={toggleMenu}
      >
        <div className="flex flex-row items-center space-x-3">
          <FiSettings />
          <span>Settings</span>
        </div>
      </button>
      {showMenu && (
        <div className="flex flex-col mt-3">
          <a
            className="ml-12 my-2 text-neutral-500 hover:text-oca-green font-bold text-lg"
            href="#"
          >
            Adquirente
          </a>
          <a
            className="ml-12 my-2 text-neutral-500 hover:text-oca-green font-bold text-lg"
            href="#"
          >
            Ubicación
          </a>
        </div>
      )}
    </>
  );
};

export default SettingsMenu;
