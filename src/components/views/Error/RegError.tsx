import React from 'react';
import {Btn} from "../../common/Btn";
import '../common-style.css'

export const RegError = () => {
    return (
        <div className='box'>

            <h1 className='text'>Podano niepoprawne dane do rejestracji lub użytkownik o takiej nazwie istnieje już w
                bazie. Spróbuj ponownie lub kontynuuj naukę bez konta.</h1>
            <p>
                <Btn text='Rejestracja' to='/registration'/>
            </p>
            <p>
                <Btn text='Rozpocznij naukę' to='/learning'/>
            </p>
        </div>
    )
}