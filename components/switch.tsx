import { forwardRef, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const switchTrackVariants = cva(
  [
    'relative inline-flex shrink-0 cursor-pointer rounded-full',
    'transition-colors duration-200',
    // Focus styles on the track (will be triggered by hidden input)
    'focus-within:ring-2 focus-within:ring-offset-2',
    // Disabled styles
    'has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-gray-200',
          'has-[:checked]:bg-primary-500',
          'focus-within:ring-primary-500',
        ],
        error: [
          'bg-gray-200',
          'has-[:checked]:bg-error-500',
          'focus-within:ring-error-500',
        ],
      },
      size: {
        sm: 'h-5 w-9',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

const switchThumbVariants = cva(
  [
    'pointer-events-none absolute top-0.5 left-0.5',
    'rounded-full bg-white shadow-md',
    'transition-transform duration-200',
    'peer-checked:translate-x-full',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-4 peer-checked:translate-x-4',
        md: 'h-5 w-5 peer-checked:translate-x-5',
        lg: 'h-6 w-6 peer-checked:translate-x-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>,
    VariantProps<typeof switchTrackVariants> {
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
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      variant,
      size,
      label,
      labelPosition = 'right',
      description,
      error,
      id: providedId,
      disabled,
      checked,
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

    const labelElement = label && (
      <label
        htmlFor={id}
        className={cn(
          'text-sm font-medium cursor-pointer',
          disabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-700',
          error && 'text-error-600'
        )}
      >
        {label}
      </label>
    );

    return (
      <div className="flex flex-col">
        <div
          className={cn(
            'flex items-center gap-3',
            labelPosition === 'left' && 'flex-row-reverse justify-end'
          )}
        >
          {labelElement}

          {/* Switch track */}
          <span
            className={cn(
              switchTrackVariants({ variant: error ? 'error' : variant, size }),
              className
            )}
          >
            {/* Hidden checkbox input */}
            <input
              ref={ref}
              type="checkbox"
              role="switch"
              id={id}
              checked={checked}
              disabled={disabled}
              aria-checked={checked}
              aria-invalid={error ? 'true' : undefined}
              aria-describedby={describedBy}
              className="peer sr-only"
              {...props}
            />

            {/* Switch thumb */}
            <span
              className={switchThumbVariants({ size })}
              aria-hidden="true"
            />
          </span>
        </div>

        {/* Description or error */}
        {description && !error && (
          <p
            id={descriptionId}
            className={cn(
              'mt-1 text-sm text-gray-500',
              labelPosition === 'right' && 'ml-14',
              labelPosition === 'left' && 'mr-14'
            )}
          >
            {description}
          </p>
        )}
        {error && (
          <p
            id={errorId}
            className={cn(
              'mt-1 text-sm text-error-600',
              labelPosition === 'right' && 'ml-14',
              labelPosition === 'left' && 'mr-14'
            )}
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = 'Switch';

export { switchTrackVariants, switchThumbVariants };
