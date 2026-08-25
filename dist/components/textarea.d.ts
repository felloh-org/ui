import { VariantProps } from 'class-variance-authority';
declare const textareaVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    resize?: "none" | "both" | "horizontal" | "vertical" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
    /** Label for the textarea */
    label?: string;
    /** Makes the label visually hidden */
    labelHidden?: boolean;
    /** Error message */
    error?: string;
    /** Helper text */
    helperText?: string;
    /** Required field */
    required?: boolean;
    /** Character count display */
    showCount?: boolean;
    /** Maximum character count */
    maxLength?: number;
}
/**
 * Textarea component with full ARIA support
 *
 * Accessibility features:
 * - Proper label association
 * - aria-invalid for error states
 * - aria-describedby for error/helper text
 * - aria-required for required fields
 * - Character count with screen reader announcement
 * - Visible focus ring
 */
export declare const Textarea: import('react').ForwardRefExoticComponent<TextareaProps & import('react').RefAttributes<HTMLTextAreaElement>>;
export { textareaVariants };
