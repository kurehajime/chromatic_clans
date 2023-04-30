import { useEffect, useRef, useState } from "react"
import { BLOCK_SIZE, CARD_SIZE, XY } from "../utils/conf"
import "./PointerElement.css"
import { Hit } from "../utils/Hit"

export default function PointerElement() {
    const svg = useRef<SVGRectElement>(null)

    const mouseMove = (event: Event) => {
        const e = event as PointerEvent
    }
    const mouseDown = (event: Event) => {
        const e = event as PointerEvent
        const hits = hitCard(e.offsetX, e.offsetY)
        console.log(hits)
        e.preventDefault()
    }
    const mouseUp = (event: Event) => {
        const e = event as PointerEvent
        e.preventDefault()
    }

    const hitCard = (x: number, y: number): Hit => {
        console.log(x, y)
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
        <rect x={0} y={0} width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 18} fill="transparent"
            ref={svg}
        />
    )
}