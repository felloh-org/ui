import { forwardRef, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const textareaVariants = cva(
  [
    'flex w-full rounded-lg border bg-white px-3 py-2 text-sm',
    'transition-colors duration-200',
    'placeholder:text-gray-400',
    'resize-y min-h-[80px]',
    // Focus styles
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    // Disabled state
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
    // Read-only state
    'read-only:bg-gray-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-gray-300',
          'hover:border-gray-400',
          'focus-visible:ring-primary-500 focus-visible:border-primary-500',
        ],
        error: [
          'border-error-500',
          'focus-visible:ring-error-500 focus-visible:border-error-500',
        ],
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      variant: 'default',
      resize: 'vertical',
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
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
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      resize,
      label,
      labelHidden,
      error,
      helperText,
      required,
      showCount,
      maxLength,
      id: providedId,
      value,
      defaultValue,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;
    const countId = `${id}-count`;

    // Calculate character count
    const currentLength =
      typeof value === 'string'
        ? value.length
        : typeof defaultValue === 'string'
        ? defaultValue.length
        : 0;

    // Build aria-describedby
    const describedByParts: string[] = [];
    if (ariaDescribedBy) describedByParts.push(ariaDescribedBy);
    if (error) describedByParts.push(errorId);
    if (helperText && !error) describedByParts.push(helperId);
    if (showCount && maxLength) describedByParts.push(countId);
    const describedBy =
      describedByParts.length > 0 ? describedByParts.join(' ') : undefined;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={id}
            className={cn(
              'mb-1.5 block text-sm font-medium text-gray-700',
              labelHidden && 'sr-only'
            )}
          >
            {label}
            {required && (
              <span className="ml-1 text-error-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        {/* Textarea */}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            textareaVariants({
              variant: error ? 'error' : variant,
              resize,
              className,
            })
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={describedBy}
          aria-required={required || undefined}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          {...props}
        />

        {/* Footer with error/helper and count */}
        <div className="mt-1.5 flex justify-between gap-4">
          <div className="flex-1">
            {/* Error message */}
            {error && (
              <p
                id={errorId}
                className="text-sm text-error-600"
                role="alert"
                aria-live="polite"
              >
                {error}
              </p>
            )}

            {/* Helper text */}
            {helperText && !error && (
              <p id={helperId} className="text-sm text-gray-500">
                {helperText}
              </p>
            )}
          </div>

          {/* Character count */}
          {showCount && maxLength && (
            <p
              id={countId}
              className={cn(
                'text-sm tabular-nums',
                currentLength > maxLength ? 'text-error-600' : 'text-gray-500'
              )}
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="sr-only">Character count:</span>
              {currentLength}/{maxLength}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { textareaVariants };
