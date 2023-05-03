import { GameState } from "../utils/GameState"
import { Line } from "../utils/Line"
import { Phase } from "../utils/Phase"
import { Player } from "../utils/Player"
import { BLOCK_SIZE } from "../utils/conf"
import BalloonElement from "./BalloonElement"

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
        {
            props.gameState.phase === Phase.OpenLeft &&
            <BalloonElement
                line={Line.Left}
                player={Player.Player1}
                gameState={props.gameState}
            ></BalloonElement>
        }
        {
            props.gameState.phase === Phase.OpenLeft &&
            <BalloonElement
                line={Line.Left}
                player={Player.Player2}
                gameState={props.gameState}
            ></BalloonElement>
        }
        {
            props.gameState.phase === Phase.OpenCenter &&
            <BalloonElement
                line={Line.Center}
                player={Player.Player1}
                gameState={props.gameState}
            ></BalloonElement>
        }
        {
            props.gameState.phase === Phase.OpenCenter &&
            <BalloonElement
                line={Line.Center}
                player={Player.Player2}
                gameState={props.gameState}
            ></BalloonElement>
        }
        {
            props.gameState.phase === Phase.OpenRight &&
            <BalloonElement
                line={Line.Right}
                player={Player.Player1}
                gameState={props.gameState}
            ></BalloonElement>
        }
        {
            props.gameState.phase === Phase.OpenRight &&
            <BalloonElement
                line={Line.Right}
                player={Player.Player2}
                gameState={props.gameState}
            ></BalloonElement>
        }
    </g>)
}