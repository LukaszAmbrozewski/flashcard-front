import React, {useEffect, useState} from 'react';
import Axios, {AxiosResponse} from "axios";
import {FlashcardEntity} from 'types'

import './Learning.css'
import '../common-style.css'

export const Learning = () => {
    const [flashcardObj, setFlashcardObj] = useState<FlashcardEntity[]>();
    const [one, setOne] = useState<string>();

    const getOne = () => {
        Axios.get("http://localhost:3001/api/flashcard/one",
            {
                withCredentials: true
            }).then((res: AxiosResponse) => {
            setFlashcardObj(res.data)
            setOne(res.data[0].front)
        })
    }

    const setBack = () => {
        if (flashcardObj) {
            setOne(flashcardObj[0].back)
        }
    }

    useEffect(() => {
        getOne()
    }, []);
    if (!flashcardObj) {
        return null;
    }

    return (
        <div className='box'>
            <h1 className='text'>Sekcja nauki</h1>
            <div className='card-background'>
                <div>
                    <p className='text-flashcard'>{one}</p>
                </div>
            </div>
            <button onClick={getOne} className="learn-btn">następna</button>
            <button onClick={setBack} className="learn-btn">obróć</button>
        </div>
    )
}

