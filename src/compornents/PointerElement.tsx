import { useEffect, useRef, useState } from "react"
import { BLOCK_SIZE, CARD_SIZE, XY } from "../utils/conf"
import "./PointerElement.css"
import { Hit } from "../utils/Hit"
import HoverElement from "./HoverElement"
import { Card } from "../utils/Card"
import { GameState } from "../utils/GameState"
import { Player } from "../utils/Player"
type Props = {
    gameState: GameState
    select: (hit: Hit) => void
    move: (from: Hit, to: Hit) => boolean
    fold: Hit
}
export default function PointerElement(props: Props) {
    const svg = useRef<SVGRectElement>(null)
    const [offsetX, setOffsetX] = useState<number>(0)
    const [offsetY, setOffsetY] = useState<number>(0)
    let hover: Card | undefined = undefined
    switch (props.fold) {
        case Hit.player1Hand1:
            hover = props.gameState.fieldSet.Field1.Hand1()
            break
        case Hit.player1Hand2:
            hover = props.gameState.fieldSet.Field1.Hand2()
            break
        case Hit.player1Hand3:
            hover = props.gameState.fieldSet.Field1.Hand3()
            break
        case Hit.player2Hand1:
            hover = props.gameState.fieldSet.Field2.Hand1()
            break
        case Hit.player2Hand2:
            hover = props.gameState.fieldSet.Field2.Hand2()
            break
        case Hit.player2Hand3:
            hover = props.gameState.fieldSet.Field2.Hand3()
            break
        default:
            hover = undefined
    }

    const mouseMove = (event: Event) => {
        const e = event as PointerEvent
        setOffsetX(e.offsetX)
        setOffsetY(e.offsetY)
    }
    const mouseDown = (event: Event) => {
        const e = event as PointerEvent
        const hits = hitCard(e.offsetX, e.offsetY)
        if (props.gameState.turn === Player.Player1) {
            if (props.fold) {
                if (hits !== Hit.none) {
                    props.move(props.fold, hits)
                }
                props.select(Hit.none)
            } else {
                props.select(hits)
            }
        } else {
            props.select(Hit.none)
        }

        setOffsetX(e.offsetX)
        setOffsetY(e.offsetY)
        e.preventDefault()
    }
    const mouseUp = (event: Event) => {
        const e = event as PointerEvent
        e.preventDefault()
    }

    const hitCard = (x: number, y: number): Hit => {
        switch (true) {
            case hit(x, y, XY.player1Hand1x, XY.player1Hand1y, CARD_SIZE.width, CARD_SIZE.height):
                return Hit.player1Hand1;
            case hit(x, y, XY.player1Hand2x, XY.player1Hand2y, CARD_SIZE.width, CARD_SIZE.height):
                return Hit.player1Hand2;
            case hit(x, y, XY.player1Hand3x, XY.player1Hand3y, CARD_SIZE.width, CARD_SIZE.height):
                return Hit.player1Hand3;
            case hit(x, y, XY.player2Hand1x, XY.player2Hand1y, CARD_SIZE.width, CARD_SIZE.height):
                return Hit.player2Hand1;
            case hit(x, y, XY.player2Hand2x, XY.player2Hand2y, CARD_SIZE.width, CARD_SIZE.height):
                return Hit.player2Hand2;
            case hit(x, y, XY.player2Hand3x, XY.player2Hand3y, CARD_SIZE.width, CARD_SIZE.height):
                return Hit.player2Hand3;
            case hit(x, y, XY.player1LeftX, XY.player1LeftY, CARD_SIZE.width, CARD_SIZE.height * 1.6):
            case hit(x, y, XY.player2LeftX, XY.player2LeftY, CARD_SIZE.width, CARD_SIZE.height * 1.6):
                return Hit.Left;
            case hit(x, y, XY.player1CenterX, XY.player1CenterY, CARD_SIZE.width, CARD_SIZE.height * 1.6):
            case hit(x, y, XY.player2CenterX, XY.player2CenterY, CARD_SIZE.width, CARD_SIZE.height * 1.6):
                return Hit.Center;
            case hit(x, y, XY.player1RightX, XY.player1RightY, CARD_SIZE.width, CARD_SIZE.height * 1.6):
            case hit(x, y, XY.player2RightX, XY.player2RightY, CARD_SIZE.width, CARD_SIZE.height * 1.6):
                return Hit.Right;
            default:
                break;
        }
        return Hit.none;
    }

    const hit = (x: number, y: number, targetX: number, targetY: number, targetWidth: number, targetHeight: number): boolean => {
        if (x < targetX) return false;
        if (y < targetY) return false;
        if (x > targetX + targetWidth) return false;
        if (y > targetY + targetHeight) return false;
        return true;
    }

    useEffect(() => {
        const current = svg.current
        current?.addEventListener("pointerdown", mouseDown, { passive: false })
        current?.addEventListener("pointerup", mouseUp, { passive: false })
        current?.addEventListener("pointermove", mouseMove, { passive: false })
        return () => {
            current?.removeEventListener("pointerdown", mouseDown)
            current?.removeEventListener("pointerup", mouseUp)
            current?.removeEventListener("pointermove", mouseMove)
        }
    })
    return (
        <g>
            <HoverElement
                card={hover}
                player={props.gameState.turn}
                x={offsetX}
                y={offsetY}
            />
            <rect x={0} y={0} width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 18} fill="transparent"
                ref={svg}
            />
        </g >
    )
}