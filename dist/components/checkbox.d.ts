import { VariantProps } from 'class-variance-authority';
declare const checkboxVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>, VariantProps<typeof checkboxVariants> {
    /** Label text */
    label?: string;
    /** Description text below the label */
    description?: string;
    /** Error message */
    error?: string;
    /** Indeterminate state */
    indeterminate?: boolean;
}
/**
 * Checkbox component with full ARIA support
 *
 * Accessibility features:
 * - Uses native checkbox input for built-in accessibility
 * - aria-invalid for error states
 * - aria-describedby for descriptions and errors
 * - Proper label association
 * - Visible focus ring
 * - Custom checkmark with aria-hidden
 */
export declare const Checkbox: import('react').ForwardRefExoticComponent<CheckboxProps & import('react').RefAttributes<HTMLInputElement>>;
export { checkboxVariants };
