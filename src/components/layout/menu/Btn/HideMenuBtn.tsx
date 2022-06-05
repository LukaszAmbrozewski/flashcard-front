import React from 'react';
import MenuIcon from "@mui/icons-material/Menu";

import './HideMenuBtn.css'

export const HideMenuBtn = () => {
    return (
        <button className="hide-menu-btn">
            <MenuIcon className="hide-menu-icon"/>
        </button>
    )
}