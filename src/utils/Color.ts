export const Color = {
    Red: 1,
    Blue: 2,
    Green: 3,
} as const;

export type Color = typeof Color[keyof typeof Color];