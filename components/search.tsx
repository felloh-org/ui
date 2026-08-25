import { forwardRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { cn } from '../utils/cn';
import { Input } from './input';

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
}

/**
 * Search — Carbon Search with magnifier + clear button.
 * Wraps shadcn Input, adds Carbon search affordance.
 */
export const Search = forwardRef<HTMLInputElement, SearchProps>(({ className, value, onClear, ...props }, ref) => {
  const showClear = value !== undefined && String(value).length > 0 && onClear;
  return (
    <div className={cn('relative flex items-center', className)}>
      <SearchIcon className="pointer-events-none absolute left-3 h-4 w-4 text-gray-400" aria-hidden />
      <Input ref={ref} value={value} className="pl-9 pr-9" type="search" {...props} />
      {showClear && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-2 inline-flex h-7 w-7 items-center justify-center rounded-md hover:bg-gray-100"
          aria-label="Clear search"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>
      )}
    </div>
  );
});
Search.displayName = 'Search';
