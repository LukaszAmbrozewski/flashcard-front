import React, {useContext} from 'react';
import {myContext} from '../../../contexts/auth-context';

import './Header.css'

// import {DarkModeBtn} from "./Btn/DarkModeBtn";

interface Props {
    className: string;
}


export const Header = (props: Props) => {
    const ctx = useContext(myContext);

    return (
        <div className={props.className}>
            <h1 className="header-text">FLASHCARD</h1>

            {/*<DarkModeBtn/>*/}
        </div>
    )
}