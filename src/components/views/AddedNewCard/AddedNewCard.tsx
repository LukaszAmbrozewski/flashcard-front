import React from 'react';
import {Btn} from "../../common/Btn";
import './AddedNewCard.css'

export const AddedNewCard = () => {
    return (
        <div className='added-box'>
            <h1 className='text'>Karta została dodana</h1>
            <p>
                <Btn text='Dodaj kolejną kartę' to='/add'/>
            </p>
            <p>
                <Btn text='Rozpocznij naukę' to='/learning'/>
            </p>
        </div>
    )
}