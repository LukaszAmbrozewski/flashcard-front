import React from 'react';
import {Link} from "react-router-dom";

import './Btn.css';

interface Props {
    text: string;
    to?: string;
    onClick?: any;  //
}

export const Btn = (props: Props) => (
    props.to
        ? <Link className="btn" to={props.to} onClick={props.onClick}>{props.text}</Link>
        : <button className="btn">{props.text}</button>
);


