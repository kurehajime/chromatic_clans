import { Card } from "./Card";
import { Color } from "./Color";
import { Field } from "./Field";

type Score = {
    array: number[];
    color: Color;
    point: number;
}

export class Calc {

    public static CalcWin(field1: Field, field2: Field): number {
        const left = Calc.CalcLine(field1.Left, field2.Left);
        const center = Calc.CalcLine(field1.Center, field2.Center);
        const right = Calc.CalcLine(field1.Right, field2.Right);
        return left + center + right;
    }

    public static CalcMaxScore(line1: Card[], line2: Card[]): [Score, Score] {
        const player1_red: number[] = [];
        const player1_blue: number[] = [];
        const player1_green: number[] = [];
        const player1_white: number[] = [];
        const player2_red: number[] = [];
        const player2_blue: number[] = [];
        const player2_green: number[] = [];
        const player2_white: number[] = [];
        const red1 = (line1[2] == Card.Red1 || line2[2] == Card.Red1) && (line1[2] != Card.Green2 && line2[2] != Card.Green2);
        const blue1 = (line1[2] == Card.Blue1 || line2[2] == Card.Blue1) && (line1[2] != Card.Green2 && line2[2] != Card.Green2);
        const green1 = (line1[2] == Card.Green1 || line2[2] == Card.Green1) && (line1[2] != Card.Green2 && line2[2] != Card.Green2);

        for (const c of line1) {
            const color = c / 10 | 0;
            const score = c % 10;
            switch (color) {
                case 1:
                    player1_red.push(blue1 ? 1 : score);
                    break;
                case 2:
                    player1_blue.push(green1 ? 1 : score);
                    break;
                case 3:
                    player1_green.push(red1 ? 1 : score);
                    break;
                case 4:
                    player1_white.push(score);
                    break;
            }
        }
        for (const c of line2) {
            const color = c / 10 | 0;
            const score = c % 10;
            switch (color) {
                case 1:
                    player2_red.push(blue1 ? 1 : score);
                    break;
                case 2:
                    player2_blue.push(green1 ? 1 : score);
                    break;
                case 3:
                    player2_green.push(red1 ? 1 : score);
                    break;
                case 4:
                    player2_white.push(score);
                    break;
            }
        }
        const points1 = [
            { array: player1_red, color: Color.Red, point: Calc.sum(player1_red) } as Score,
            { array: player1_blue, color: Color.Blue, point: Calc.sum(player1_blue) } as Score,
            { array: player1_green, color: Color.Green, point: Calc.sum(player1_green) } as Score,
            { array: player1_white, color: Color.White, point: Calc.sum(player1_white) } as Score,
        ] as Score[];
        let max1 = points1[0] as Score;
        for (const obj of points1) {
            if (obj.point > max1.point) {
                max1 = obj;
            }
        }
        const points2 = [
            { array: player2_red, color: Color.Red, point: Calc.sum(player2_red) } as Score,
            { array: player2_blue, color: Color.Blue, point: Calc.sum(player2_blue) } as Score,
            { array: player2_green, color: Color.Green, point: Calc.sum(player2_green) } as Score,
            { array: player2_white, color: Color.White, point: Calc.sum(player2_white) } as Score,
        ] as Score[];
        let max2 = points2[0] as Score;
        for (const obj of points2) {
            if (obj.point > max2.point) {
                max2 = obj;
            }
        }
        return [max1, max2];
    }

    public static sum(points: number[]): number {
        return points.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }

    public static CalcLine(line1: Card[], line2: Card[]): number {
        const [player1, player2] = Calc.CalcMaxScore(line1, line2);

        const vec = player1.point - player2.point;
        let point = vec === 0 ? 0 : vec > 0 ? 1 : -1;
        if (line1[2] == Card.Red2) {
            point *= 2;
        }
        if (line2[2] == Card.Red2) {
            point *= 2;
        }
        if (line1[2] == Card.Blue2) {
            point *= -1;
        }
        if (line2[2] == Card.Blue2) {
            point *= -1;
        }
        return point;
    }
}