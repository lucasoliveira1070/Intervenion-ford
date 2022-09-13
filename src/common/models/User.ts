import { Achievement } from "./Achievement";

export interface User{
    id: number;
    name: string;
    cpf: string;
    score:number;
    achievements?: Achievement[];
}

