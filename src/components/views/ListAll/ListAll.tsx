import React, {useContext, useEffect, useState} from 'react';
import {myContext} from "../../../contexts/auth-context";

import {FlashcardEntity} from 'types'
import Axios, {AxiosResponse} from "axios";
// import axios from "axios";

export const ListAll = () => {
    const ctx = useContext(myContext);
    const [data, setData] = useState<FlashcardEntity[]>([]);

    console.log(ctx)

    useEffect(() => {
        // axios.request({
        //     method: 'get',
        //     url: 'http://localhost:3001/api/flashcard/list',
        //     data: 'test',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     withCredentials: true
        // }).then((res: AxiosResponse) => {
        //     setData(res.data)
        // })

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


    return (
        <>
            <h1>List All</h1>
            <table>
                <thead>
                <tr>
                    <th>Przód</th>
                    <th>Tył</th>
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