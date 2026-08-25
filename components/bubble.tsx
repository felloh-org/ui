import * as React from 'react';
import { cn } from '../utils/cn';
export const Bubble = ({ className, variant = 'default', ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'accent' }) => (
  <div className={cn('max-w-xs rounded-2xl px-4 py-2 text-sm', variant === 'accent' ? 'bg-[#D4C4FA] text-[#161616]' : 'bg-white border border-black/10 text-[#161616]', className)} {...props} />
);
