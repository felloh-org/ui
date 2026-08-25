import * as React from 'react';
import { cn } from '../utils/cn';
export const Item = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex items-center gap-3 rounded-md border border-black/10 bg-white p-3', className)} {...props} />;
export const ItemMedia = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex h-8 w-8 items-center justify-center rounded bg-[#F4F4F4]', className)} {...props} />;
export const ItemContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex-1 space-y-1', className)} {...props} />;
export const ItemTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className={cn('text-sm font-medium', className)} {...props} />;
export const ItemDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn('text-xs text-[#525252]', className)} {...props} />;
export const ItemActions = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex items-center gap-2', className)} {...props} />;
