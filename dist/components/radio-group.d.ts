declare const radioVariants: (props?: ({
    variant?: "default" | "error" | null | undefined;
    size?: "sm" | "lg" | "md" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface RadioGroupProps {
    /** Group name (required for native radio functionality) */
    name: string;
    /** Selected value */
    value?: string;
    /** Callback when selection changes */
    onChange: (value: string) => void;
    /** Children (RadioItem components) */
    children: React.ReactNode;
    /** Label for the radio group */
    label?: string;
    /** Makes the label visually hidden */
    labelHidden?: boolean;
    /** Error message */
    error?: string;
    /** Helper text */
    helperText?: string;
    /** Required field */
    required?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Size */
    size?: 'sm' | 'md' | 'lg';
    /** Additional className */
    className?: string;
}
/**
 * RadioGroup component with full ARIA support
 *
 * Accessibility features:
 * - role="radiogroup" for proper semantics
 * - aria-labelledby for group label
 * - aria-describedby for error/helper text
 * - aria-required for required groups
 * - Keyboard navigation (arrow keys)
 */
export declare const RadioGroup: import('react').ForwardRefExoticComponent<RadioGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export interface RadioItemProps {
    /** Value for this radio option */
    value: string;
    /** Label text */
    label: string;
    /** Description text */
    description?: string;
    /** Disabled state (overrides group) */
    disabled?: boolean;
    /** Additional className */
    className?: string;
}
/**
 * RadioItem component - individual radio option
 */
export declare const RadioItem: import('react').ForwardRefExoticComponent<RadioItemProps & import('react').RefAttributes<HTMLInputElement>>;
export { radioVariants };
