import { Card } from "./Card";
import { Line } from "./Line";

export class Field {
    public readonly Deck: Card[];
    public readonly Hand: Card[];
    public readonly Left: Card[];
    public readonly Center: Card[];
    public readonly Right: Card[];

    constructor(deck: Card[], hand: Card[], left: Card[], center: Card[], right: Card[]) {
        this.Deck = deck;
        this.Hand = hand;
        this.Left = left;
        this.Center = center;
        this.Right = right;
    }

    public Clone(): Field {
        return new Field(
            this.Deck.slice(),
            this.Hand.slice(),
            this.Left.slice(),
            this.Center.slice(),
            this.Right.slice()
        );
    }

    public Summon(handIndex: number, line: Line) {
        const deck = [...this.Deck];
        const hand = [...this.Hand];
        const card = hand.splice(handIndex, 1)[0];
        const left = [...this.Left];
        const center = [...this.Center];
        const right = [...this.Right];
        switch (line) {
            case Line.Left:
                left.push(card);
                break;
            case Line.Center:
                center.push(card);
                break;
            case Line.Right:
                right.push(card);
                break;
            default:
                break;
        }
        if (deck.length > 0) {
            const newHand = deck.shift();
            if (newHand) {
                hand.push(newHand);
            }
        }
        return new Field(deck, hand, left, center, right);
    }

}