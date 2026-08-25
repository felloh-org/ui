import { forwardRef, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const checkboxVariants = cva(
  [
    'peer h-5 w-5 shrink-0 rounded border-2',
    'appearance-none cursor-pointer',
    'transition-colors duration-200',
    // Focus styles
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    // Disabled styles
    'disabled:cursor-not-allowed disabled:opacity-50',
    // Checked styles (using Tailwind's peer)
    'checked:bg-primary-500 checked:border-primary-500',
    // Indeterminate styles
    'indeterminate:bg-primary-500 indeterminate:border-primary-500',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-gray-300',
          'hover:border-gray-400',
          'focus-visible:ring-primary-500',
        ],
        error: [
          'border-error-500',
          'focus-visible:ring-error-500',
        ],
      },
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof checkboxVariants> {
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
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      error,
      indeterminate,
      id: providedId,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    // Build aria-describedby
    const describedByParts: string[] = [];
    if (description) describedByParts.push(descriptionId);
    if (error) describedByParts.push(errorId);
    const describedBy =
      describedByParts.length > 0 ? describedByParts.join(' ') : undefined;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center justify-center">
          <input
            ref={(node) => {
              // Handle indeterminate state
              if (node) {
                node.indeterminate = indeterminate || false;
              }
              if (typeof ref === 'function') ref(node);
              else if (ref) ref.current = node;
            }}
            type="checkbox"
            id={id}
            className={cn(
              checkboxVariants({ variant: error ? 'error' : variant, size }),
              className
            )}
            disabled={disabled}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={describedBy}
            {...props}
          />

          {/* Custom checkmark (CSS-based, shown when checked) */}
          <svg
            className={cn(
              'pointer-events-none absolute text-white',
              'opacity-0 peer-checked:opacity-100',
              'peer-indeterminate:opacity-100',
              size === 'sm' && 'h-3 w-3',
              size === 'md' && 'h-3.5 w-3.5',
              size === 'lg' && 'h-4 w-4'
            )}
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            {indeterminate ? (
              <path
                d="M4 8h8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 8l3 3 5-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </div>

        {/* Label and description */}
        {(label || description || error) && (
          <div className="flex flex-col">
            {label && (
              <label
                htmlFor={id}
                className={cn(
                  'text-sm font-medium leading-none cursor-pointer',
                  disabled
                    ? 'cursor-not-allowed text-gray-400'
                    : 'text-gray-700',
                  error && 'text-error-600'
                )}
              >
                {label}
              </label>
            )}
            {description && !error && (
              <p
                id={descriptionId}
                className="mt-1 text-sm text-gray-500"
              >
                {description}
              </p>
            )}
            {error && (
              <p
                id={errorId}
                className="mt-1 text-sm text-error-600"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { checkboxVariants };
