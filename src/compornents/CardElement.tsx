import { Card } from "../utils/Card";
import { Player } from "../utils/Player";
import { BLOCK_SIZE, CARD_SIZE } from "../utils/conf";
import reverse from "../assets/reverse.png"
import { CardParam } from "../utils/CardParam";
type Props = {
    x: number
    y: number
    card?: Card
    player: Player
    stack?: number
    hidden?: boolean
    halfOpen?: boolean
}
export default function CardElement(props: Props) {
    const stack = props.stack ?? 0;
    const stackVec = props.player === Player.Player1 ? 1 : -1;
    const x = props.x + stackVec * (stack * BLOCK_SIZE * 0.1);
    const y = props.y + stackVec * (stack * BLOCK_SIZE * 0.6);
    const rotateX = x + CARD_SIZE.width / 2;
    const rotateY = y + CARD_SIZE.height / 2;
    const number = props.card ? props.card % 10 : 0;
    const colorStr = CardParam.getColorStr(props.card)
    const cardText1 = CardParam.getDescriptions(props.card)[0];
    const cardText2 = CardParam.getDescriptions(props.card)[1];
    const image = CardParam.getCardImage(props.card);
    let rotate = ""
    if (props.player === Player.Player2) {
        rotate = `rotate(180,${rotateX},${rotateY})`
    }
    const showFrame = props.card !== undefined || stack === 0;

    return (
        <g transform={rotate} >
            {
                showFrame && <rect x={x} y={y} width={CARD_SIZE.width} height={CARD_SIZE.height}
                    fill={colorStr}
                    stroke="white"
                    strokeOpacity="0.1"
                    rx={BLOCK_SIZE * 0.1} ry={BLOCK_SIZE * 0.1}
                />
            }
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
                    opacity={props.halfOpen ? 0.5 : 1}
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