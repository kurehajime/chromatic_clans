import { Card } from "../utils/Card";
import { Player } from "../utils/Player";
import { BLOCK_SIZE, CARD_SIZE } from "../utils/conf";
import princess_red from "../assets/princess_red.png"
import princess_blue from "../assets/princess_blue.png"
import princess_green from "../assets/princess_green.png"
import swordman_red from "../assets/swordman_red.png"
import swordman_blue from "../assets/swordman_blue.png"
import swordman_green from "../assets/swordman_green.png"
import dragon_red from "../assets/dragon_red.png"
import dragon_blue from "../assets/dragon_blue.png"
import dragon_green from "../assets/dragon_green.png"
import reverse from "../assets/reverse.png"
type Props = {
    x: number
    y: number
    card?: Card
    player: Player
    stack?: number
    hidden?: boolean
}
export default function CardElement(props: Props) {
    const stack = props.stack ?? 0;
    const stackVec = props.player === Player.Player1 ? 1 : -1;
    const x = props.x + stackVec * (stack * BLOCK_SIZE * 0.1);
    const y = props.y + stackVec * (stack * BLOCK_SIZE * 0.6);
    const rotateX = x + CARD_SIZE.width / 2;
    const rotateY = y + CARD_SIZE.height / 2;
    const color = props.card ? props.card / 10 | 0 : 0;
    const number = props.card ? props.card % 10 : 0;
    const colorStr = color === 1 ? "#b8008d" : color === 2 ? "#008db7" : color === 3 ? "#8db800" : "lightgray";
    let cardText1 = "";
    let cardText2 = "";
    let image = "";
    switch (props.card) {
        case Card.Red1:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の青を１にする";
            image = princess_red;
            break;
        case Card.Red2:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の勝点は２倍";
            image = swordman_red;
            break;
        case Card.Red3:
            image = dragon_red;
            break;
        case Card.Blue1:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の赤を１にする";
            image = princess_blue;
            break;
        case Card.Blue2:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の勝点は０";
            image = swordman_blue;
            break;
        case Card.Blue3:
            image = dragon_blue;
            break;
        case Card.Green1:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の青を１にする";
            image = princess_green;
            break;
        case Card.Green2:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の効果は無効";
            image = swordman_green;
            break;
        case Card.Green3:
            image = dragon_green;
            break;
    }
    let rotate = ""
    if (props.player === Player.Player2) {
        rotate = `rotate(180,${rotateX},${rotateY})`
    }

    return (
        <g transform={rotate} >
            <rect x={x} y={y} width={CARD_SIZE.width} height={CARD_SIZE.height}
                fill={colorStr}
                stroke="black"
                strokeOpacity="0.1"
                rx="3" ry="3"
            />
            {
                props.card && <rect
                    x={x + BLOCK_SIZE * 0.1}
                    y={y + BLOCK_SIZE * 1.8}
                    width={BLOCK_SIZE * 1.8}
                    height={BLOCK_SIZE * 0.9}
                    fill="black"
                    strokeOpacity="0.1"
                    stroke="black"
                ></rect>
            }
            {
                props.card && <image href={image} x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 0.5} width={BLOCK_SIZE * 1.8} height={BLOCK_SIZE * 1.8} />
            }
            {
                <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 0.4}
                    fontSize={BLOCK_SIZE * 0.5}
                    fontWeight={600}
                    fill="white"
                >{number > 0 ? number : ""}</text>
            }
            <text x={x + BLOCK_SIZE * 0.2} y={y + BLOCK_SIZE * 2.4} fontSize={BLOCK_SIZE * 0.2} fill="white">{cardText1}</text>
            <text x={x + BLOCK_SIZE * 0.2} y={y + BLOCK_SIZE * 2.6} fontSize={BLOCK_SIZE * 0.2} fill="white">{cardText2}</text>
            {
                props.hidden && <image href={reverse} x={x} y={y} width={CARD_SIZE.width} height={CARD_SIZE.height}
                    clipPath={`inset(0px 0px 0px 0px round 3px)`}
                />
            }
            {
                props.hidden && <rect x={x} y={y} width={CARD_SIZE.width} height={CARD_SIZE.height}
                    fill="transparent"
                    stroke="black"
                    rx="3" ry="3"
                ></rect>
            }

        </g>
    )
}