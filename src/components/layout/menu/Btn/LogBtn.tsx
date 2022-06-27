import React, {useContext} from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {myContext} from '../../../../contexts/auth-context';
import Axios, {AxiosResponse} from "axios";

import './LogBtn.css'
import {Link} from "react-router-dom";


export const LogBtn = () => {
    const ctx = useContext(myContext);
    console.log(ctx)

    const logout = () => {
        Axios.get("http://localhost:3001/api/logout", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            //Jeżeli udało się wylogować chcemy przekierować użytkownika na stronę główną window.location.href
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