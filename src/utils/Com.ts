import { Calc } from "./Calc";
import { Card } from "./Card";
import { Field } from "./Field";
import { FieldSet } from "./FieldSet";
import { Line } from "./Line";

export type Action = {
    field: Field,
    handIndex: number,
    line: Line,
    point?: number,
}

export class Com {

    public static getBestAction(count: number, fieldSet: FieldSet): Action {
        const actions = this.getNextActions(fieldSet.Field2);
        const field1 = this.getVirtualField(fieldSet.Field1);
        for (const action of actions) {
            let avg = 0;
            for (let i = 0; i < count; i++) {
                const fill1 = this.fillField(field1);
                const fill2 = this.fillField(action.field);
                const win = Calc.CalcWin(fill1, fill2);
                if (win < 0) {
                    avg += 1;
                } else if (win === 0) {
                    avg += 0;
                } else {
                    avg += -1;
                }
            }
            action.point = avg / count;
        }

        let max = actions[0]
        for (const action of actions) {
            if (action.point && action.point > (max.point ?? 0)) {
                max = action
            }
        }

        return max;
    }

    public static getNextActions(field: Field): Action[] {
        const actions = [] as Action[];
        const hands = [0, 1, 2]
        const lines = [Line.Left, Line.Center, Line.Right]
        for (const hand of hands) {
            for (const line of lines) {
                if (field.canSummon(hand, line)) {
                    if (field.canSummon(hand, line)) {
                        actions.push({
                            field: field.Summon(hand, line),
                            handIndex: hand,
                            line: line
                        })
                    }
                }
            }
        }
        return actions;
    }

    public static getVirtualField(field: Field): Field {
        const deck = field.Deck.slice();
        const hand = field.Hand.slice();
        const left = field.Left.slice();
        const center = field.Center.slice();
        const right = field.Right.slice();
        deck.push(...hand);
        deck.push(...left.splice(2, 1));
        deck.push(...center.splice(2, 1));
        deck.push(...right.splice(2, 1));

        return new Field(deck, hand, left, center, right);
    }
    public static fillField(field: Field): Field {
        const deck = field.Deck.slice();
        deck.push(...field.Hand);
        const left = field.Left.slice();
        const center = field.Center.slice();
        const right = field.Right.slice();
        for (let i = deck.length - 1; i >= 0; i--) {
            const r = Math.floor(Math.random() * (i + 1))
            const tmp = deck[i]
            deck[i] = deck[r]
            deck[r] = tmp
        }
        for (let i = left.length; i < 3; i++) {
            left.push(deck.pop() as Card);
        }
        for (let i = center.length; i < 3; i++) {
            center.push(deck.pop() as Card);
        }
        for (let i = right.length; i < 3; i++) {
            right.push(deck.pop() as Card);
        }

        return new Field(deck, [], left, center, right);
    }
}