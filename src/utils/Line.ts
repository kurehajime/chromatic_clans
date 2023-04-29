export const Line = {
    Left: 0,
    Center: 1,
    Right: 2,
} as const;

export type Line = typeof Line[keyof typeof Line];