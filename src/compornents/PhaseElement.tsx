import { Calc } from "../utils/Calc"
import { GameState } from "../utils/GameState"
import { Line } from "../utils/Line"
import { Phase } from "../utils/Phase"
import { Player } from "../utils/Player"
import { BLOCK_SIZE, FIELD_SIZE, XY } from "../utils/conf"
import BalloonElement from "./BalloonElement"
import CrownElement from "./CrownElement"
import "./PhaseElement.css"

type Props = {
    gameState: GameState
}
export default function PhaseElement(props: Props) {
    const fontSize = BLOCK_SIZE * 2
    const x = (FIELD_SIZE.width) / 2
    const y = (FIELD_SIZE.height) / 2
    let text = null
    switch (props.gameState.phase) {
        case Phase.Open:
            text = "CARD OPEN"
            break

    }
    const left = Calc.CalcLine(props.gameState.fieldSet.Field1.Left, props.gameState.fieldSet.Field2.Left)
    const center = Calc.CalcLine(props.gameState.fieldSet.Field1.Center, props.gameState.fieldSet.Field2.Center)
    const right = Calc.CalcLine(props.gameState.fieldSet.Field1.Right, props.gameState.fieldSet.Field2.Right)
    const left1: number[] = []
    const left2: number[] = []
    const center1: number[] = []
    const center2: number[] = []
    const right1: number[] = []
    const right2: number[] = []
    const showLeft = props.gameState.phase === Phase.OpenLeft ||
        props.gameState.phase === Phase.OpenCenter ||
        props.gameState.phase === Phase.OpenRight ||
        props.gameState.phase === Phase.End
    const showCenter = props.gameState.phase === Phase.OpenCenter ||
        props.gameState.phase === Phase.OpenRight ||
        props.gameState.phase === Phase.End
    const showRight = props.gameState.phase === Phase.OpenRight ||
        props.gameState.phase === Phase.End
    if (left > 0) {
        for (let i = 0; i < left; i++) {
            left1.push(i)
        }
    }
    if (left < 0) {
        for (let i = 0; i < -left; i++) {
            left2.push(i)
        }
    }
    if (center > 0) {
        for (let i = 0; i < center; i++) {
            center1.push(i)
        }
    }
    if (center < 0) {
        for (let i = 0; i < -center; i++) {
            center2.push(i)
        }
    }
    if (right > 0) {
        for (let i = 0; i < right; i++) {
            right1.push(i)
        }
    }
    if (right < 0) {
        for (let i = 0; i < -right; i++) {
            right2.push(i)
        }
    }
    const win = left + center + right
    if (props.gameState.phase === Phase.End) {
        if (win > 0) {
            text = "YOU WIN"
        } else if (win < 0) {
            text = "YOU LOSE"
        } else {
            text = "DRAW"
        }
    }

    return (<g style={{ pointerEvents: "none" }}>
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
        {
            // Player1の左ラインの勝利
            left1.length > 0 && showLeft && left1.map((i) => {
                return <CrownElement
                    x={XY.player1LeftX - BLOCK_SIZE * 0.9}
                    y={XY.player1LeftY + BLOCK_SIZE * 0.5 * i}
                    key={Player.Player1 * 100 + Line.Left * 10 + i}
                ></CrownElement>
            })
        }
        {
            // Player2の左ラインの勝利
            left2.length > 0 && showLeft && left2.map((i) => {
                return <CrownElement
                    x={XY.player2LeftX - BLOCK_SIZE * 0.9}
                    y={XY.player2LeftY + BLOCK_SIZE * 0.5 * i}
                    key={Player.Player2 * 100 + Line.Left * 10 + i}
                ></CrownElement>
            })
        }
        {
            // Player1の中央ラインの勝利
            center1.length > 0 && showCenter && center1.map((i) => {
                return <CrownElement
                    x={XY.player1CenterX - BLOCK_SIZE * 0.9}
                    y={XY.player1CenterY + BLOCK_SIZE * 0.5 * i}
                    key={Player.Player1 * 100 + Line.Center * 10 + i}
                ></CrownElement>
            })
        }
        {
            // Player2の中央ラインの勝利
            center2.length > 0 && showCenter && center2.map((i) => {
                return <CrownElement
                    x={XY.player2CenterX - BLOCK_SIZE * 0.9}
                    y={XY.player2CenterY + BLOCK_SIZE * 0.5 * i}
                    key={Player.Player2 * 100 + Line.Center * 10 + i}
                ></CrownElement>
            })
        }
        {
            // Player1の右ラインの勝利
            right1.length > 0 && showRight && right1.map((i) => {
                return <CrownElement
                    x={XY.player1RightX - BLOCK_SIZE * 0.9}
                    y={XY.player1RightY + BLOCK_SIZE * 0.5 * i}
                    key={Player.Player1 * 100 + Line.Right * 10 + i}
                ></CrownElement>
            })
        }
        {
            // Player2の右ラインの勝利
            right2.length > 0 && showRight && right2.map((i) => {
                return <CrownElement
                    x={XY.player2RightX - BLOCK_SIZE * 0.9}
                    y={XY.player2RightY + BLOCK_SIZE * 0.5 * i}
                    key={Player.Player2 * 100 + Line.Right * 10 + i}
                ></CrownElement>
            })
        }
        text ?? <text x={x} y={y}
            fontSize={fontSize}
            textAnchor="middle"
            dominantBaseline="central"
            opacity={0.9}
            fontWeight={900}
            className="phase"
            fill="white">{text}</text>
    </g>)
}