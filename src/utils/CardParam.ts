import { Card } from "./Card";

import princess_red from "../assets/princess_red.png"
import princess_blue from "../assets/princess_blue.png"
import princess_green from "../assets/princess_green.png"
import swordman_red from "../assets/swordman_red.png"
import swordman_blue from "../assets/swordman_blue.png"
import swordman_green from "../assets/swordman_green.png"
import dragon_red from "../assets/dragon_red.png"
import dragon_blue from "../assets/dragon_blue.png"
import dragon_green from "../assets/dragon_green.png"
import giant_white from "../assets/giant_white.png"
import { Color } from "./Color";

export class CardParam {
    public static getDescriptions(card: Card | undefined): [string, string] {
        let cardText1 = "";
        let cardText2 = "";
        switch (card) {
            case Card.Red1:
                cardText1 = "一番上にある時、";
                cardText2 = "この列の緑を１にする";
                break;
            case Card.Red2:
                cardText1 = "一番上にある時、";
                cardText2 = "この列の勝点は２倍";
                break;
            case Card.Blue1:
                cardText1 = "一番上にある時、";
                cardText2 = "この列の赤を１にする";
                break;
            case Card.Blue2:
                cardText1 = "一番上にある時、";
                cardText2 = "この列の勝敗を逆転";
                break;
            case Card.Green1:
                cardText1 = "一番上にある時、";
                cardText2 = "この列の青を１にする";
                break;
            case Card.Green2:
                cardText1 = "一番上にある時、";
                cardText2 = "この列の効果は無効";
                break;
        }
        return [cardText1, cardText2]
    }
    public static getCardImage(card: Card | undefined): string {
        let image = "";
        switch (card) {
            case Card.Red1:
                image = princess_red;
                break;
            case Card.Red2:
                image = swordman_red;
                break;
            case Card.Red3:
                image = dragon_red;
                break;
            case Card.Blue1:
                image = princess_blue;
                break;
            case Card.Blue2:
                image = swordman_blue;
                break;
            case Card.Blue3:
                image = dragon_blue;
                break;
            case Card.Green1:
                image = princess_green;
                break;
            case Card.Green2:
                image = swordman_green;
                break;
            case Card.Green3:
                image = dragon_green;
                break;
            case Card.White4:
                image = giant_white;
                break;
        }
        return image;
    }

    public static getColorStrByColor(color: Color): string {
        let colorStr = "transparent";
        switch (color) {
            case Color.Red:
                colorStr = "#b8008d";
                break;
            case Color.Blue:
                colorStr = "#008db7";
                break;
            case Color.Green:
                colorStr = "#8db800";
                break;
            case Color.White:
                colorStr = "#999999";
                break;
        }
        return colorStr;
    }

    public static getColorStr(card: Card | undefined): string {
        let colorStr = "transparent";
        switch (card) {
            case Card.Red1:
            case Card.Red2:
            case Card.Red3:
                colorStr = "#b8008d";
                break;
            case Card.Blue1:
            case Card.Blue2:
            case Card.Blue3:
                colorStr = "#008db7";
                break;
            case Card.Green1:
            case Card.Green2:
            case Card.Green3:
                colorStr = "#8db800";
                break;
            case Card.White4:
                colorStr = "#999999";
                break;
        }
        return colorStr;
    }
}