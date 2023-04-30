import { useState } from "react"
import GameFieldElement from "./GameFieldElement"
import { GameMaster } from "../utils/GameMaster"
import { BLOCK_SIZE } from "../utils/conf"
import PointerElement from "./PointerElement"
import "./GameElement.css"
import { Hit } from "../utils/Hit"
import { GameState } from "../utils/GameState"
import { Player } from "../utils/Player"

export default function GameElement() {
    const [gameState, setGameState] = useState<GameState>(GameMaster.InitFieldSet())
    const [fold, setFold] = useState<Hit>(Hit.none)

    const select = (hit: Hit): boolean => {
        setFold(hit)
        if (gameState.turn === Player.Player1) {
            if (hit === Hit.player1Hand1 && gameState.fieldSet.Field1.Hand.length > 0) {
                return true
            }
            if (hit === Hit.player1Hand2 && gameState.fieldSet.Field1.Hand.length > 1) {
                return true
            }
            if (hit === Hit.player1Hand3 && gameState.fieldSet.Field1.Hand.length > 2) {
                return true
            }
        }
        if (gameState.turn === Player.Player2) {
            if (hit === Hit.player2Hand1 && gameState.fieldSet.Field2.Hand.length > 0) {
                return true
            }
            if (hit === Hit.player2Hand2 && gameState.fieldSet.Field2.Hand.length > 1) {
                return true
            }
            if (hit === Hit.player2Hand3 && gameState.fieldSet.Field2.Hand.length > 2) {
                return true
            }
        }
        return false
    }
    const move = (from: Hit, to: Hit): boolean => {
        return true
    }

    return (
        <div className="outside">
            <svg width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 18} className="game" >
                <GameFieldElement
                    fieldSet={gameState.fieldSet}
                ></GameFieldElement>
                <PointerElement
                    fieldSet={gameState.fieldSet}
                    select={select}
                    move={move}
                ></PointerElement>
            </svg>
        </div>
    )
}