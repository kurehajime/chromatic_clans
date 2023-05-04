import { BLOCK_SIZE } from "../utils/conf"

type Props = {
    x: number
    y: number
}
export default function CrownElement(props: Props) {
    const minBlock = BLOCK_SIZE * 0.03
    return (<g>
        <rect x={props.x + 2 * minBlock} y={props.y + 10 * minBlock - 1} width={18 * minBlock} height={3 * minBlock} fill="gold" />
        <polygon points={`${props.x + 2 * minBlock},${props.y + 10 * minBlock} ${props.x + 5 * minBlock},${props.y + 0 * minBlock} ${props.x + 8 * minBlock},${props.y + 10 * minBlock}`} fill="gold" />
        <polygon points={`${props.x + 8 * minBlock},${props.y + 10 * minBlock} ${props.x + 11 * minBlock},${props.y + 0 * minBlock} ${props.x + 14 * minBlock},${props.y + 10 * minBlock}`} fill="gold" />
        <polygon points={`${props.x + 14 * minBlock},${props.y + 10 * minBlock} ${props.x + 17 * minBlock},${props.y + 0 * minBlock} ${props.x + 20 * minBlock},${props.y + 10 * minBlock}`} fill="gold" />
    </g>)
}