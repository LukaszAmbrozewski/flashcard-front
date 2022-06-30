import React, {useContext, useEffect, useState} from 'react';
import Axios, {AxiosResponse} from "axios";
import {myContext} from "../../../contexts/auth-context";
import {FlashcardEntity} from 'types'

export const Learning = () => {
    const ctx = useContext(myContext);
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

    console.log(one)

    return (
        <>
            <h1>Nauka</h1>
            <p>{one}</p>
            <button onClick={getOne}>Następna</button>
            <button onClick={setBack}>Obróć</button>
        </>
    )
}

