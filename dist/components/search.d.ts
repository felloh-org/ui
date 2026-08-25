export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    onClear?: () => void;
}
/**
 * Search — Carbon Search with magnifier + clear button.
 * Wraps shadcn Input, adds Carbon search affordance.
 */
export declare const Search: import('react').ForwardRefExoticComponent<SearchProps & import('react').RefAttributes<HTMLInputElement>>;
