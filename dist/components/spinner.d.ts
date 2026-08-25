import { VariantProps } from 'class-variance-authority';
declare const spinnerVariants: (props?: ({
    size?: "sm" | "lg" | "xl" | "md" | "xs" | null | undefined;
    variant?: "default" | "current" | "primary" | "white" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
    /** Accessible label for the spinner */
    label?: string;
}
/**
 * Spinner (Loading) component with full ARIA support
 *
 * Accessibility features:
 * - role="status" for screen reader announcement
 * - aria-label for accessible loading message
 * - Screen reader only text for status
 * - Decorative SVG hidden from screen readers
 */
export declare const Spinner: import('react').ForwardRefExoticComponent<SpinnerProps & import('react').RefAttributes<SVGSVGElement>>;
/**
 * Full screen loading overlay
 */
export interface LoadingOverlayProps {
    /** Whether the overlay is visible */
    visible: boolean;
    /** Loading message */
    message?: string;
    /** Spinner size */
    size?: 'sm' | 'md' | 'lg' | 'xl';
}
export declare const LoadingOverlay: import('react').ForwardRefExoticComponent<LoadingOverlayProps & import('react').RefAttributes<HTMLDivElement>>;
export { spinnerVariants };
