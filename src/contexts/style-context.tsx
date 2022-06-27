import {createContext} from "react";

export const StyleContext = createContext({
    hideMenu: false,
    setHideMenu: (b: boolean) => {
    },
});