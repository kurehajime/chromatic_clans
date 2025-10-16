import { Card } from "./Card";
import { Field } from "./Field";
import { FieldSet } from "./FieldSet";
import { GameState } from "./GameState";
import { Phase } from "./Phase";
import { Player } from "./Player";

export class GameMaster {

    public static InitFieldSet(): GameState {
        const field1 = GameMaster.InitFiled();
        const field2 = GameMaster.InitFiled();
        const fs = new FieldSet(field1, field2);
        return new GameState(fs, Player.Player1, Phase.Playing);
    }
    public static DummyFieldSet(): GameState {
        const field1 = GameMaster.DummyField();
        const field2 = GameMaster.DummyField();
        const fs = new FieldSet(field1, field2);
        return new GameState(fs, Player.Player1, Phase.Playing);
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
            Card.White4,
            Card.Rainbow1,
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
