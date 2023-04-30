import { FieldSet } from "./FieldSet";
import { Hit } from "./Hit";
import { Line } from "./Line";
import { Player } from "./Player";

export class GameState {
    public readonly fieldSet: FieldSet;
    public readonly turn: Player;

    constructor(fieldSet: FieldSet, turn: Player) {
        this.fieldSet = fieldSet;
        this.turn = turn;
    }

    public summon(from: Hit, to: Hit): GameState {
        let handIndex = -1
        let line: Line | null = null
        if (this.turn === Player.Player1 && from === Hit.player1Hand1) {
            handIndex = 0
        }
        if (this.turn === Player.Player1 && from === Hit.player1Hand2) {
            handIndex = 1
        }
        if (this.turn === Player.Player1 && from === Hit.player1Hand3) {
            handIndex = 2
        }
        if (this.turn === Player.Player2 && from === Hit.player2Hand1) {
            handIndex = 0
        }
        if (this.turn === Player.Player2 && from === Hit.player2Hand2) {
            handIndex = 1
        }
        if (this.turn === Player.Player2 && from === Hit.player2Hand3) {
            handIndex = 2
        }
        if (to === Hit.Left) {
            line = Line.Left
        }
        if (to === Hit.Center) {
            line = Line.Center
        }
        if (to === Hit.Right) {
            line = Line.Right
        }
        if (handIndex >= 0 && line) {
            const fs = this.fieldSet.Summon(this.turn, handIndex, line)
            return new GameState(fs, this.turn);
        }
        return this.Clone();
    }

    public canSelect(hit: Hit): boolean {
        if (this.turn === Player.Player1) {
            if (hit === Hit.player1Hand1 && this.fieldSet.Field1.Hand.length > 0) {
                return true
            }
            if (hit === Hit.player1Hand2 && this.fieldSet.Field1.Hand.length > 1) {
                return true
            }
            if (hit === Hit.player1Hand3 && this.fieldSet.Field1.Hand.length > 2) {
                return true
            }
        }
        if (this.turn === Player.Player2) {
            if (hit === Hit.player2Hand1 && this.fieldSet.Field2.Hand.length > 0) {
                return true
            }
            if (hit === Hit.player2Hand2 && this.fieldSet.Field2.Hand.length > 1) {
                return true
            }
            if (hit === Hit.player2Hand3 && this.fieldSet.Field2.Hand.length > 2) {
                return true
            }
        }
        return false
    }
    public canSummon(from: Hit, to: Hit): boolean {
        if (this.canSelect(from) === false) {
            return false
        }
        if (this.turn === Player.Player1) {
            if (to === Hit.Left && this.fieldSet.Field1.Left.length < 3) {
                return true
            }
            if (to === Hit.Center && this.fieldSet.Field1.Center.length < 3) {
                return true
            }
            if (to === Hit.Right && this.fieldSet.Field1.Right.length < 3) {
                return true
            }
        }
        if (this.turn === Player.Player2) {
            if (to === Hit.Left && this.fieldSet.Field2.Left.length < 3) {
                return true
            }
            if (to === Hit.Center && this.fieldSet.Field2.Center.length < 3) {
                return true
            }
            if (to === Hit.Right && this.fieldSet.Field2.Right.length < 3) {
                return true
            }
        }
        return true
    }

    public Clone(): GameState {
        return new GameState(this.fieldSet.Clone(), this.turn);
    }
}