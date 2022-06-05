import React from 'react';
import {Link} from "react-router-dom";

import './MenuBtn.css'

interface Props {
    text: string;
    to?: string;
}

export const MenuBtn = (props: Props) => (
    props.to
        ? <Link className="menu-btn" to={props.to}>{props.text}</Link>
        : <button className="menu-btn">{props.text}</button>
);