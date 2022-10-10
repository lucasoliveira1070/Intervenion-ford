import { useNavigation } from "@react-navigation/native";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { User } from "../../common/models/User";
import { UserContext } from "./UserContext";
import { api } from "../../hooks/useApi";

export const UserContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
    const [user, setUser] = useState<User>(null!);
    const navigation = useNavigation<any>();

    const signIn = async (username: string) => {
        try {
            const user = await api.get<User>(`users/findbyusername/${username}`)
            if (user.data.id == null || user.data.id == undefined) {
                alert('Usuário não encontrado.')
                return;
            }

            setUser(user.data)
            navigation.navigate('Home', {})
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <UserContext.Provider value={{ signIn, user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;