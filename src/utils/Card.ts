export const Card = {
    Red1: 11,
    Red2: 12,
    Red3: 13,
    Blue1: 21,
    Blue2: 22,
    Blue3: 23,
    Green1: 31,
    Green2: 32,
    Green3: 33,
    White4: 44,
} as const;

export type Card = typeof Card[keyof typeof Card];