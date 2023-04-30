export const Hit = {
    none: 0,
    player1Hand1: 1,
    player1Hand2: 2,
    player1Hand3: 3,
    player2Hand1: 4,
    player2Hand2: 5,
    player2Hand3: 6,
    Left: 7,
    Center: 8,
    Right: 9
} as const;

export type Hit = typeof Hit[keyof typeof Hit];