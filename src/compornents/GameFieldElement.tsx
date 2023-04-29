import { FieldSet } from "../utils/FieldSet";
import { BLOCK_SIZE } from "../utils/conf";
type Props = {
    fieldSet: FieldSet
}
export default function GameFieldElement(props: Props) {
    return (<svg width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 21} >
        <rect x={0} y={0} width={BLOCK_SIZE * 15} height={BLOCK_SIZE * 21} fill="black" />
    </svg>);
}