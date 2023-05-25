import { useEffect, useState } from "react"
import { BLOCK_SIZE } from "../utils/conf"
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
    const [show, setShow] = useState(false)
    let rotate = ""
    const title = t("rule_title")
    const rule = `
${t("rule_description_1")}
${t("rule_description_2")}
${t("rule_description_3")}
${t("rule_description_4")}
${t("rule_description_5")}
${t("rule_description_6")}
${t("rule_description_7")}
${t("rule_description_8")}`
    rotate = `rotate(-30,${BLOCK_SIZE * 10},${-BLOCK_SIZE * 15})`

    const toggle = () => {
        props.setRuleYet(false)
        setShow(!show)
    }
    useEffect(() => {
        if (props.fold) {
            setShow(false)
        }
    }, [props.fold])
    const x = props.x - BLOCK_SIZE * 0.5
    const y = props.y - BLOCK_SIZE * 0.5
    const w = BLOCK_SIZE * 13
    const h = BLOCK_SIZE * 0.45 * rule.split("\n").length + BLOCK_SIZE * 1.9

    return (
        <g transform={show ? "" : rotate} style={{ pointerEvents: props.fold ? "none" : "auto" }} onClick={toggle}
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
                >{title}</text>
                {
                    rule.split("\n").map((line, i) => {
                        return (
                            <text x={props.x} y={props.y + BLOCK_SIZE * 0.55 * (i + 1)} fontSize={BLOCK_SIZE * 0.38}
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
        </g >)
}