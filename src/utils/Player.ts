export const Player = {
    Player1: 1,
    Player2: 2,
    None: 0,
} as const;

export type Player = typeof Player[keyof typeof Player];