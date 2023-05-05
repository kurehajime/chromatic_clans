export const BLOCK_SIZE = 48;
export const XY = {
    player1Hand1x: BLOCK_SIZE * 1,
    player1Hand1y: BLOCK_SIZE * 12,
    player1Hand2x: BLOCK_SIZE * 4,
    player1Hand2y: BLOCK_SIZE * 12,
    player1Hand3x: BLOCK_SIZE * 7,
    player1Hand3y: BLOCK_SIZE * 12,

    player2Hand1x: BLOCK_SIZE * 1,
    player2Hand1y: BLOCK_SIZE * -2,
    player2Hand2x: BLOCK_SIZE * 4,
    player2Hand2y: BLOCK_SIZE * -2,
    player2Hand3x: BLOCK_SIZE * 7,
    player2Hand3y: BLOCK_SIZE * -2,

    player1LeftX: BLOCK_SIZE * 1,
    player1LeftY: BLOCK_SIZE * 7,
    player1CenterX: BLOCK_SIZE * 4,
    player1CenterY: BLOCK_SIZE * 7,
    player1RightX: BLOCK_SIZE * 7,
    player1RightY: BLOCK_SIZE * 7,

    player2LeftX: BLOCK_SIZE * 1,
    player2LeftY: BLOCK_SIZE * 3,
    player2CenterX: BLOCK_SIZE * 4,
    player2CenterY: BLOCK_SIZE * 3,
    player2RightX: BLOCK_SIZE * 7,
    player2RightY: BLOCK_SIZE * 3,

    player1DeckX: BLOCK_SIZE * 11,
    player1DeckY: BLOCK_SIZE * 12,
}
const stackX = BLOCK_SIZE * 0.1;
const stackY = BLOCK_SIZE * 0.6;
export const XY2 = {
    player1LeftX1: XY.player1LeftX + (0 * stackX),
    player1LeftY1: XY.player1LeftY + (0 * stackY),
    player1LeftX2: XY.player1LeftX + (1 * stackX),
    player1LeftY2: XY.player1LeftY + (1 * stackY),
    player1LeftX3: XY.player1LeftX + (2 * stackX),
    player1LeftY3: XY.player1LeftY + (2 * stackY),

    player1CenterX1: XY.player1CenterX + (0 * stackX),
    player1CenterY1: XY.player1CenterY + (0 * stackY),
    player1CenterX2: XY.player1CenterX + (1 * stackX),
    player1CenterY2: XY.player1CenterY + (1 * stackY),
    player1CenterX3: XY.player1CenterX + (2 * stackX),
    player1CenterY3: XY.player1CenterY + (2 * stackY),

    player1RightX1: XY.player1RightX + (0 * stackX),
    player1RightY1: XY.player1RightY + (0 * stackY),
    player1RightX2: XY.player1RightX + (1 * stackX),
    player1RightY2: XY.player1RightY + (1 * stackY),
    player1RightX3: XY.player1RightX + (2 * stackX),
    player1RightY3: XY.player1RightY + (2 * stackY),

    player2LeftX1: XY.player2LeftX - (0 * stackX),
    player2LeftY1: XY.player2LeftY - (0 * stackY),
    player2LeftX2: XY.player2LeftX - (1 * stackX),
    player2LeftY2: XY.player2LeftY - (1 * stackY),
    player2LeftX3: XY.player2LeftX - (2 * stackX),
    player2LeftY3: XY.player2LeftY - (2 * stackY),

    player2CenterX1: XY.player2CenterX - (0 * stackX),
    player2CenterY1: XY.player2CenterY - (0 * stackY),
    player2CenterX2: XY.player2CenterX - (1 * stackX),
    player2CenterY2: XY.player2CenterY - (1 * stackY),
    player2CenterX3: XY.player2CenterX - (2 * stackX),
    player2CenterY3: XY.player2CenterY - (2 * stackY),

    player2RightX1: XY.player2RightX - (0 * stackX),
    player2RightY1: XY.player2RightY - (0 * stackY),
    player2RightX2: XY.player2RightX - (1 * stackX),
    player2RightY2: XY.player2RightY - (1 * stackY),
    player2RightX3: XY.player2RightX - (2 * stackX),
    player2RightY3: XY.player2RightY - (2 * stackY),
}
export const CARD_SIZE = {
    width: BLOCK_SIZE * 2,
    height: BLOCK_SIZE * 2 * 1.4
}
export const FIELD_SIZE = {
    width: BLOCK_SIZE * 15,
    height: BLOCK_SIZE * 15
}