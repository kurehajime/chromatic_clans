import { Card } from "../utils/Card"
import { Player } from "../utils/Player"
import CardElement from "./CardElement"

type Props = {
    x: number
    y: number
    card: Card
    player: Player
}
export default function ZoomElement(props: Props) {
    return (
        <g style={{ pointerEvents: "none" }}>
            <CardElement card={props.card} player={props.player}
                zoom={true} x={props.x} y={props.y}
            />
        </g>
    )
}