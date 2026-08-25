import * as React from 'react';
import { cn } from '../utils/cn';
export const ChartContainer = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('w-full', className)} {...props}>{children}</div>;
export const ChartTooltip = ({ children }: any) => <div className="rounded bg-[#161616] px-2 py-1 text-xs text-white">{children}</div>;
export const ChartTooltipContent = ChartTooltip;
