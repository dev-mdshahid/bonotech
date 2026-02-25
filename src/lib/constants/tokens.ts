// src/lib/constants/tokens.ts
// Mirror of CSS vars for use in framer-motion or inline logic only.
// Never use these to set styles directly in JSX — use Tailwind classes.

export const TOKENS = {
    transitions: {
        fast: 'all 0.15s ease',
        base: 'all 0.25s ease',
        slow: 'all 0.4s ease',
    },
} as const
