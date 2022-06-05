import React from 'react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import './LogBtn.css'

export const LogBtn = () => {
    return (
        <button className="log-btn">
            <AccountCircleIcon className="person-icon"/>
            Logowanie
        </button>
    )
}