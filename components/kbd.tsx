import * as React from 'react';
import { cn } from '../utils/cn';
export const Kbd = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <kbd className={cn('inline-flex h-5 select-none items-center gap-1 rounded border border-black/10 bg-[#F4F4F4] px-1.5 font-mono text-xs font-medium', className)} {...props} />;
