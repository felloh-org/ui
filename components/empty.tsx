import * as React from 'react';
import { cn } from '../utils/cn';
export const Empty = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-black/10 bg-white p-8 text-center', className)} {...props} />;
export const EmptyTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={cn('text-sm font-semibold', className)} {...props} />;
export const EmptyDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn('text-xs text-[#525252] max-w-sm', className)} {...props} />;
export const EmptyAction = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('mt-2', className)} {...props} />;
