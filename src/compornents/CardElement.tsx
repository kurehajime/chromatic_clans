import { Card } from "../utils/Card";
import { Player } from "../utils/Player";
import { BLOCK_SIZE, CARD_SIZE } from "../utils/conf";
type Props = {
    x: number
    y: number
    card?: Card
    player: Player
    stack?: number
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
    const colorStr = color === 1 ? "#ffeaf4" : color === 2 ? "#ebf4ff" : color === 3 ? "#f4ffeb" : "lightgray";
    let cardText1 = "";
    let cardText2 = "";
    switch (props.card) {
        case Card.Red1:
            cardText1 = "一番上にある時、";
            cardText2 = "青を０にする";
            break;
        case Card.Red2:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の勝点は２倍";
            break;
        case Card.Blue1:
            cardText1 = "一番上にある時、";
            cardText2 = "赤を０にする";
            break;
        case Card.Blue2:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の勝点は０";
            break;
        case Card.Green1:
            cardText1 = "一番上にある時、";
            cardText2 = "青を０にする";
            break;
        case Card.Green2:
            cardText1 = "一番上にある時、";
            cardText2 = "この列の効果は無効";
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
                <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 0.5}
                    fontSize={BLOCK_SIZE * 0.5}
                    fontWeight={600}
                    fill="black">{number > 0 ? number : ""}</text>
            }
            {
                props.card && <rect
                    x={x + BLOCK_SIZE * 0.1}
                    y={y + BLOCK_SIZE * 1.6}
                    width={BLOCK_SIZE * 1.8}
                    height={BLOCK_SIZE * 0.9}
                    fill="transparent"
                    strokeOpacity="0.1"
                    stroke="black"
                ></rect>
            }
            <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 1.9} fontSize={BLOCK_SIZE * 0.2} fill="black">{cardText1}</text>
            <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 2.1} fontSize={BLOCK_SIZE * 0.2} fill="black">{cardText2}</text>
        </g>
    )
}