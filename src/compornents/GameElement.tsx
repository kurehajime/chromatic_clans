import { useEffect, useState } from "react"
import GameFieldElement from "./GameFieldElement"
import { GameMaster } from "../utils/GameMaster"
import { BLOCK_SIZE, FIELD_SIZE } from "../utils/conf"
import PointerElement from "./PointerElement"
import "./GameElement.css"
import { Hit } from "../utils/Hit"
import { GameState } from "../utils/GameState"
import { Player } from "../utils/Player"
import { Com } from "../utils/Com"
import { Line } from "../utils/Line"
import PhaseElement from "./PhaseElement"
import { Phase } from "../utils/Phase"
import { Card } from "../utils/Card"
import ZoomElement from "./ZoomElement"
import RuleElement from "./RuleElement"

export default function GameElement() {
    const [gameState, setGameState] = useState<GameState>(GameMaster.InitFieldSet())
    const [fold, setFold] = useState<Hit>(Hit.none)
    const [zoom, setZoom] = useState<Card | undefined>(undefined)

    const select = (hit: Hit) => {
        if (gameState.canSelect(hit)) {
            setFold(hit)
        } else {
            setFold(Hit.none)
        }
        if (gameState.phase === Phase.Open ||
            gameState.phase === Phase.OpenLeft ||
            gameState.phase === Phase.OpenRight ||
            gameState.phase === Phase.OpenCenter) {
            setGameState(gameState.nextPhase())
        }
        if (gameState.phase === Phase.End) {
            setGameState(GameMaster.InitFieldSet())
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
        <svg width={FIELD_SIZE.width} height={FIELD_SIZE.height} className="game" >
            <GameFieldElement
                fieldSet={gameState.fieldSet}
                fold={fold}
                phase={gameState.phase}
            ></GameFieldElement>
            <PhaseElement gameState={gameState}></PhaseElement>
            <PointerElement
                gameState={gameState}
                select={select}
                move={move}
                fold={fold}
                changeZoom={(z: Card | undefined) => { setZoom(z) }}
            ></PointerElement>
            <RuleElement x={BLOCK_SIZE * 1.5} y={BLOCK_SIZE * 4}
                fold={fold === Hit.none ? false : true}></RuleElement>
            {
                zoom && gameState.phase === Phase.Playing && <ZoomElement
                    x={BLOCK_SIZE * 10}
                    y={BLOCK_SIZE * 6}
                    card={zoom}
                    player={gameState.turn}
                ></ZoomElement>
            }
        </svg>
    )
}