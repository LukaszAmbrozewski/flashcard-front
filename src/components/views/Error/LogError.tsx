import React from 'react';
import {Btn} from "../../common/Btn";
import '../common-style.css'

export const LogError = () => {
    return (
        <div className='box'>
            <h1 className='text'>Niepoprawne dane logowania, spróbuj ponownie lub kontynuuj naukę bez logowania.</h1>
            <p>
                <Btn text='Zaloguj się' to='/login'/>
            </p>
            <p>
                <Btn text='Rozpocznij naukę' to='/learning'/>
            </p>
        </div>
    )
}