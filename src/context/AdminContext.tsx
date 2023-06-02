import React, {createContext} from 'react';
import { useUserData } from '@nhost/react'

type ContextType = {
    user: ReturnType<typeof useUserData>;
}

type Props = {
    children: React.ReactNode;
}
export const Context: React.Context<ContextType> = createContext<ContextType>({} as ContextType);

const AdminProvider = ({children}: Props): React.JSX.Element => {
    const user = useUserData();
    const ContextValue: ContextType = {
        user
    }

    return (
        <Context.Provider value={ContextValue}>
            {children}
        </Context.Provider>
    );
}

export default AdminProvider;