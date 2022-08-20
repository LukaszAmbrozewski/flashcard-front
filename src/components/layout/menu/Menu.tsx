import React, {useContext} from "react";

import './Menu.css'
import {MenuBtn} from "./Btn/MenuBtn";
import {LogBtn} from "./Btn/LogBtn";
import {HideMenuBtn} from "./Btn/HideMenuBtn";
import {StyleContext} from "../../../contexts/style-context";
import {myContext} from "../../../contexts/auth-context";
import Axios, {AxiosResponse} from "axios";
import {apiUrl} from "../../../config/api";

export const Menu = () => {
    const {hideMenu, setHideMenu} = useContext(StyleContext)
    const ctx = useContext(myContext);

    const minMenu = () => {
        if (hideMenu) {
            setHideMenu(false);
        } else {
            setHideMenu(true);
        }
        console.log(hideMenu)
    }

    const logout = () => {
        Axios.get(`${apiUrl}/logout`, {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if (res.data === "success") {
                window.location.href = "/"
            }
        })
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

                                {
                                    ctx ? (
                                        <MenuBtn text="Wyloguj" onClick={logout}/>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}