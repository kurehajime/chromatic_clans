import { useState } from "react"
import { BLOCK_SIZE, CARD_SIZE } from "../utils/conf"

type Props = {
    x: number
    y: number
    fold: boolean
}
export default function RuleElement(props: Props) {
    const [show, setShow] = useState(false)
    let rotate = ""
    const title = "ルール説明"
    const rule = `
- Cromatic Clansは10枚のデッキで戦うカードゲームです。
- 交互にカードを出し合います。
- カードは3枚まで重ねることができます。
- 3枚目のカードは裏向きで出します。
- カードを出し終わったら、列ごとにカードの大小を比較します。
- 色ごとの合計で最も大きい数字の色で比較します。
- 各列でより多く勝利したプレイヤーの勝利です。`
    rotate = `rotate(-30,${BLOCK_SIZE * 10},${-BLOCK_SIZE * 15})`

    const toggle = () => {
        setShow(!show)
    }

    return (
        <g transform={show ? "" : rotate} style={{ pointerEvents: props.fold ? "none" : "auto" }} onClick={toggle} >
            <rect x={props.x - BLOCK_SIZE * 0.5} y={props.y - BLOCK_SIZE * 0.5}
                width={BLOCK_SIZE * 13}
                height={BLOCK_SIZE * 0.55 * rule.split("\n").length + BLOCK_SIZE * 1.8}
                fill="#ffdab9"
                opacity={0.7} />
            <text x={props.x} y={props.y + BLOCK_SIZE * 0.2} fontSize={BLOCK_SIZE * 0.5} fill="#6a1917">{title}</text>
            {
                rule.split("\n").map((line, i) => {
                    return (
                        <text x={props.x} y={props.y + BLOCK_SIZE * 0.55 * (i + 1)} fontSize={BLOCK_SIZE * 0.5}
                            fill="#6a1917"
                            key={i}
                        >{line}</text>
                    )
                })
            }
            <rect x={props.x - BLOCK_SIZE * 0.5} y={props.y - BLOCK_SIZE * 0.5}
                width={BLOCK_SIZE * 13}
                height={BLOCK_SIZE * 0.55 * rule.split("\n").length + BLOCK_SIZE * 1.8}
                fill="transparent" />

        </g>)
}