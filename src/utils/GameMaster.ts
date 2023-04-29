import { Card } from "./Card";
import { Field } from "./Field";
import { FieldSet } from "./FieldSet";

export class GameMaster {
    public static InitFieldSet(): FieldSet {
        const field1 = GameMaster.InitFiled();
        const field2 = GameMaster.InitFiled();
        return new FieldSet(field1, field2);
    }
    public static DummyFieldSet(): FieldSet {
        const field1 = GameMaster.DummyField();
        const field2 = GameMaster.DummyField();
        return new FieldSet(field1, field2);
    }

    public static InitFiled(): Field {
        const deck = GameMaster.Shuffle();
        const hand = [
            deck.pop() as Card,
            deck.pop() as Card,
            deck.pop() as Card,
        ]
        const left = [] as Card[];
        const center = [] as Card[];
        const right = [] as Card[];
        return new Field(deck, hand, left, center, right);
    }

    public static DummyField(): Field {
        const deck = GameMaster.Shuffle();
        const hand = [
        ] as Card[];
        const left = [
            deck.pop() as Card,
            deck.pop() as Card,
            deck.pop() as Card,
        ]
        const center = [
            deck.pop() as Card,
            deck.pop() as Card,
            deck.pop() as Card,
        ]
        const right = [
            deck.pop() as Card,
            deck.pop() as Card,
            deck.pop() as Card,
        ]
        return new Field(deck, hand, left, center, right);
    }

    public static Shuffle(): Card[] {
        const deck = [
            Card.Red1,
            Card.Red2,
            Card.Red3,
            Card.Blue1,
            Card.Blue2,
            Card.Blue3,
            Card.Green1,
            Card.Green2,
            Card.Green3,
        ] as Card[];
        for (let i = deck.length - 1; i >= 0; i--) {
            const r = Math.floor(Math.random() * (i + 1))
            const tmp = deck[i]
            deck[i] = deck[r]
            deck[r] = tmp
        }
        return deck;
    }
}
