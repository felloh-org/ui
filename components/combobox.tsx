import * as React from 'react';
import { cn } from '../utils/cn';
import { Input } from './input';
export const Combobox = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('relative', className)} {...props} />;
export const ComboboxInput = Input;
export const ComboboxContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('absolute z-50 mt-1 w-full rounded-md border border-black/10 bg-white shadow', className)} {...props} />;
export const ComboboxItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('px-3 py-2 text-sm hover:bg-black/5 cursor-pointer', className)} {...props} />;
