import { Card } from "./Card";

export class Calc {
    public static CalcLinePoint(line1: Card[], line2: Card[]): [number, number] {
        let player1_red = 0;
        let player1_blue = 0;
        let player1_green = 0;
        let player2_red = 0;
        let player2_blue = 0;
        let player2_green = 0;
        const red1 = line1[2] == Card.Red1 || line2[2] == Card.Red1;
        const blue1 = line1[2] == Card.Blue1 || line2[2] == Card.Blue1;
        const green1 = line1[2] == Card.Green1 || line2[2] == Card.Green1;

        for (const c of line1) {
            const color = c / 10 | 0;
            const score = c % 10;
            switch (color) {
                case 1:
                    player1_red += score;
                    break;
                case 2:
                    player1_blue += score;
                    break;
                case 3:
                    player1_green += score;
                    break;
            }
        }
        for (const c of line2) {
            const color = c / 10 | 0;
            const score = c % 10;
            switch (color) {
                case 1:
                    player2_red += score;
                    break;
                case 2:
                    player2_blue += score;
                    break;
                case 3:
                    player2_green += score;
                    break;
            }
        }
        if (red1) {
            player1_green *= 0;
            player2_green *= 0;
        }
        if (blue1) {
            player1_red *= 0;
            player2_red *= 0;
        }
        if (green1) {
            player1_blue *= 0;
            player2_blue *= 0;
        }

        return [Math.max(player1_red, player1_blue, player1_green), Math.max(player2_red, player2_blue, player2_green)]
    }
    public static CalcLine(line1: Card[], line2: Card[]): number {
        const red2 = line1[2] == Card.Red2 || line2[2] == Card.Red2;
        const blue2 = line1[2] == Card.Blue2 || line2[2] == Card.Blue2;
        const green2 = line1[2] == Card.Green2 || line2[2] == Card.Green2;

        const [player1, player2] = Calc.CalcLinePoint(line1, line2);

        let point = player1 - player2;
        if (red2 && !green2) {
            point *= 2;
        }
        if (blue2 && !green2) {
            point *= 0;
        }

        return point;
    }
}