import { Reward } from "./Reward";

export interface Achievement {
    id: number;
    title: string;
    description: string;
    icon:string;
    color:string;
    route:string;
    acquired:boolean;
    imagePath:string;
    nextStep:string;
    reward: Reward;
}