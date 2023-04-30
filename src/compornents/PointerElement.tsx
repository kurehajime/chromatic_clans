import { useEffect, useRef, useState } from "react"
import { BLOCK_SIZE } from "../utils/conf"
import "./PointerElement.css"

export default function PointerElement() {
    const svg = useRef<SVGRectElement>(null)

    const mouseMove = (event: Event) => {
        const e = event as PointerEvent
    }
    const mouseDown = (event: Event) => {
        const e = event as PointerEvent
        e.preventDefault()
    }
    const mouseUp = (event: Event) => {
        const e = event as PointerEvent
        e.preventDefault()
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