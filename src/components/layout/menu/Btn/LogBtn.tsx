import React, {useContext} from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';
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
                    <Link className='log-btn' onClick={logout} to="/login">
                        <div className="icon-box">
                            <AccountCircleIcon className="person-icon"/>
                        </div>
                        <div className='logged-box'>
                            <div className='user-text'>{ctx.username}</div>
                            <div className='log-text logout-text'>
                                Wyloguj
                                <LogoutIcon className='icon-logout'/>
                            </div>
                        </div>
                    </Link>
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