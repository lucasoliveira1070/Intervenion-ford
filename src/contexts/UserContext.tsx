import { useNavigation } from '@react-navigation/native';
import React, { createContext, ReactElement, ReactNode, useState } from 'react'

interface UserContextInterface {
    signIn: (username: string, password: string) => void;
    user: string
}

export const UserContext = createContext<UserContextInterface>({} as UserContextInterface);

export const UserContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [user, setUser] = useState('');
    const navigation = useNavigation<any>();

    function signIn(username: string, password: string) {
        if (username !== '' && password !== '') {
            setUser(username)
            navigation.navigate('Home', {})
        }
    }

    return (
        <UserContext.Provider value={{ signIn, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;