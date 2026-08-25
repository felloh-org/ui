import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const spinnerVariants = cva('animate-spin', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-12 w-12',
    },
    variant: {
      default: 'text-gray-400',
      primary: 'text-primary-500',
      white: 'text-white',
      current: 'text-current',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

export interface SpinnerProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {
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
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, variant, label = 'Loading...', ...props }, ref) => {
    return (
      <div role="status" aria-label={label}>
        <svg
          ref={ref}
          className={cn(spinnerVariants({ size, variant, className }))}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          {...props}
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        <span className="sr-only">{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';

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

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(
  ({ visible, message = 'Loading...', size = 'lg' }, ref) => {
    if (!visible) return null;

    return (
      <div
        ref={ref}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
        role="alert"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="flex flex-col items-center gap-4">
          <Spinner size={size} variant="primary" label={message} />
          <p className="text-sm font-medium text-gray-600">{message}</p>
        </div>
      </div>
    );
  }
);

LoadingOverlay.displayName = 'LoadingOverlay';

export { spinnerVariants };
