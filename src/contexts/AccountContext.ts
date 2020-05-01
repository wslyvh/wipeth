import React from 'react';

export interface IAccountContext { 
    authenticated: boolean,
    address?: string,
    provider?: any
}

export type AccountContextType = {
    accountContext: IAccountContext;
    setAccountContext: (value: IAccountContext) => void;
}

export const AccountContext = React.createContext<IAccountContext | undefined>(undefined);
export const useAccountContext = () => React.useContext(AccountContext);

export const AccountContextProvider = AccountContext.Provider;
export const AccountContextConsumer = AccountContext.Consumer;