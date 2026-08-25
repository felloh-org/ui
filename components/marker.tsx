import * as React from 'react';
import { cn } from '../utils/cn';
export const Marker = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => <span className={cn('inline-flex h-2 w-2 rounded-full bg-[#0f62fe]', className)} {...props} />;
