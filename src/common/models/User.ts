import { Achievement } from "./Achievement";

export interface User {
    id: number;
    username: string;
    name: string;
    cpf: string;
    score: number;
    achievements?: Achievement[];
}

