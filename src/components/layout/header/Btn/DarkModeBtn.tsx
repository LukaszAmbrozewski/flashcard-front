import React from 'react';
import DarkModeIcon from "@mui/icons-material/DarkMode";

import './DarkModeBtn.css'

export const DarkModeBtn = () => {

    return (
        <button className="dark-mode-btn">
            <DarkModeIcon/>
            <p>Tryb ciemny</p>
        </button>
    )
}