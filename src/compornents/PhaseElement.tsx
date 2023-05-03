import { GameState } from "../utils/GameState"
import { Phase } from "../utils/Phase"
import { BLOCK_SIZE } from "../utils/conf"

type Props = {
    gameState: GameState
}
export default function PhaseElement(props: Props) {
    const fontSize = BLOCK_SIZE * 2
    const x = (BLOCK_SIZE * 15) / 2
    const y = (BLOCK_SIZE * 18) / 2
    let text = null
    switch (props.gameState.phase) {
        case Phase.Open:
            text = "CARD OPEN"
            break
    }
    return (<g>
        text ?? <text x={x} y={y}
            fontSize={fontSize}
            text-anchor="middle"
            dominant-baseline="central"
            opacity={0.9}
            fontWeight={900}
            fill="white">{text}</text>
    </g>)
}