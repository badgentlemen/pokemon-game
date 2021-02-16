import { Pokemon } from "./Pokemon";

export interface Cell {
    position: number;
    card?: Pokemon | null;
}