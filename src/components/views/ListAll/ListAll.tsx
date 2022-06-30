import React, {useContext, useEffect, useState} from 'react';
import {myContext} from "../../../contexts/auth-context";

import {FlashcardEntity} from 'types'
import Axios, {AxiosResponse} from "axios";
// import axios from "axios";

export const ListAll = () => {
    const ctx = useContext(myContext);
    const [data, setData] = useState<FlashcardEntity[]>([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/api/flashcard/list",
            {
                withCredentials: true
            }).then((res: AxiosResponse) => {
            setData(res.data)
        })
    }, [ctx]);
    if (!data) {
        return null;
    }

    console.log(data)

    return (
        <>
            <h1>Lista dostępnych kart</h1>
            <table>
                <thead>
                <tr>
                    <th>Przód karty</th>
                    <th>Tył karty</th>
                    <th>Kategoria</th>
                </tr>
                </thead>

                {data.map((card: FlashcardEntity) => {
                    return (
                        <tbody>
                        <tr>
                            <th>{card.front}</th>
                            <th>{card.back}</th>
                            <th>{card.category}</th>
                        </tr>
                        </tbody>
                    );
                })}
            </table>
        </>
    )
}