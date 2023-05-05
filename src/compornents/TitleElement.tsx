import { BLOCK_SIZE } from '../utils/conf'
import './TitleElement.css'
type Props = {
    x: number
    y: number
}
export default function TitleElement(props: Props) {
    return (<g style={{ pointerEvents: "none" }}  >
        <text x={props.x} y={props.y} fontSize={BLOCK_SIZE * 0.5}
            fill="white" className="title"
            fontFamily='Piazzolla'
        >Chromatic Clans</text>
    </g>
    )

}