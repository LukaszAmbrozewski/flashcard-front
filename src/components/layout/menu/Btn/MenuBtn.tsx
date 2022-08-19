import React, {MouseEventHandler} from 'react';
import {Link} from "react-router-dom";

import './MenuBtn.css'

interface Props {
    text: string;
    to?: string;
    onClick?: MouseEventHandler;
}

export const MenuBtn = (props: Props) => (
    props.to
        ? <Link className="menu-btn" to={props.to}>{props.text}</Link>
        : <button onClick={props.onClick} className="menu-btn">{props.text}</button>
);