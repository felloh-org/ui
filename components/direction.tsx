import * as React from 'react';
import { cn } from '../utils/cn';
export const Direction = ({ className, dir = 'ltr', ...props }: React.HTMLAttributes<HTMLDivElement> & { dir?: 'ltr' | 'rtl' }) => <div dir={dir} className={cn('', className)} {...props} />;
