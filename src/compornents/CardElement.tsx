import { Card } from "../utils/Card";
import { Player } from "../utils/Player";
import { BLOCK_SIZE, CARD_SIZE } from "../utils/conf";
import reverse from "../assets/reverse.webp"
import { CardParam } from "../utils/CardParam";
import "./CardElement.css"
type Props = {
    x: number
    y: number
    card?: Card
    player: Player
    stack?: number
    hidden?: boolean
    halfOpen?: boolean
    zoom?: boolean
}
export default function CardElement(props: Props) {
    const ZOOM_BLOCK_SIZE = BLOCK_SIZE * (props.zoom ? 2 : 1);
    const CARD_WIDTH = CARD_SIZE.width * (props.zoom ? 2 : 1);
    const CARD_HEIGHT = CARD_SIZE.height * (props.zoom ? 2 : 1);
    const stack = props.stack ?? 0;
    const stackVec = props.player === Player.Player1 ? 1 : -1;
    const x = props.x + stackVec * (stack * ZOOM_BLOCK_SIZE * 0.1);
    const y = props.y + stackVec * (stack * ZOOM_BLOCK_SIZE * 0.6);
    const rotateX = x + CARD_WIDTH / 2;
    const rotateY = y + CARD_HEIGHT / 2;
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
        <g transform={rotate} opacity={props.zoom ? 0.8 : 1}
            className={props.zoom ? "buru" : "card"} >
            {
                showFrame && <rect x={x} y={y} width={CARD_WIDTH} height={CARD_HEIGHT}
                    fill={colorStr}
                    stroke="white"
                    strokeOpacity="0.1"
                    rx={ZOOM_BLOCK_SIZE * 0.1} ry={ZOOM_BLOCK_SIZE * 0.1}
                />
            }
            {
                props.card && <rect
                    x={x + ZOOM_BLOCK_SIZE * 0.1}
                    y={y + ZOOM_BLOCK_SIZE * 1.8}
                    width={ZOOM_BLOCK_SIZE * 1.8}
                    height={ZOOM_BLOCK_SIZE * 0.9}
                    fill="black"
                    strokeOpacity="0.1"
                    stroke="black"
                ></rect>
            }
            {
                props.card && <image href={image} x={x + ZOOM_BLOCK_SIZE * 0.1} y={y + ZOOM_BLOCK_SIZE * 0.5} width={ZOOM_BLOCK_SIZE * 1.8} height={ZOOM_BLOCK_SIZE * 1.8} />
            }
            {
                props.card && <text x={x + ZOOM_BLOCK_SIZE * 0.1} y={y + ZOOM_BLOCK_SIZE * 0.4}
                    fontSize={ZOOM_BLOCK_SIZE * 0.5}
                    fontWeight={600}
                    fill="white"
                    className="card_title"
                >{number > 0 ? number : ""}</text>
            }
            {
                props.card && <text
                    x={x + CARD_WIDTH * 0.95}
                    y={y + ZOOM_BLOCK_SIZE * 0.38}
                    fontSize={ZOOM_BLOCK_SIZE * 0.2}
                    fontWeight={400}
                    fill="white"
                    textAnchor="end"
                    dominantBaseline="central"
                    className="card_title"
                >{CardParam.getCardName(props.card)}</text>
            }
            <text x={x + ZOOM_BLOCK_SIZE * 0.15} y={y + ZOOM_BLOCK_SIZE * 2.4} fontSize={ZOOM_BLOCK_SIZE * 0.17} fill="white" fontFamily="Arial, Helvetica">{cardText1}</text>
            <text x={x + ZOOM_BLOCK_SIZE * 0.15} y={y + ZOOM_BLOCK_SIZE * 2.6} fontSize={ZOOM_BLOCK_SIZE * 0.17} fill="white" fontFamily="Arial, Helvetica">{cardText2}</text>
            {
                props.hidden && <image href={reverse} x={x} y={y} width={CARD_WIDTH} height={CARD_HEIGHT}
                    clipPath={`inset(0px 0px 0px 0px round 3px)`}
                    opacity={props.halfOpen ? 0.5 : 1}
                />
            }
            {
                props.hidden && <rect x={x} y={y} width={CARD_WIDTH} height={CARD_HEIGHT}
                    fill="transparent"
                    stroke="black"
                    rx="3" ry="3"
                ></rect>
            }

        </g>
    )
}