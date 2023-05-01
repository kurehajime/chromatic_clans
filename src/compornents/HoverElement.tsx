import { Card } from "../utils/Card";
import { Player } from "../utils/Player";
import { CARD_SIZE } from "../utils/conf";
import CardElement from "./CardElement";
type Props = {
    x: number
    y: number
    card?: Card
    player: Player
}
export default function HoverElement(props: Props) {
    const x = props.x - (CARD_SIZE.width / 2);
    const y = props.y - (CARD_SIZE.height / 2);
    return (
        <g>
            {
                props.card && <CardElement x={x} y={y} card={props.card} player={props.player} />
            }
        </g>
    )
}