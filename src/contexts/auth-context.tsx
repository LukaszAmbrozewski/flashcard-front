import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';
import Axios, {AxiosResponse} from "axios";
import {UserInterface} from "types";

export const myContext = createContext<Partial<UserInterface>>({})
export default function AuthContext(props: PropsWithChildren<any>) {
    const [user, setUser] = useState<UserInterface>()
    useEffect(() => {
        Axios.get("http://localhost:3001/api/user", {withCredentials: true}).then((res: AxiosResponse) => {
            setUser(res.data);
        })
    }, [])
    return (
        <div>
            <myContext.Provider value={user!}>{props.children}</myContext.Provider>
        </div>
    )
}