import React from "react";

import './Menu.css'
import {MenuBtn} from "./Btn/MenuBtn";
import {LogBtn} from "./Btn/LogBtn";
import {HideMenuBtn} from "./Btn/HideMenuBtn";

export const Menu = () => {

    return <div className="menu">
        <LogBtn/>
        <div className="menu-list">
            <HideMenuBtn/>
            <MenuBtn text="Rozpocznij naukę"/>
            <MenuBtn text="Dodaj nową kartę"/>
            <MenuBtn text="Przeglądaj karty"/>
            <MenuBtn text="Statystyki"/>
        </div>
    </div>
}