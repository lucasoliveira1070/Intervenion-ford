import { Reward } from "./Reward";

export interface Achievement {
    id: number;
    name: string;
    description: string;
    reward: Reward;
}