import { Calc } from "../utils/Calc"
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
    const cards1: Card[] = []
    const cards2: Card[] = []
    if (props.line === Line.Left) {
        cards1.push(...props.gameState.fieldSet.Field1.Left)
        cards2.push(...props.gameState.fieldSet.Field2.Left)
    }
    if (props.line === Line.Center) {
        cards1.push(...props.gameState.fieldSet.Field1.Center)
        cards2.push(...props.gameState.fieldSet.Field2.Center)
    }
    if (props.line === Line.Right) {
        cards1.push(...props.gameState.fieldSet.Field1.Right)
        cards2.push(...props.gameState.fieldSet.Field2.Right)
    }
    const point = props.player === Player.Player1 ? Calc.CalcMaxScore(cards1, cards2)[0] : Calc.CalcMaxScore(cards1, cards2)[1]

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
    const cardText1 = CardParam.getDescriptions(card)[0];
    const cardText2 = CardParam.getDescriptions(card)[1];
    const colorStr = CardParam.getColorStrByColor(point.color)
    const denial = (cards1[2] === Card.Green2 || cards2[2] === Card.Green2) && ((card ?? 0) % 10 === 1)
    return (<g>
        <rect x={x} y={y} width={BLOCK_SIZE * 4} height={BLOCK_SIZE * 2} fill={colorStr}
            strokeWidth="1" rx={BLOCK_SIZE * 0.1} ry={BLOCK_SIZE * 0.1} />
        <polygon points={`${x - 20},${y + BLOCK_SIZE * 1} ${x + 1},${y + BLOCK_SIZE * 0.7} ${x + 1},${y + BLOCK_SIZE * 1.3}`} fill={colorStr} />
        <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 0.6}
            fontSize={BLOCK_SIZE * 0.5}
            fontWeight={600}
            fill="white"
        >{point.array.join(" + ") + " = " + point.point}</text>
        <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 1.2}
            fontSize={BLOCK_SIZE * 0.3}
            fontWeight={600}
            fill="white"
            textDecoration={denial ? "line-through" : "none"}
            fontFamily="Arial, Helvetica"
        >{cardText1}</text>
        <text x={x + BLOCK_SIZE * 0.1} y={y + BLOCK_SIZE * 1.6}
            fontSize={BLOCK_SIZE * 0.3}
            fontWeight={600}
            fill="white"
            textDecoration={denial ? "line-through" : "none"}
            fontFamily="Arial, Helvetica"
        >{cardText2}</text>
    </g>)
}