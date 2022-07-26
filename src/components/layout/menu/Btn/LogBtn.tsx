import React, {useContext} from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {myContext} from '../../../../contexts/auth-context';
import Axios, {AxiosResponse} from "axios";

import './LogBtn.css'
import {Link} from "react-router-dom";
import {apiUrl} from "../../../../config/api";


export const LogBtn = () => {
    const ctx = useContext(myContext);

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
                ctx ? (
                    <div>
                        <Link className="log-btn log-btn-smaller" onClick={logout} to="/login">
                            <AccountCircleIcon className="person-icon"/>
                            Wyloguj: {ctx.username}
                        </Link>
                    </div>
                ) : (
                    <>
                        <Link className="log-btn" to="/login">
                            <AccountCircleIcon className="person-icon"/>
                            Logowanie
                        </Link>
                    </>
                )
            }
        </>
    )
}