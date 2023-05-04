import { Card } from "../utils/Card"
import { CardParam } from "../utils/CardParam"
import { GameState } from "../utils/GameState"
import { Line } from "../utils/Line"
import { Player } from "../utils/Player"
import { BLOCK_SIZE, XY } from "../utils/conf"

type Props = {
    gameState: GameState
    line: Line
    player: Player
}
export default function BalloonElement(props: Props) {
    let x = BLOCK_SIZE * 3
    let y = BLOCK_SIZE * 2 + (props.player === Player.Player1 ? 0 : BLOCK_SIZE * -3)
    let card: Card | undefined = undefined
    const cardText1 = CardParam.getDescriptions(card)[0];
    const cardText2 = CardParam.getDescriptions(card)[1];

    if (props.player === Player.Player1 && props.line === Line.Left) {
        x += XY.player1LeftX
        y += XY.player1LeftY
        card = props.gameState.fieldSet.Field1.Left[2]
    }
    if (props.player === Player.Player1 && props.line === Line.Center) {
        x += XY.player1CenterX
        y += XY.player1CenterY
        card = props.gameState.fieldSet.Field1.Center[2]
    }
    if (props.player === Player.Player1 && props.line === Line.Right) {
        x += XY.player1RightX
        y += XY.player1RightY
        card = props.gameState.fieldSet.Field1.Right[2]
    }
    if (props.player === Player.Player2 && props.line === Line.Left) {
        x += XY.player2LeftX
        y += XY.player2LeftY
        card = props.gameState.fieldSet.Field2.Left[2]
    }
    if (props.player === Player.Player2 && props.line === Line.Center) {
        x += XY.player2CenterX
        y += XY.player2CenterY
        card = props.gameState.fieldSet.Field2.Center[2]
    }
    if (props.player === Player.Player2 && props.line === Line.Right) {
        x += XY.player2RightX
        y += XY.player2RightY
        card = props.gameState.fieldSet.Field2.Right[2]
    }

    const colorStr = CardParam.getColorStr(card)
    return (<g>
        <rect x={x} y={y} width={BLOCK_SIZE * 4} height={BLOCK_SIZE * 2} fill={colorStr}
            strokeWidth="1" rx={BLOCK_SIZE * 0.1} ry={BLOCK_SIZE * 0.1} />
        <polygon points={`${x - 20},${y + BLOCK_SIZE * 1} ${x + 1},${y + BLOCK_SIZE * 0.7} ${x + 1},${y + BLOCK_SIZE * 1.3}`} fill={colorStr} />
    </g>)
}