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

    public Hand1(): Card | undefined {
        if (this.Hand.length > 0) {
            return this.Hand[0]
        }
        return undefined
    }
    public Hand2(): Card | undefined {
        if (this.Hand.length > 1) {
            return this.Hand[1]
        }
        return undefined
    }
    public Hand3(): Card | undefined {
        if (this.Hand.length > 2) {
            return this.Hand[2]
        }
        return undefined
    }

    public getLeft(i: number): Card | undefined {
        if (this.Left.length > i) {
            return this.Left[i]
        }
        return undefined
    }
    public getCenter(i: number): Card | undefined {
        if (this.Center.length > i) {
            return this.Center[i]
        }
        return undefined
    }
    public getRight(i: number): Card | undefined {
        if (this.Right.length > i) {
            return this.Right[i]
        }
        return undefined
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

    public canSummon(handIndex: number, line: Line): boolean {
        if (this.Hand.length <= handIndex) {
            return false;
        }
        if (this.Left.length > 2 && line === Line.Left) {
            return false;
        }
        if (this.Center.length > 2 && line === Line.Center) {
            return false;
        }
        if (this.Right.length > 2 && line === Line.Right) {
            return false;
        }
        return true;
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