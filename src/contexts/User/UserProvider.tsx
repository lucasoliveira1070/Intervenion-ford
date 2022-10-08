import { useNavigation } from "@react-navigation/native";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { User } from "../../common/models/User";
import { UserContext } from "./UserContext";
import { api } from "../../hooks/useApi";

export const UserContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [user, setUser] = useState<User>(null!);
    const navigation = useNavigation<any>();
    const USER_ID = 'b8712c2b-03e6-4881-a5d1-7e283c7eafb2';

    useEffect(() => {
        async function fetchUser() {
            try {
                const user = await api.get<User>(`users/${USER_ID}`)
                setUser(user.data)
            } catch (error) {
                console.log(error)
            }

        }
        fetchUser();
    }, [])

    const signIn = async () => {
        navigation.navigate('Home', {})
    }

    return (
        <UserContext.Provider value={{ signIn, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;