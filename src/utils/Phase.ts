export const Phase = {
    Playing: 1,
    Thinking: 2,
    Open: 3,
    OpenLeft: 4,
    OpenCenter: 5,
    OpenRight: 6,
    End: 7,
} as const;

export type Phase = typeof Phase[keyof typeof Phase];