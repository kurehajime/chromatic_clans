import { FieldSet } from "../utils/FieldSet";
import { Player } from "../utils/Player";
import { BLOCK_SIZE } from "../utils/conf";
import CardElement from "./CardElement";
type Props = {
    fieldSet: FieldSet
}
export default function GameFieldElement(props: Props) {
    const player1Hand1x = BLOCK_SIZE * 1;
    const player1Hand1y = BLOCK_SIZE * 15;
    const player1Hand2x = BLOCK_SIZE * 4;
    const player1Hand2y = BLOCK_SIZE * 15;
    const player1Hand3x = BLOCK_SIZE * 7;
    const player1Hand3y = BLOCK_SIZE * 15;

    const player2Hand1x = BLOCK_SIZE * 1;
    const player2Hand1y = BLOCK_SIZE * 1;
    const player2Hand2x = BLOCK_SIZE * 4;
    const player2Hand2y = BLOCK_SIZE * 1;
    const player2Hand3x = BLOCK_SIZE * 7;
    const player2Hand3y = BLOCK_SIZE * 1;

    const player1LeftX = BLOCK_SIZE * 1;
    const player1LeftY = BLOCK_SIZE * 10;
    const player1CenterX = BLOCK_SIZE * 4;
    const player1CenterY = BLOCK_SIZE * 10;
    const player1RightX = BLOCK_SIZE * 7;
    const player1RightY = BLOCK_SIZE * 10;

    const player2LeftX = BLOCK_SIZE * 1;
    const player2LeftY = BLOCK_SIZE * 5;
    const player2CenterX = BLOCK_SIZE * 4;
    const player2CenterY = BLOCK_SIZE * 5;
    const player2RightX = BLOCK_SIZE * 7;
    const player2RightY = BLOCK_SIZE * 5;

    return (<svg width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 18} >
        <rect x={0} y={0} width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 21} fill="lightgray" />
        {
            // 手札プレイヤー１手札１
            <CardElement x={player1Hand1x} y={player1Hand1y} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札２
            <CardElement x={player1Hand2x} y={player1Hand2y} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札３
            <CardElement x={player1Hand3x} y={player1Hand3y} player={Player.Player1} />
        }
        {
            // 手札プレイヤー２手札１
            <CardElement x={player2Hand1x} y={player2Hand1y} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札２
            <CardElement x={player2Hand2x} y={player2Hand2y} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札３
            <CardElement x={player2Hand3x} y={player2Hand3y} player={Player.Player2} />
        }
        {
            // 左側プレイヤー１Stack１
            <CardElement x={player1LeftX} y={player1LeftY} player={Player.Player1} />
        }
        {
            // 左側プレイヤー１Stack２
            <CardElement x={player1LeftX} y={player1LeftY} player={Player.Player1} stack={1} />
        }
        {
            // 左側プレイヤー１Stack３
            <CardElement x={player1LeftX} y={player1LeftY} player={Player.Player1} stack={2} />
        }
        {
            // 中央プレイヤー１Stack１
            <CardElement x={player1CenterX} y={player1CenterY} player={Player.Player1} />
        }
        {
            // 中央プレイヤー１Stack２
            <CardElement x={player1CenterX} y={player1CenterY} player={Player.Player1} stack={1} />
        }
        {
            // 中央プレイヤー１Stack３
            <CardElement x={player1CenterX} y={player1CenterY} player={Player.Player1} stack={2} />
        }
        {
            // 右側プレイヤー１Stack１
            <CardElement x={player1RightX} y={player1RightY} player={Player.Player1} />
        }
        {
            // 右側プレイヤー１Stack２
            <CardElement x={player1RightX} y={player1RightY} player={Player.Player1} stack={1} />
        }
        {
            // 右側プレイヤー１Stack３
            <CardElement x={player1RightX} y={player1RightY} player={Player.Player1} stack={2} />
        }
        {
            // 左側プレイヤー２Stack１
            <CardElement x={player2LeftX} y={player2LeftY} player={Player.Player2} />
        }
        {
            // 左側プレイヤー２Stack２
            <CardElement x={player2LeftX} y={player2LeftY} player={Player.Player2} stack={1} />
        }
        {
            // 左側プレイヤー２Stack３
            <CardElement x={player2LeftX} y={player2LeftY} player={Player.Player2} stack={2} />
        }
        {
            // 中央プレイヤー２Stack１
            <CardElement x={player2CenterX} y={player2CenterY} player={Player.Player2} />
        }
        {
            // 中央プレイヤー２Stack２
            <CardElement x={player2CenterX} y={player2CenterY} player={Player.Player2} stack={1} />
        }
        {
            // 中央プレイヤー２Stack３
            <CardElement x={player2CenterX} y={player2CenterY} player={Player.Player2} stack={2} />
        }
        {
            // 右側プレイヤー２Stack１
            <CardElement x={player2RightX} y={player2RightY} player={Player.Player2} />
        }
        {
            // 右側プレイヤー２Stack２
            <CardElement x={player2RightX} y={player2RightY} player={Player.Player2} stack={1} />
        }
        {
            // 右側プレイヤー２Stack３
            <CardElement x={player2RightX} y={player2RightY} player={Player.Player2} stack={2} />
        }




        {
            // 手札プレイヤー１手札１
            props.fieldSet.Field1.Hand.length > 0 && <CardElement x={player1Hand1x} y={player1Hand1y} card={props.fieldSet.Field1.Hand[0]} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札２
            props.fieldSet.Field1.Hand.length > 1 && <CardElement x={player1Hand2x} y={player1Hand2y} card={props.fieldSet.Field1.Hand[1]} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札３
            props.fieldSet.Field1.Hand.length > 2 && <CardElement x={player1Hand3x} y={player1Hand3y} card={props.fieldSet.Field1.Hand[2]} player={Player.Player1} />
        }
        {
            // 手札プレイヤー２手札１
            props.fieldSet.Field2.Hand.length > 0 && <CardElement x={player2Hand1x} y={player2Hand1y} card={props.fieldSet.Field2.Hand[0]} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札２
            props.fieldSet.Field2.Hand.length > 1 && <CardElement x={player2Hand2x} y={player2Hand2y} card={props.fieldSet.Field2.Hand[1]} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札３
            props.fieldSet.Field2.Hand.length > 2 && <CardElement x={player2Hand3x} y={player2Hand3y} card={props.fieldSet.Field2.Hand[2]} player={Player.Player2} />
        }
        {
            // 左側プレイヤー１Stack１
            props.fieldSet.Field1.Left.length > 0 && <CardElement x={player1LeftX} y={player1LeftY} card={props.fieldSet.Field1.Left[0]} player={Player.Player1} />
        }
        {
            // 左側プレイヤー１Stack２
            props.fieldSet.Field1.Left.length > 1 && <CardElement x={player1LeftX} y={player1LeftY} card={props.fieldSet.Field1.Left[1]} player={Player.Player1} stack={1} />
        }
        {
            // 左側プレイヤー１Stack３
            props.fieldSet.Field1.Left.length > 2 && <CardElement x={player1LeftX} y={player1LeftY} card={props.fieldSet.Field1.Left[2]} player={Player.Player1} stack={2} />
        }
        {
            // 中央プレイヤー１Stack１
            props.fieldSet.Field1.Center.length > 0 && <CardElement x={player1CenterX} y={player1CenterY} card={props.fieldSet.Field1.Center[0]} player={Player.Player1} />
        }
        {
            // 中央プレイヤー１Stack２
            props.fieldSet.Field1.Center.length > 1 && <CardElement x={player1CenterX} y={player1CenterY} card={props.fieldSet.Field1.Center[1]} player={Player.Player1} stack={1} />
        }
        {
            // 中央プレイヤー１Stack３
            props.fieldSet.Field1.Center.length > 2 && <CardElement x={player1CenterX} y={player1CenterY} card={props.fieldSet.Field1.Center[2]} player={Player.Player1} stack={2} />
        }
        {
            // 右側プレイヤー１Stack１
            props.fieldSet.Field1.Right.length > 0 && <CardElement x={player1RightX} y={player1RightY} card={props.fieldSet.Field1.Right[0]} player={Player.Player1} />
        }
        {
            // 右側プレイヤー１Stack２
            props.fieldSet.Field1.Right.length > 1 && <CardElement x={player1RightX} y={player1RightY} card={props.fieldSet.Field1.Right[1]} player={Player.Player1} stack={1} />
        }
        {
            // 右側プレイヤー１Stack３
            props.fieldSet.Field1.Right.length > 2 && <CardElement x={player1RightX} y={player1RightY} card={props.fieldSet.Field1.Right[2]} player={Player.Player1} stack={2} />
        }
        {
            // 左側プレイヤー２Stack１
            props.fieldSet.Field2.Left.length > 0 && <CardElement x={player2LeftX} y={player2LeftY} card={props.fieldSet.Field2.Left[0]} player={Player.Player2} />
        }
        {
            // 左側プレイヤー２Stack２
            props.fieldSet.Field2.Left.length > 1 && <CardElement x={player2LeftX} y={player2LeftY} card={props.fieldSet.Field2.Left[1]} player={Player.Player2} stack={1} />
        }
        {
            // 左側プレイヤー２Stack３
            props.fieldSet.Field2.Left.length > 2 && <CardElement x={player2LeftX} y={player2LeftY} card={props.fieldSet.Field2.Left[2]} player={Player.Player2} stack={2} />
        }
        {
            // 中央プレイヤー２Stack１
            props.fieldSet.Field2.Center.length > 0 && <CardElement x={player2CenterX} y={player2CenterY} card={props.fieldSet.Field2.Center[0]} player={Player.Player2} />
        }
        {
            // 中央プレイヤー２Stack２
            props.fieldSet.Field2.Center.length > 1 && <CardElement x={player2CenterX} y={player2CenterY} card={props.fieldSet.Field2.Center[1]} player={Player.Player2} stack={1} />
        }
        {
            // 中央プレイヤー２Stack３
            props.fieldSet.Field2.Center.length > 2 && <CardElement x={player2CenterX} y={player2CenterY} card={props.fieldSet.Field2.Center[2]} player={Player.Player2} stack={2} />
        }
        {
            // 右側プレイヤー２Stack１
            props.fieldSet.Field2.Right.length > 0 && <CardElement x={player2RightX} y={player2RightY} card={props.fieldSet.Field2.Right[0]} player={Player.Player2} />
        }
        {
            // 右側プレイヤー２Stack２
            props.fieldSet.Field2.Right.length > 1 && <CardElement x={player2RightX} y={player2RightY} card={props.fieldSet.Field2.Right[1]} player={Player.Player2} stack={1} />
        }
        {
            // 右側プレイヤー２Stack３
            props.fieldSet.Field2.Right.length > 2 && <CardElement x={player2RightX} y={player2RightY} card={props.fieldSet.Field2.Right[2]} player={Player.Player2} stack={2} />
        }
    </svg>);
}