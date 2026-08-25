/**
 * Design System Tokens
 * Central export for all design tokens
 */
export { colors, type Colors } from './colors';
export {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  type Fonts,
  type FontSizes,
  type FontWeights,
  type LineHeights,
} from './typography';
export {
  spacing,
  radii,
  shadows,
  type Spacing,
  type Radii,
  type Shadows,
} from './spacing';
export { carbon, carbonClasses, type CarbonTokens } from './carbon';

// Combined tokens object for Tailwind config
import { colors } from './colors';
import { fonts, fontSizes, fontWeights, lineHeights } from './typography';
import { spacing, radii, shadows } from './spacing';

export const tokens = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  radii,
  shadows,
} as const;
