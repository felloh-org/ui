import { forwardRef, createContext, useContext, useId } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';

const radioVariants = cva(
  [
    'peer h-5 w-5 shrink-0 rounded-full border-2',
    'appearance-none cursor-pointer',
    'transition-colors duration-200',
    // Focus styles
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    // Disabled styles
    'disabled:cursor-not-allowed disabled:opacity-50',
    // Checked styles
    'checked:border-primary-500',
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

// Context for RadioGroup
interface RadioGroupContextValue {
  name: string;
  value: string | undefined;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  variant: 'default' | 'error';
  size: 'sm' | 'md' | 'lg';
}

const RadioGroupContext = createContext<RadioGroupContextValue | undefined>(
  undefined
);

function useRadioGroup() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error('RadioItem must be used within a RadioGroup');
  }
  return context;
}

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
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      value,
      onChange,
      children,
      label,
      labelHidden,
      error,
      helperText,
      required,
      disabled,
      orientation = 'vertical',
      size = 'md',
      className,
    },
    ref
  ) => {
    const groupId = useId();
    const labelId = `${groupId}-label`;
    const errorId = `${groupId}-error`;
    const helperId = `${groupId}-helper`;

    // Build aria-describedby
    const describedByParts: string[] = [];
    if (error) describedByParts.push(errorId);
    if (helperText && !error) describedByParts.push(helperId);
    const describedBy =
      describedByParts.length > 0 ? describedByParts.join(' ') : undefined;

    return (
      <RadioGroupContext.Provider
        value={{
          name,
          value,
          onChange,
          disabled,
          required,
          error,
          variant: error ? 'error' : 'default',
          size,
        }}
      >
        <div ref={ref} className={cn('w-full', className)}>
          {/* Label */}
          {label && (
            <div
              id={labelId}
              className={cn(
                'mb-2 text-sm font-medium text-gray-700',
                labelHidden && 'sr-only',
                error && 'text-error-600'
              )}
            >
              {label}
              {required && (
                <span className="ml-1 text-error-500" aria-hidden="true">
                  *
                </span>
              )}
            </div>
          )}

          {/* Radio group */}
          <div
            role="radiogroup"
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={describedBy}
            aria-required={required || undefined}
            className={cn(
              'flex gap-4',
              orientation === 'vertical' && 'flex-col',
              orientation === 'horizontal' && 'flex-row flex-wrap'
            )}
          >
            {children}
          </div>

          {/* Error message */}
          {error && (
            <p
              id={errorId}
              className="mt-2 text-sm text-error-600"
              role="alert"
              aria-live="polite"
            >
              {error}
            </p>
          )}

          {/* Helper text */}
          {helperText && !error && (
            <p id={helperId} className="mt-2 text-sm text-gray-500">
              {helperText}
            </p>
          )}
        </div>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

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
export const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  ({ value, label, description, disabled: itemDisabled, className }, ref) => {
    const group = useRadioGroup();
    const id = useId();
    const descriptionId = `${id}-description`;

    const isDisabled = itemDisabled || group.disabled;
    const isChecked = group.value === value;

    return (
      <div className={cn('flex items-start gap-3', className)}>
        <div className="relative flex items-center justify-center">
          <input
            ref={ref}
            type="radio"
            id={id}
            name={group.name}
            value={value}
            checked={isChecked}
            onChange={() => group.onChange(value)}
            disabled={isDisabled}
            required={group.required}
            className={cn(radioVariants({ variant: group.variant, size: group.size }))}
            aria-describedby={description ? descriptionId : undefined}
          />

          {/* Custom radio dot */}
          <div
            className={cn(
              'pointer-events-none absolute rounded-full bg-primary-500',
              'opacity-0 peer-checked:opacity-100',
              'transition-opacity duration-200',
              group.size === 'sm' && 'h-2 w-2',
              group.size === 'md' && 'h-2.5 w-2.5',
              group.size === 'lg' && 'h-3 w-3'
            )}
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor={id}
            className={cn(
              'text-sm font-medium cursor-pointer',
              isDisabled ? 'cursor-not-allowed text-gray-400' : 'text-gray-700',
              group.error && 'text-error-600'
            )}
          >
            {label}
          </label>
          {description && (
            <p
              id={descriptionId}
              className="mt-0.5 text-sm text-gray-500"
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

RadioItem.displayName = 'RadioItem';

export { radioVariants };
