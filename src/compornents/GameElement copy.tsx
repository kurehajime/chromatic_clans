import { useState } from "react"
import { FieldSet } from "../utils/FieldSet"
import GameFieldElement from "./GameFieldElement"
import { GameMaster } from "../utils/GameMaster"
import { BLOCK_SIZE } from "../utils/conf"
import PointerElement from "./PointerElement"

export default function GameElement() {
    const [fieldSet, setFieldSet] = useState<FieldSet>(GameMaster.InitFieldSet())

    return (
        <div>
            <svg width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 18} className="game" >
                <GameFieldElement
                    fieldSet={fieldSet}
                ></GameFieldElement>
            </svg>
            <PointerElement></PointerElement>
        </div>
    )
}