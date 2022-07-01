import React from 'react';
import {Btn} from "../common/Btn";

export const AddedNewCard = () => {
    return (
        <>
            <h1>Karta została dodana</h1>
            <p>
                <Btn text='Dodaj kolejną kartę' to='/add'/>
            </p>
            <p>
                <Btn text='Rozpocznij naukę' to='/learning'/>
            </p>
        </>
    )
}