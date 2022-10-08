import { Reward } from "./Reward";

export interface Achievement {
    id: number;
    title: string;
    description: string;
    icon:string;
    color:string;
    acquired:boolean;
    reward: Reward;
}