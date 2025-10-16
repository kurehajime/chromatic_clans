import { Card } from "./Card";

import witch_red from "../assets/witch_red.webp"
import mermaid_blue from "../assets/mermaid_blue.webp"
import priestess_green from "../assets/priestess_green.webp"
import swordman_red from "../assets/swordman_red.webp"
import thief_blue from "../assets/thief_blue.webp"
import hunter_green from "../assets/hunter_green.webp"
import dragon_red from "../assets/dragon_red.webp"
import kraken_blue from "../assets/kraken_blue.webp"
import ape_green from "../assets/ape_green.webp"
import robo_white from "../assets/robo_white.webp"
import { Color } from "./Color";
import { t } from "i18next";

export class CardParam {
    public static getDescriptions(card: Card | undefined): [string, string] {
        let cardText1 = "";
        let cardText2 = "";
        switch (card) {
            case Card.Red1:
                cardText1 = t("red_1a");
                cardText2 = t("red_1b");
                break;
            case Card.Red2:
                cardText1 = t("red_2a");
                cardText2 = t("red_2b");
                break;
            case Card.Blue1:
                cardText1 = t("blue_1a");
                cardText2 = t("blue_1b");
                break;
            case Card.Blue2:
                cardText1 = t("blue_2a");
                cardText2 = t("blue_2b");
                break;
            case Card.Green1:
                cardText1 = t("green_1a");
                cardText2 = t("green_1b");
                break;
            case Card.Green2:
                cardText1 = t("green_2a");
                cardText2 = t("green_2b");
                break;
            case Card.Rainbow1:
                cardText1 = t("rainbow_1a");
                cardText2 = t("rainbow_1b");
                break;
        }
        return [cardText1, cardText2]
    }
    public static getCardImage(card: Card | undefined): string | undefined {
        let image: string | undefined = undefined;
        switch (card) {
            case Card.Red1:
                image = witch_red;
                break;
            case Card.Red2:
                image = swordman_red;
                break;
            case Card.Red3:
                image = dragon_red;
                break;
            case Card.Blue1:
                image = mermaid_blue;
                break;
            case Card.Blue2:
                image = thief_blue;
                break;
            case Card.Blue3:
                image = kraken_blue;
                break;
            case Card.Green1:
                image = priestess_green;
                break;
            case Card.Green2:
                image = hunter_green;
                break;
            case Card.Green3:
                image = ape_green;
                break;
            case Card.White4:
                image = robo_white;
                break;
            case Card.Rainbow1:
                image = undefined;
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
            case Card.Rainbow1:
                colorStr = "#ff8c42";
                break;
        }
        return colorStr;
    }

    public static getCardName(card: Card | undefined): string {
        switch (card) {
            case Card.Red1:
                return t("red_name1");
            case Card.Red2:
                return t("red_name2");
            case Card.Red3:
                return t("red_name3");
            case Card.Blue1:
                return t("blue_name1");
            case Card.Blue2:
                return t("blue_name2");
            case Card.Blue3:
                return t("blue_name3");
            case Card.Green1:
                return t("green_name1");
            case Card.Green2:
                return t("green_name2");
            case Card.Green3:
                return t("green_name3");
            case Card.White4:
                return t("white_name4");
            case Card.Rainbow1:
                return t("rainbow_name1");
        }
        return "";
    }
}
