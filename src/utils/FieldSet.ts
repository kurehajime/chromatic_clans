import { Field } from "./Field";
import { Line } from "./Line";
import { Player } from "./Player";

export class FieldSet {
    public readonly Field1: Field
    public readonly Field2: Field
    constructor(field1: Field, field2: Field) {
        this.Field1 = field1;
        this.Field2 = field2;
    }

    public Clone(): FieldSet {
        return new FieldSet(
            this.Field1.Clone(),
            this.Field2.Clone()
        );
    }
    public Summon(player: Player, handIndex: number, line: Line): FieldSet {
        let field1 = this.Field1.Clone()
        let field2 = this.Field2.Clone()
        switch (player) {
            case Player.Player1:
                field1 = this.Field1.Summon(handIndex, line)
                break;
            case Player.Player2:
                field2 = this.Field2.Summon(handIndex, line)
                break;
            default:
                break;
        }
        return new FieldSet(field1, field2);
    }
    public GameSet(): boolean {
        return this.Field1.Hand.length === 0 && this.Field2.Hand.length === 0;
    }
}