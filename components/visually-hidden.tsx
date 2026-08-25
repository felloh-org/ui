import { forwardRef } from 'react';
import { cn } from '../utils/cn';

export interface VisuallyHiddenProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  /** The content to hide visually but keep accessible */
  children: React.ReactNode;
  /** Render as a different element */
  as?: 'span' | 'div' | 'label';
}

/**
 * VisuallyHidden component - hides content visually but keeps it accessible
 *
 * Use this for:
 * - Skip links
 * - Form labels that should be hidden
 * - Additional context for screen readers
 * - Icon-only buttons that need accessible labels
 *
 * Accessibility features:
 * - Content is hidden from visual display but accessible to screen readers
 * - Uses CSS that doesn't hide from assistive technology
 * - Maintains proper document flow
 */
export const VisuallyHidden = forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ children, as: Component = 'span', className, ...props }, ref) => {
    return (
      <Component
        ref={ref as React.Ref<HTMLSpanElement & HTMLDivElement & HTMLLabelElement>}
        className={cn(
          // Screen reader only styles
          'absolute w-px h-px p-0 -m-px overflow-hidden',
          'whitespace-nowrap border-0',
          // Using clip-path instead of clip (deprecated)
          '[clip-path:inset(50%)]',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

VisuallyHidden.displayName = 'VisuallyHidden';

/**
 * Skip to content link for keyboard navigation
 *
 * Place at the very top of your app, before any other content.
 * Links to the main content area for keyboard users to skip navigation.
 */
export interface SkipLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The ID of the main content area to skip to */
  contentId?: string;
  /** Link text */
  children?: React.ReactNode;
}

export const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(
  (
    { contentId = 'main-content', children = 'Skip to main content', ...props },
    ref
  ) => {
    return (
      <a
        ref={ref}
        href={`#${contentId}`}
        className={cn(
          // Hidden by default
          'absolute left-0 top-0 z-[100] -translate-y-full',
          // Shown on focus
          'focus:translate-y-0',
          // Styling
          'bg-primary-500 text-white px-4 py-2 font-medium',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
          'transition-transform duration-200'
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

SkipLink.displayName = 'SkipLink';
