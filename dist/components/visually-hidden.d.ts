export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
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
export declare const VisuallyHidden: import('react').ForwardRefExoticComponent<VisuallyHiddenProps & import('react').RefAttributes<HTMLSpanElement>>;
/**
 * Skip to content link for keyboard navigation
 *
 * Place at the very top of your app, before any other content.
 * Links to the main content area for keyboard users to skip navigation.
 */
export interface SkipLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The ID of the main content area to skip to */
    contentId?: string;
    /** Link text */
    children?: React.ReactNode;
}
export declare const SkipLink: import('react').ForwardRefExoticComponent<SkipLinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
