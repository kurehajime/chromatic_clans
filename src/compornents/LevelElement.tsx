import { BLOCK_SIZE } from "../utils/conf"

type Props = {
    changeLevel: (level: number) => void
    level: number
    wins: number[]
}

const levels = ["EASY", "NORMAL", "HARD"]

export default function LevelElement(props: Props) {
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

    </g>)
}