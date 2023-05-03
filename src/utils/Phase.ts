export const Phase = {
    Playing: 1,
    Thinking: 2,
    OpenLeft: 3,
    OpenCenter: 4,
    OpenRight: 5,
    End: 6,
} as const;

export type Phase = typeof Phase[keyof typeof Phase];