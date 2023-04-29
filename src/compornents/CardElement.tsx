import { Card } from "../utils/Card";
import { Player } from "../utils/Player";
import { BLOCK_SIZE } from "../utils/conf";
type Props = {
    x: number
    y: number
    card?: Card
    player: Player
    stack?: number
}
export default function CardElement(props: Props) {
    const stack = props.stack ?? 0;
    const x = props.x + stack * BLOCK_SIZE * 0.1;
    const y = props.y + stack * BLOCK_SIZE * 0.6;
    const color = props.card ? props.card / 10 | 0 : 0;
    const number = props.card ? props.card % 10 : 0;
    const colorStr = color === 1 ? "#ffeaf4" : color === 2 ? "#ebf4ff" : color === 3 ? "#f4ffeb" : "transparent";
    return (
        <g>
            <rect x={x} y={y} width={BLOCK_SIZE * 2} height={BLOCK_SIZE * 2 * 1.4}
                fill={colorStr}
                stroke="black"
                stroke-opacity="0.2"
            />
            {
                <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 0.5} fontSize={BLOCK_SIZE * 0.5} fill="black">{number > 0 ? number : ""}</text>
            }
        </g>
    )
}