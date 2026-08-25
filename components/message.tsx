import * as React from 'react';
import { cn } from '../utils/cn';
export const Message = ({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'success' | 'error' }) => (
  <div className={cn('rounded-lg border p-3 text-sm', variant === 'success' ? 'border-[#defbe6] bg-[#defbe6] text-[#198038]' : variant === 'error' ? 'border-[#fff1f1] bg-[#fff1f1] text-[#da1e28]' : 'border-black/10 bg-white', className)} {...props} />
);
