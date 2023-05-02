import { FieldSet } from "../utils/FieldSet";
import { Hit } from "../utils/Hit";
import { Player } from "../utils/Player";
import { BLOCK_SIZE, XY } from "../utils/conf";
import CardElement from "./CardElement";
type Props = {
    fieldSet: FieldSet
    fold: Hit
}
export default function GameFieldElement(props: Props) {


    return (<g>
        <rect x={0} y={0} width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 21} fill="lightgray" />
        {
            // 手札プレイヤー１手札１
            <CardElement x={XY.player1Hand1x} y={XY.player1Hand1y} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札２
            <CardElement x={XY.player1Hand2x} y={XY.player1Hand2y} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札３
            <CardElement x={XY.player1Hand3x} y={XY.player1Hand3y} player={Player.Player1} />
        }
        {
            // 手札プレイヤー２手札１
            <CardElement x={XY.player2Hand1x} y={XY.player2Hand1y} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札２
            <CardElement x={XY.player2Hand2x} y={XY.player2Hand2y} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札３
            <CardElement x={XY.player2Hand3x} y={XY.player2Hand3y} player={Player.Player2} />
        }
        {
            // 左側プレイヤー１Stack１
            <CardElement x={XY.player1LeftX} y={XY.player1LeftY} player={Player.Player1} />
        }
        {
            // 左側プレイヤー１Stack２
            <CardElement x={XY.player1LeftX} y={XY.player1LeftY} player={Player.Player1} stack={1} />
        }
        {
            // 左側プレイヤー１Stack３
            <CardElement x={XY.player1LeftX} y={XY.player1LeftY} player={Player.Player1} stack={2} />
        }
        {
            // 中央プレイヤー１Stack１
            <CardElement x={XY.player1CenterX} y={XY.player1CenterY} player={Player.Player1} />
        }
        {
            // 中央プレイヤー１Stack２
            <CardElement x={XY.player1CenterX} y={XY.player1CenterY} player={Player.Player1} stack={1} />
        }
        {
            // 中央プレイヤー１Stack３
            <CardElement x={XY.player1CenterX} y={XY.player1CenterY} player={Player.Player1} stack={2} />
        }
        {
            // 右側プレイヤー１Stack１
            <CardElement x={XY.player1RightX} y={XY.player1RightY} player={Player.Player1} />
        }
        {
            // 右側プレイヤー１Stack２
            <CardElement x={XY.player1RightX} y={XY.player1RightY} player={Player.Player1} stack={1} />
        }
        {
            // 右側プレイヤー１Stack３
            <CardElement x={XY.player1RightX} y={XY.player1RightY} player={Player.Player1} stack={2} />
        }
        {
            // 左側プレイヤー２Stack１
            <CardElement x={XY.player2LeftX} y={XY.player2LeftY} player={Player.Player2} />
        }
        {
            // 左側プレイヤー２Stack２
            <CardElement x={XY.player2LeftX} y={XY.player2LeftY} player={Player.Player2} stack={1} />
        }
        {
            // 左側プレイヤー２Stack３
            <CardElement x={XY.player2LeftX} y={XY.player2LeftY} player={Player.Player2} stack={2} />
        }
        {
            // 中央プレイヤー２Stack１
            <CardElement x={XY.player2CenterX} y={XY.player2CenterY} player={Player.Player2} />
        }
        {
            // 中央プレイヤー２Stack２
            <CardElement x={XY.player2CenterX} y={XY.player2CenterY} player={Player.Player2} stack={1} />
        }
        {
            // 中央プレイヤー２Stack３
            <CardElement x={XY.player2CenterX} y={XY.player2CenterY} player={Player.Player2} stack={2} />
        }
        {
            // 右側プレイヤー２Stack１
            <CardElement x={XY.player2RightX} y={XY.player2RightY} player={Player.Player2} />
        }
        {
            // 右側プレイヤー２Stack２
            <CardElement x={XY.player2RightX} y={XY.player2RightY} player={Player.Player2} stack={1} />
        }
        {
            // 右側プレイヤー２Stack３
            <CardElement x={XY.player2RightX} y={XY.player2RightY} player={Player.Player2} stack={2} />
        }




        {
            // 手札プレイヤー１手札１
            props.fieldSet.Field1.Hand.length > 0 && <CardElement x={XY.player1Hand1x} y={XY.player1Hand1y} card={props.fold !== Hit.player1Hand1 ? props.fieldSet.Field1.Hand[0] : undefined} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札２
            props.fieldSet.Field1.Hand.length > 1 && <CardElement x={XY.player1Hand2x} y={XY.player1Hand2y} card={props.fold !== Hit.player1Hand2 ? props.fieldSet.Field1.Hand[1] : undefined} player={Player.Player1} />
        }
        {
            // 手札プレイヤー１手札３
            props.fieldSet.Field1.Hand.length > 2 && <CardElement x={XY.player1Hand3x} y={XY.player1Hand3y} card={props.fold !== Hit.player1Hand3 ? props.fieldSet.Field1.Hand[2] : undefined} player={Player.Player1} />
        }
        {
            // 手札プレイヤー２手札１
            props.fieldSet.Field2.Hand.length > 0 && <CardElement x={XY.player2Hand1x} y={XY.player2Hand1y} card={props.fold !== Hit.player2Hand1 ? props.fieldSet.Field2.Hand[0] : undefined} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札２
            props.fieldSet.Field2.Hand.length > 1 && <CardElement x={XY.player2Hand2x} y={XY.player2Hand2y} card={props.fold !== Hit.player2Hand2 ? props.fieldSet.Field2.Hand[1] : undefined} player={Player.Player2} />
        }
        {
            // 手札プレイヤー２手札３
            props.fieldSet.Field2.Hand.length > 2 && <CardElement x={XY.player2Hand3x} y={XY.player2Hand3y} card={props.fold !== Hit.player2Hand3 ? props.fieldSet.Field2.Hand[2] : undefined} player={Player.Player2} />
        }
        {
            // 左側プレイヤー１Stack１
            props.fieldSet.Field1.Left.length > 0 && <CardElement x={XY.player1LeftX} y={XY.player1LeftY} card={props.fieldSet.Field1.Left[0]} player={Player.Player1} />
        }
        {
            // 左側プレイヤー１Stack２
            props.fieldSet.Field1.Left.length > 1 && <CardElement x={XY.player1LeftX} y={XY.player1LeftY} card={props.fieldSet.Field1.Left[1]} player={Player.Player1} stack={1} />
        }
        {
            // 左側プレイヤー１Stack３
            props.fieldSet.Field1.Left.length > 2 && <CardElement x={XY.player1LeftX} y={XY.player1LeftY} card={props.fieldSet.Field1.Left[2]} player={Player.Player1} stack={2} />
        }
        {
            // 中央プレイヤー１Stack１
            props.fieldSet.Field1.Center.length > 0 && <CardElement x={XY.player1CenterX} y={XY.player1CenterY} card={props.fieldSet.Field1.Center[0]} player={Player.Player1} />
        }
        {
            // 中央プレイヤー１Stack２
            props.fieldSet.Field1.Center.length > 1 && <CardElement x={XY.player1CenterX} y={XY.player1CenterY} card={props.fieldSet.Field1.Center[1]} player={Player.Player1} stack={1} />
        }
        {
            // 中央プレイヤー１Stack３
            props.fieldSet.Field1.Center.length > 2 && <CardElement x={XY.player1CenterX} y={XY.player1CenterY} card={props.fieldSet.Field1.Center[2]} player={Player.Player1} stack={2} />
        }
        {
            // 右側プレイヤー１Stack１
            props.fieldSet.Field1.Right.length > 0 && <CardElement x={XY.player1RightX} y={XY.player1RightY} card={props.fieldSet.Field1.Right[0]} player={Player.Player1} />
        }
        {
            // 右側プレイヤー１Stack２
            props.fieldSet.Field1.Right.length > 1 && <CardElement x={XY.player1RightX} y={XY.player1RightY} card={props.fieldSet.Field1.Right[1]} player={Player.Player1} stack={1} />
        }
        {
            // 右側プレイヤー１Stack３
            props.fieldSet.Field1.Right.length > 2 && <CardElement x={XY.player1RightX} y={XY.player1RightY} card={props.fieldSet.Field1.Right[2]} player={Player.Player1} stack={2} />
        }
        {
            // 左側プレイヤー２Stack１
            props.fieldSet.Field2.Left.length > 0 && <CardElement x={XY.player2LeftX} y={XY.player2LeftY} card={props.fieldSet.Field2.Left[0]} player={Player.Player2} />
        }
        {
            // 左側プレイヤー２Stack２
            props.fieldSet.Field2.Left.length > 1 && <CardElement x={XY.player2LeftX} y={XY.player2LeftY} card={props.fieldSet.Field2.Left[1]} player={Player.Player2} stack={1} />
        }
        {
            // 左側プレイヤー２Stack３
            props.fieldSet.Field2.Left.length > 2 && <CardElement x={XY.player2LeftX} y={XY.player2LeftY} card={props.fieldSet.Field2.Left[2]} player={Player.Player2} stack={2} />
        }
        {
            // 中央プレイヤー２Stack１
            props.fieldSet.Field2.Center.length > 0 && <CardElement x={XY.player2CenterX} y={XY.player2CenterY} card={props.fieldSet.Field2.Center[0]} player={Player.Player2} />
        }
        {
            // 中央プレイヤー２Stack２
            props.fieldSet.Field2.Center.length > 1 && <CardElement x={XY.player2CenterX} y={XY.player2CenterY} card={props.fieldSet.Field2.Center[1]} player={Player.Player2} stack={1} />
        }
        {
            // 中央プレイヤー２Stack３
            props.fieldSet.Field2.Center.length > 2 && <CardElement x={XY.player2CenterX} y={XY.player2CenterY} card={props.fieldSet.Field2.Center[2]} player={Player.Player2} stack={2} />
        }
        {
            // 右側プレイヤー２Stack１
            props.fieldSet.Field2.Right.length > 0 && <CardElement x={XY.player2RightX} y={XY.player2RightY} card={props.fieldSet.Field2.Right[0]} player={Player.Player2} />
        }
        {
            // 右側プレイヤー２Stack２
            props.fieldSet.Field2.Right.length > 1 && <CardElement x={XY.player2RightX} y={XY.player2RightY} card={props.fieldSet.Field2.Right[1]} player={Player.Player2} stack={1} />
        }
        {
            // 右側プレイヤー２Stack３
            props.fieldSet.Field2.Right.length > 2 && <CardElement x={XY.player2RightX} y={XY.player2RightY} card={props.fieldSet.Field2.Right[2]} player={Player.Player2} stack={2} />
        }

        {
            props.fieldSet.Field1.Deck.length > 0 && <CardElement x={XY.player1DeckX} y={XY.player1DeckY} player={Player.Player1} hidden={true} />
        }
    </g>);
}