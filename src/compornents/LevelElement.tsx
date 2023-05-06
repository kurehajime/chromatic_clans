import { useTranslation } from "react-i18next"
import { BLOCK_SIZE } from "../utils/conf"

type Props = {
    changeLevel: (level: number) => void
    level: number
    wins: number[]
    changeLanguage: () => void
}

const levels = ["EASY", "NORMAL", "HARD"]

export default function LevelElement(props: Props) {
    const { i18n } = useTranslation()
    return (<g>
        {
            levels.map((label, index) => {
                return <g key={`X_${index}`}>
                    <text x={BLOCK_SIZE * 12.2}
                        y={BLOCK_SIZE * 1.5 + BLOCK_SIZE * 0.6 * index}
                        fontSize={BLOCK_SIZE * 0.2}
                        fill="white"
                        textAnchor="middle"
                        dominantBaseline="central"
                    >
                        {label}
                    </text>
                    <text x={BLOCK_SIZE * 13.4}
                        y={BLOCK_SIZE * 1.5 + BLOCK_SIZE * 0.6 * index}
                        fontSize={BLOCK_SIZE * 0.2}
                        fill="white"
                        dominantBaseline="central"
                    >
                        {props.wins[index] > 0 ? `★${props.wins[index]}` : ""}
                    </text>
                    <rect
                        x={BLOCK_SIZE * 11.3}
                        y={BLOCK_SIZE * 1.26 + BLOCK_SIZE * 0.6 * index}
                        width={BLOCK_SIZE * 2}
                        height={BLOCK_SIZE * 0.5}
                        fill={props.level === index ? "white" : "black"} stroke="white"
                        onClick={() => props.changeLevel(index)}
                        opacity={0.2} />
                </g>
            })
        }
        <text x={BLOCK_SIZE * 13.6}
            y={BLOCK_SIZE * 13.85}
            fontSize={BLOCK_SIZE * 0.2}
            fill="white"
            dominantBaseline="central"
        >ENGLISH</text>
        <rect
            x={BLOCK_SIZE * 13.3}
            y={BLOCK_SIZE * 13.6}
            width={BLOCK_SIZE * 1.5}
            height={BLOCK_SIZE * 0.5}
            fill={i18n.language.includes("en") ? "white" : "black"} stroke="white"
            onClick={() => {
                i18n.changeLanguage("en")
                props.changeLanguage()
            }}
            opacity={0.2} />
        <text x={BLOCK_SIZE * 13.6}
            y={BLOCK_SIZE * 14.54}
            fontSize={BLOCK_SIZE * 0.2}
            fill="white"
            dominantBaseline="central"
        >JAPANESE</text>
        <rect
            x={BLOCK_SIZE * 13.3}
            y={BLOCK_SIZE * 14.3}
            width={BLOCK_SIZE * 1.5}
            height={BLOCK_SIZE * 0.5}
            fill={i18n.language.includes("ja") ? "white" : "black"} stroke="white"
            onClick={() => {
                i18n.changeLanguage("ja")
                props.changeLanguage()
            }}
            opacity={0.2} />
    </g>)
}