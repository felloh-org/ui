/**
 * IBM Carbon Design System — token bridge to Felloh shadcn palette.
 * Source: Carbon Design System v11 (IBM).
 * This file maps Carbon concepts onto Tailwind/shadcn tokens without
 * importing carbon-components CSS. Keeps the Felloh purple primary
 * (#7C3AED) as brand while preserving Carbon semantic intent.
 *
 * Usage:
 *  import { carbon } from '@felloh/ui/tokens'
 *  className = carbon.interactive.primary // -> bg-primary-500
 *
 * Carbon → Tailwind mapping documented here so designers + engineers
 * speak one language.
 */
export declare const carbon: {
    readonly interactive: {
        readonly primary: "#7C3AED";
        readonly primaryHover: "#6d28d9";
        readonly primaryActive: "#5b21b6";
        readonly secondary: "#1f2937";
        readonly tertiary: "#7C3AED";
    };
    readonly ui: {
        readonly background: "#f9fafb";
        readonly '01': "#ffffff";
        readonly '02': "#f9fafb";
        readonly '03': "#f3f4f6";
        readonly '04': "#e5e7eb";
        readonly field: "#ffffff";
    };
    readonly text: {
        readonly primary: "#111827";
        readonly secondary: "#4b5563";
        readonly placeholder: "#9ca3af";
        readonly onColor: "#ffffff";
        readonly error: "#dc2626";
    };
    readonly icon: {
        readonly primary: "#111827";
        readonly secondary: "#4b5563";
        readonly disabled: "#9ca3af";
    };
    readonly support: {
        readonly error: "#ef4444";
        readonly success: "#22c55e";
        readonly warning: "#f59e0b";
        readonly info: "#3b82f6";
        readonly errorInverse: "#fee2e2";
        readonly successInverse: "#dcfce7";
    };
    readonly border: {
        readonly subtle: "#e5e7eb";
        readonly strong: "#d1d5db";
        readonly inverse: "#1f2937";
    };
    readonly overlay: "rgba(22,22,22,0.5)";
    readonly focus: "#7C3AED";
    readonly data: readonly ["#6929c4", "#1192e8", "#005d5d", "#9f1853", "#520408", "#198038"];
};
export declare const carbonClasses: {
    readonly interactivePrimary: "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white";
    readonly interactiveSecondary: "bg-gray-800 hover:bg-gray-900 text-white";
    readonly uiBackground: "bg-gray-50";
    readonly textPrimary: "text-gray-900";
    readonly textSecondary: "text-gray-600";
    readonly borderSubtle: "border-gray-200";
};
export type CarbonTokens = typeof carbon;
