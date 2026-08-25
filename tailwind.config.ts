import type { Config } from 'tailwindcss';
import { tokens } from './tokens';

/**
 * Tailwind CSS Configuration for Design System
 *
 * This configuration extends Tailwind with our design tokens.
 * Import this in your app's tailwind.config.ts:
 *
 * @example
 * import designSystemConfig from '@project/design-system/tailwind.config';
 *
 * export default {
 *   presets: [designSystemConfig],
 *   content: ['./src/**\/*.{js,ts,jsx,tsx}'],
 * } satisfies Config;
 */
const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './index.ts',
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        gray: tokens.colors.gray,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        info: tokens.colors.info,
      },
      fontFamily: {
        sans: [tokens.fonts.sans],
        mono: [tokens.fonts.mono],
      },
      fontSize: tokens.fontSizes,
      fontWeight: tokens.fontWeights,
      lineHeight: tokens.lineHeights,
      borderRadius: tokens.radii,
      boxShadow: tokens.shadows,
      spacing: tokens.spacing,
      // Animation keyframes for dialog/modal
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        'zoom-out': {
          '0%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.95)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'fade-out': 'fade-out 200ms ease-in',
        'zoom-in': 'zoom-in 200ms ease-out',
        'zoom-out': 'zoom-out 200ms ease-in',
      },
    },
  },
  plugins: [],
};

export default config;
