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
                    <div className='log-btn log-box'>
                        <div className="icon-box">
                            <AccountCircleIcon className="person-icon"/>
                        </div>
                        <div className='logged-box'>
                            {ctx.username}
                        </div>
                    </div>
                ) : (
                    <Link className="log-btn" to="/login">
                        <div className="icon-box">
                            <AccountCircleIcon className="person-icon"/>
                        </div>
                        <div className="log-text">
                            Logowanie
                        </div>
                    </Link>
                )
            }
        </>
    )
}