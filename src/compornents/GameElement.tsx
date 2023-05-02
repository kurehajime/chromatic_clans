import { useState } from "react"
import GameFieldElement from "./GameFieldElement"
import { GameMaster } from "../utils/GameMaster"
import { BLOCK_SIZE } from "../utils/conf"
import PointerElement from "./PointerElement"
import "./GameElement.css"
import { Hit } from "../utils/Hit"
import { GameState } from "../utils/GameState"

export default function GameElement() {
    const [gameState, setGameState] = useState<GameState>(GameMaster.InitFieldSet())
    const [fold, setFold] = useState<Hit>(Hit.none)

    const select = (hit: Hit) => {
        if (gameState.canSelect(hit)) {
            setFold(hit)
        } else {
            setFold(Hit.none)
        }
    }
    const move = (from: Hit, to: Hit): boolean => {
        console.log("move", from, to)
        if (!gameState.canSummon(from, to)) {
            return false
        }
        setGameState(gameState.summon(from, to))
        return true
    }

    return (
        <div className="outside">
            <svg width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 18} className="game" >
                <GameFieldElement
                    fieldSet={gameState.fieldSet}
                    fold={fold}
                ></GameFieldElement>
                <PointerElement
                    gameState={gameState}
                    select={select}
                    move={move}
                    fold={fold}
                ></PointerElement>
            </svg>
        </div>
    )
}