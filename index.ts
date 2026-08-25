/**
 * Design System - Master Export
 *
 * This is the main entry point for the design system.
 * Import components, tokens, and utilities from here.
 *
 * @example
 * import { Button, Input, tokens } from '@/design-system';
 *
 * Features:
 * - All components are ARIA-compliant (WCAG 2.1)
 * - Built with shadcn/ui patterns
 * - Tailwind CSS for responsive, cross-browser styling
 * - TypeScript with full type exports
 * - CVA for variant management
 */

// Precompiled styles (Tailwind v4 + design tokens). Emitted as felloh-ui.css in the
// library build; consumers import it once: `import '@felloh/ui/styles.css'`.
import './styles.css';

// Components
export * from './components';

// Design tokens
export * from './tokens';

// Utilities
export * from './utils';
