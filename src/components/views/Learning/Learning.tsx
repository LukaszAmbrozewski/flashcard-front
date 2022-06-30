import React, {useEffect} from 'react';
import Axios, {AxiosResponse} from "axios";

export const Learning = () => {

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getallusers",
            {
                withCredentials: true
            }).then((res: AxiosResponse) => {
            console.log(res.data)
        })
    }, []);

    return (
        <h1>Learning</h1>
    )
}