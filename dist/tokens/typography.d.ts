/**
 * Design System Typography Tokens
 */
export declare const fonts: {
    readonly sans: "\"Plus Jakarta Sans\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif";
    readonly mono: "\"JetBrains Mono\", \"Fira Code\", ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace";
};
export declare const fontSizes: {
    readonly xs: "0.75rem";
    readonly sm: "0.875rem";
    readonly base: "1rem";
    readonly lg: "1.125rem";
    readonly xl: "1.25rem";
    readonly '2xl': "1.5rem";
    readonly '3xl': "1.875rem";
    readonly '4xl': "2.25rem";
    readonly '5xl': "3rem";
    readonly '6xl': "3.75rem";
};
export declare const fontWeights: {
    readonly normal: "400";
    readonly medium: "500";
    readonly semibold: "600";
    readonly bold: "700";
};
export declare const lineHeights: {
    readonly none: "1";
    readonly tight: "1.25";
    readonly snug: "1.375";
    readonly normal: "1.5";
    readonly relaxed: "1.625";
    readonly loose: "2";
};
export declare const letterSpacings: {
    readonly tighter: "-0.05em";
    readonly tight: "-0.025em";
    readonly normal: "0";
    readonly wide: "0.025em";
    readonly wider: "0.05em";
    readonly widest: "0.1em";
};
export type Fonts = typeof fonts;
export type FontSizes = typeof fontSizes;
export type FontWeights = typeof fontWeights;
export type LineHeights = typeof lineHeights;
