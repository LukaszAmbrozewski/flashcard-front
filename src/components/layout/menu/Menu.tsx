import React, {useContext} from "react";

import './Menu.css'
import {MenuBtn} from "./Btn/MenuBtn";
import {LogBtn} from "./Btn/LogBtn";
import {HideMenuBtn} from "./Btn/HideMenuBtn";
import {StyleContext} from "../../../contexts/style-context";

export const Menu = () => {
    const {hideMenu, setHideMenu} = useContext(StyleContext)

    const minMenu = () => {
        if (hideMenu) {
            setHideMenu(false);
        } else {
            setHideMenu(true);
        }
        console.log(hideMenu)
    }

    return (
        <>
            {
                hideMenu ? (
                    <>
                        <HideMenuBtn className={'hide-menu-btn small-hide-menu-btn'} onClick={minMenu}/>
                    </>
                ) : (
                    <div className="menu">
                        <div className="menu-scroll">
                            <LogBtn/>
                            <div className="menu-list">
                                <HideMenuBtn className={'hide-menu-btn'} onClick={minMenu}/>
                                <MenuBtn text="Rozpocznij naukę" to="/learning"/>
                                <MenuBtn text="Dodaj nową kartę" to="/add"/>
                                <MenuBtn text="Przeglądaj karty" to="/list"/>
                                <MenuBtn text="Statystyki" to="/statistics"/>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}