import { useState } from 'react'

const SettingsMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div>
            <button className="flex mx-8 my-3 text-neutral-500 items-center font-bold text-2xl first:mt-10 hover:text-oca-green" onClick={toggleMenu}>
                Settings
            </button>
            {showMenu && (
                <div className="flex flex-col">
                    <a className="ml-12 my-2 text-neutral-500 hover:text-oca-green font-bold text-xl" href="#">Adquirente</a>
                    <a className="ml-12 my-2 text-neutral-500 hover:text-oca-green font-bold text-xl" href="#">Ubicación</a>
                </div>
            )}
        </div>
    )
}

export default SettingsMenu