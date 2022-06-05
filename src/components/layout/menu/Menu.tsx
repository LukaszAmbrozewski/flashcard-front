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
            {/*<p>*/}
            {/*    <button className="hide-menu-btn">*/}
            {/*        <MenuIcon className="hide-menu-icon"/>*/}
            {/*    </button>*/}
            {/*</p>*/}
            <MenuBtn text="Rozpocznij naukę"/>
            <MenuBtn text="Wybierz zakres nauki"/>
            <MenuBtn text="Dodaj nową kartę"/>
            <MenuBtn text="Przeglądaj karty"/>
            <MenuBtn text="Statystyki"/>
        </div>
    </div>
}