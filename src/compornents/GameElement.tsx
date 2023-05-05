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
import TitleElement from "./TitleElement"
import LevelElement from "./LevelElement"
import { Calc } from "../utils/Calc"
import { useCookies } from "react-cookie"

export default function GameElement() {
    const [gameState, setGameState] = useState<GameState>(GameMaster.InitFieldSet())
    const [fold, setFold] = useState<Hit>(Hit.none)
    const [zoom, setZoom] = useState<Card | undefined>(undefined)
    const [level, setLevel] = useState<number>(0)
    const [level0, setLevel0] = useCookies(["level0"]);
    const [level1, setLevel1] = useCookies(["level1"]);
    const [level2, setLevel2] = useCookies(["level2"]);
    const [wins, setWins] = useState<number[]>([
        tryInt(level0),
        tryInt(level1),
        tryInt(level2)])
    const [winsShow, setWinsShow] = useState<number[]>(wins)

    function tryInt(s: unknown): number {
        if (s === undefined) {
            return 0
        }
        const i = parseInt(s as string)
        if (isNaN(i)) {
            return 0
        }
        return i
    }

    const select = (hit: Hit) => {
        if (gameState.canSelect(hit)) {
            setFold(hit)
        } else {
            setFold(Hit.none)
        }
        if (gameState.phase === Phase.OpenLeft ||
            gameState.phase === Phase.OpenCenter) {
            setGameState(gameState.nextPhase())
        }
        if (gameState.phase === Phase.Open) {
            const plus = Calc.CalcWin(gameState.fieldSet.Field1, gameState.fieldSet.Field2)
            const ww = [...wins]
            ww[level] = Math.max(ww[level] + plus, 0)
            switch (level) {
                case 0:
                    setLevel0("level0", ww[level])
                    break;
                case 1:
                    setLevel1("level1", ww[level])
                    break;
                case 2:
                    setLevel2("level2", ww[level])
                    break;
                default:
                    break;
            }
            setWins(ww)
            setGameState(gameState.nextPhase())
        }
        if (gameState.phase === Phase.OpenRight) {
            setGameState(gameState.nextPhase())
            setWinsShow(wins)
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
                const depth = level === 1 ? 10 : level === 2 ? 100 : 1000;
                const action = Com.getBestAction(depth, gameState.fieldSet)
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
    }, [gameState, level])


    return (
        <svg width={FIELD_SIZE.width} height={FIELD_SIZE.height} className="game" >
            <GameFieldElement
                fieldSet={gameState.fieldSet}
                fold={fold}
                phase={gameState.phase}
            ></GameFieldElement>
            <TitleElement x={BLOCK_SIZE * 10.5} y={BLOCK_SIZE * 1}></TitleElement>
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
            <LevelElement
                changeLevel={(l: number) => {
                    setLevel(l)
                    setGameState(GameMaster.InitFieldSet())
                }}
                level={level}
                wins={winsShow}
            ></LevelElement>
            <PhaseElement gameState={gameState}></PhaseElement>
        </svg>
    )
}