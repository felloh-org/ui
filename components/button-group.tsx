import * as React from 'react';
import { cn } from '../utils/cn';
export const ButtonGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('inline-flex items-center rounded-md border border-black/10 overflow-hidden', className)} {...props} />;
export const ButtonGroupItem = ({ className, active, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean }) => <button className={cn('px-3 py-1.5 text-sm border-r last:border-0 border-black/10 hover:bg-black/5', active && 'bg-[#161616] text-white', className)} {...props} />;
