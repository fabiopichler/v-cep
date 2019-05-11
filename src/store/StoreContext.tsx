import React, { createContext, useReducer, useContext } from "react";

import { reducer, initialState } from "./reducers";
import { useActions } from "./actions";
import { IStoreContext } from './IStoreContext';

const StoreContext = createContext<IStoreContext | null>(null);

const StoreProvider: React.FC = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const actions = useActions(state, dispatch);

    return (
        <StoreContext.Provider value={{ state, actions }}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;

export const useStoreContext = (): IStoreContext => useContext<IStoreContext | null>(StoreContext)!;
