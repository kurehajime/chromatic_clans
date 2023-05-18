import { useEffect, useState } from "react"
import { BLOCK_SIZE, FIELD_SIZE } from "../utils/conf"
import "./RuleElement.css"
import { t } from "i18next"
import wall from "../assets/wall.webp"

type Props = {
    x: number
    y: number
    fold: boolean
    ruleYet: boolean
    setRuleYet: (b: boolean) => void
}
export default function RuleElement(props: Props) {
    const [page, setPage] = useState(0)
    const [show, setShow] = useState(false)
    let rotate = ""
    const title = t("rule_title")
    const rules = [
        t("rule_description_1"),
        t("rule_description_2"),
        t("rule_description_3"),
        t("rule_description_4"),
        t("rule_description_5"),
        t("rule_description_6"),
        t("rule_description_7")
    ]
    const rule = rules[page % rules.length]
    rotate = `rotate(-30,${BLOCK_SIZE * 10},${-BLOCK_SIZE * 15})`

    useEffect(() => {
        if (props.fold) {
            setShow(false)
        }
    }, [props.fold])
    const x = props.x - BLOCK_SIZE * 0.5
    const y = props.y - BLOCK_SIZE * 0.5
    const w = BLOCK_SIZE * 13
    const h = BLOCK_SIZE * 0.45 * (rule.split("\n").length + 1) + BLOCK_SIZE * 1.9

    return (
        <g>
            {
                show && <g>
                    <rect x={0} y={0}
                        width={FIELD_SIZE.width}
                        height={FIELD_SIZE.height}
                        fill="#000000"
                        opacity={0.6}
                        onClick={() => { setShow(false) }}
                    ></rect>
                    <text
                        x={x + (w / 2)}
                        y={y + h + BLOCK_SIZE * 1}
                        fontSize={BLOCK_SIZE * 0.7}
                        fill="#ffffff"
                        fontWeight={900}
                        onClick={() => { setShow(false) }}
                    >✖</text>
                </g>
            }
            <g transform={show ? "" : rotate} style={{ pointerEvents: props.fold ? "none" : "auto" }}
                onClick={
                    () => {
                        if (!show) {
                            setPage(0)
                            props.setRuleYet(false)
                            setShow(true)
                        } else {
                            setPage((page + 1) % rules.length)
                        }
                    }
                }
                className={show ? "rule_open easeIn" : "rule_close easeIn"}    >
                <g className={props.ruleYet ? "buru2" : ""}>
                    <rect x={x} y={y}
                        width={w}
                        height={h}
                        fill="#e6bfb2"
                        opacity={0.9}
                        stroke="#6a1917"
                    />
                    <image href={wall}
                        x={x} y={y}
                        width={w}
                        height={h}
                        preserveAspectRatio="xMaxYMax slice"
                    ></image>
                    <text x={props.x} y={props.y + BLOCK_SIZE * 0.3} fontSize={BLOCK_SIZE * 0.5}
                        fill="#6a1917"
                        fontFamily="Oswald,serif"
                    >{title + ` ${page + 1} / ${rules.length}`}</text>
                    {
                        rule.split("\n").map((line, i) => {
                            return (
                                <text x={props.x} y={props.y + BLOCK_SIZE * 0.55 * (i + 2)} fontSize={BLOCK_SIZE * 0.4}
                                    fill="#6a1917"
                                    key={i}
                                    fontFamily="Oswald,serif"
                                >{line}</text>
                            )
                        })
                    }
                    <rect x={props.x - BLOCK_SIZE * 0.5} y={props.y - BLOCK_SIZE * 0.5}
                        width={BLOCK_SIZE * 13}
                        height={BLOCK_SIZE * 0.55 * rule.split("\n").length + BLOCK_SIZE * 1.8}
                        fill="transparent" />
                    <text
                        x={x + w - BLOCK_SIZE * 0.2}
                        y={y + h - BLOCK_SIZE * 0.2}
                        fontSize={BLOCK_SIZE * 0.3}
                        textAnchor="end"
                        textDecoration={"underline"}
                        fontFamily="Oswald,serif"
                        fill="#6a1917"
                        onClick={() => { window.open('https://twitter.com/kurehajime'); }}
                    >Created by kurehajime</text>
                </g>
            </g >
        </g>
    )
}