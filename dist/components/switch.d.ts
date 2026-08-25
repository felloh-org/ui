import { VariantProps } from 'class-variance-authority';
declare const switchTrackVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare const switchThumbVariants: (props?: ({
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>, VariantProps<typeof switchTrackVariants> {
    /** Label text */
    label?: string;
    /** Label position */
    labelPosition?: 'left' | 'right';
    /** Description text */
    description?: string;
    /** Error message */
    error?: string;
}
/**
 * Switch (Toggle) component with full ARIA support
 *
 * Accessibility features:
 * - role="switch" for proper semantics
 * - aria-checked reflects on/off state
 * - Uses native checkbox for keyboard support (Space to toggle)
 * - Visible focus ring
 * - Proper label association
 */
export declare const Switch: import('react').ForwardRefExoticComponent<SwitchProps & import('react').RefAttributes<HTMLInputElement>>;
export { switchTrackVariants, switchThumbVariants };
