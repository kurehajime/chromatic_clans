import { useEffect, useState } from "react"
import { BLOCK_SIZE } from "../utils/conf"
import "./RuleElement.css"
import { t } from "i18next"

type Props = {
    x: number
    y: number
    fold: boolean
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
${t("rule_description_7")}`
    rotate = `rotate(-30,${BLOCK_SIZE * 10},${-BLOCK_SIZE * 15})`

    const toggle = () => {
        setShow(!show)
    }
    useEffect(() => {
        if (props.fold) {
            setShow(false)
        }
    }, [props.fold])


    return (
        <g transform={show ? "" : rotate} style={{ pointerEvents: props.fold ? "none" : "auto" }} onClick={toggle}     >
            <rect x={props.x - BLOCK_SIZE * 0.5} y={props.y - BLOCK_SIZE * 0.5}
                width={BLOCK_SIZE * 13}
                height={BLOCK_SIZE * 0.45 * rule.split("\n").length + BLOCK_SIZE * 1.8}
                fill="#e6bfb2"
                opacity={0.9}
                stroke="#6a1917"
                className={show ? "rule_open easeIn" : "rule_close easeIn"}
            />
            <text x={props.x} y={props.y + BLOCK_SIZE * 0.3} fontSize={BLOCK_SIZE * 0.5}
                fill="#6a1917"
                fontFamily="Oswald,serif"
            >{title}</text>
            {
                rule.split("\n").map((line, i) => {
                    return (
                        <text x={props.x} y={props.y + BLOCK_SIZE * 0.55 * (i + 1)} fontSize={BLOCK_SIZE * 0.4}
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

        </g >)
}