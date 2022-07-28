
import React from "react";
import { createContext, FC, useReducer } from "react";
import { initState, reducer } from "./reducer";

const defaultValue={
    state: initState,
    dispatch: () => initState
}

export const AppContext = createContext(defaultValue)

type Props = {
    children: JSX.Element
}

export const AppProvider: FC<Props> = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initState);

    // @ts-ignore
    return <AppContext.Provider value={{ state, dispatch}}>
        {children}
    </AppContext.Provider>
}