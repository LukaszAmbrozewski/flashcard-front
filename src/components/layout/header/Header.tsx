import React from 'react';

import './Header.css'
import {DarkModeBtn} from "./Btn/DarkModeBtn";

export const Header = () => {

    return (
        <div className="header">
            <h1 className="header-text">FLASHCARD</h1>
            <DarkModeBtn/>
        </div>
    )
}