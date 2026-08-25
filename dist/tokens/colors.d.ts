/**
 * Design System Color Tokens
 * Based on a purple primary palette with semantic colors
 */
export declare const colors: {
    readonly primary: {
        readonly 50: "#f5f3ff";
        readonly 100: "#ede9fe";
        readonly 200: "#ddd6fe";
        readonly 300: "#c4b5fd";
        readonly 400: "#a78bfa";
        readonly 500: "#7C3AED";
        readonly 600: "#6d28d9";
        readonly 700: "#5b21b6";
        readonly 800: "#4c1d95";
        readonly 900: "#3b0764";
    };
    readonly gray: {
        readonly 50: "#f9fafb";
        readonly 100: "#f3f4f6";
        readonly 200: "#e5e7eb";
        readonly 300: "#d1d5db";
        readonly 400: "#9ca3af";
        readonly 500: "#6b7280";
        readonly 600: "#4b5563";
        readonly 700: "#374151";
        readonly 800: "#1f2937";
        readonly 900: "#111827";
        readonly 950: "#030712";
    };
    readonly success: {
        readonly 50: "#f0fdf4";
        readonly 100: "#dcfce7";
        readonly 500: "#22c55e";
        readonly 600: "#16a34a";
        readonly 700: "#15803d";
    };
    readonly warning: {
        readonly 50: "#fffbeb";
        readonly 100: "#fef3c7";
        readonly 500: "#f59e0b";
        readonly 600: "#d97706";
        readonly 700: "#b45309";
    };
    readonly error: {
        readonly 50: "#fef2f2";
        readonly 100: "#fee2e2";
        readonly 500: "#ef4444";
        readonly 600: "#dc2626";
        readonly 700: "#b91c1c";
    };
    readonly info: {
        readonly 50: "#eff6ff";
        readonly 100: "#dbeafe";
        readonly 500: "#3b82f6";
        readonly 600: "#2563eb";
        readonly 700: "#1d4ed8";
    };
    readonly white: "#ffffff";
    readonly black: "#000000";
    readonly transparent: "transparent";
};
export type Colors = typeof colors;
