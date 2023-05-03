import { useEffect, useState } from "react"
import GameFieldElement from "./GameFieldElement"
import { GameMaster } from "../utils/GameMaster"
import { BLOCK_SIZE } from "../utils/conf"
import PointerElement from "./PointerElement"
import "./GameElement.css"
import { Hit } from "../utils/Hit"
import { GameState } from "../utils/GameState"
import { Player } from "../utils/Player"
import { Com } from "../utils/Com"
import { Line } from "../utils/Line"

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
        if (gameState.turn === Player.Player1) {
            if (!gameState.canSummon(from, to)) {
                return false
            }
            setGameState(gameState.summon(from, to))
            return true
        }
        return false
    }

    useEffect(() => {
        let ignore = false;
        async function think() {
            if (!ignore && gameState.turn === Player.Player2) {
                const action = Com.getBestAction(100, gameState.fieldSet)
                const from = action.handIndex === 0 ? Hit.player2Hand1 : action.handIndex === 1 ? Hit.player2Hand2 : Hit.player2Hand3;
                const to = action.line === Line.Left ? Hit.Left : action.line === Line.Center ? Hit.Center : Hit.Right;
                const next = gameState.summon(from, to);
                setGameState(next);
            }
        }

        think();

        return () => {
            ignore = true;
        };
    }, [gameState])


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