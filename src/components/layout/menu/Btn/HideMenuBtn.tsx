import React, {MouseEventHandler} from 'react';
import MenuIcon from "@mui/icons-material/Menu";

import './HideMenuBtn.css'

interface Props {
    onClick: MouseEventHandler;
    className: string;
}

export const HideMenuBtn = (props: Props) => {
    return (
        <div className="background-hide-menu-btn">
            <button className={props.className} onClick={props.onClick}>
                <MenuIcon className="hide-menu-icon"/>
            </button>
        </div>
    )
}