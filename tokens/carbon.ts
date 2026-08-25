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

import { colors } from './colors';

export const carbon = {
  // Interactive — Carbon's brand layer. We keep Felloh purple, not IBM blue 60.
  interactive: {
    primary: colors.primary[500], // Carbon $interactive-01
    primaryHover: colors.primary[600],
    primaryActive: colors.primary[700],
    secondary: colors.gray[800], // Carbon $interactive-02
    tertiary: colors.primary[500], // outline variant
  },

  // UI backgrounds — Carbon $ui-01 .. $ui-04, $field-01
  ui: {
    background: colors.gray[50], // $ui-background / $carbon--gray-10
    '01': '#ffffff', // $ui-01
    '02': colors.gray[50], // $ui-02
    '03': colors.gray[100], // $ui-03
    '04': colors.gray[200], // $ui-04
    field: '#ffffff', // $field-01
  },

  // Text — Carbon $text-01, $text-02, $text-04
  text: {
    primary: colors.gray[900], // $text-01
    secondary: colors.gray[600], // $text-02
    placeholder: colors.gray[400], // $text-04
    onColor: '#ffffff',
    error: colors.error[600],
  },

  // Icon — Carbon $icon-01 .. $icon-03
  icon: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    disabled: colors.gray[400],
  },

  // Support / semantic — Carbon $support-01..04
  support: {
    error: colors.error[500], // $support-01
    success: colors.success[500], // $support-02
    warning: colors.warning[500], // $support-03
    info: colors.info[500], // $support-04
    errorInverse: colors.error[100],
    successInverse: colors.success[100],
  },

  // Border / decorative
  border: {
    subtle: colors.gray[200], // $ui-03
    strong: colors.gray[300], // $ui-04
    inverse: colors.gray[800],
  },

  // Layer / overlay — Carbon $overlay-01
  overlay: 'rgba(22,22,22,0.5)',

  // Focus — Carbon $focus
  focus: colors.primary[500],

  // Data viz fallbacks (Carbon palette, kept for charts)
  data: [
    '#6929c4',
    '#1192e8',
    '#005d5d',
    '#9f1853',
    '#520408',
    '#198038',
  ] as const,
} as const;

// Tailwind class helpers — prefer these over raw hex in components
export const carbonClasses = {
  interactivePrimary: 'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white',
  interactiveSecondary: 'bg-gray-800 hover:bg-gray-900 text-white',
  uiBackground: 'bg-gray-50',
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-600',
  borderSubtle: 'border-gray-200',
} as const;

export type CarbonTokens = typeof carbon;
