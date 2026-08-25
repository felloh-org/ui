import * as React from 'react';
import { cn } from '../utils/cn';
export const NativeSelect = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(({ className, children, ...props }, ref) => (
  <select ref={ref} className={cn('flex h-9 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm focus:ring-2 focus:ring-[#161616]', className)} {...props}>{children}</select>
));
NativeSelect.displayName = 'NativeSelect';
