import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [showMenu, updateMenuState] = useState(false);
    let menuStateClass = showMenu ? 'hamburger-menu-container active' : 'hamburger-menu-container'

    return(
        <div className="header-hamburger-container">
            <div className="hamburger-container" onClick={() => updateMenuState(!showMenu)}>
                <div className="hamburger"></div>
            </div>
            <div className={menuStateClass}>

            </div>
        </div>
    )
}

export default HamburgerMenu;