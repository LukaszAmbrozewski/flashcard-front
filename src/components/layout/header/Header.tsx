import React from 'react';

import './Header.css'

// import {DarkModeBtn} from "./Btn/DarkModeBtn";

interface Props {
    className: string;
}


export const Header = (props: Props) => {

    return (
        <div className={props.className}>
            <h1 className="header-text">FLASHCARD</h1>
            {/*<DarkModeBtn/>*/}
        </div>
    )
}