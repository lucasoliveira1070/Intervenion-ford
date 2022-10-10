import { createContext } from 'react';
import { User } from '../../common/models/User';

export type UserContext = {
    user: User | null
    signIn: (username:string) =>void;    
}

export const UserContext = createContext<UserContext>(null!);

