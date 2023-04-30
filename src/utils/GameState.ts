import { FieldSet } from "./FieldSet";
import { Player } from "./Player";

export class GameState {
    public readonly fieldSet: FieldSet;
    public readonly turn: Player;

    constructor(fieldSet: FieldSet, turn: Player) {
        this.fieldSet = fieldSet;
        this.turn = turn;
    }
    public Clone(): GameState {
        return new GameState(this.fieldSet.Clone(), this.turn);
    }
}