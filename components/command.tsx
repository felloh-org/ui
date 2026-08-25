import * as React from 'react';
import { cn } from '../utils/cn';
export const Command = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-[#161616]', className)} {...props} />;
export const CommandInput = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => <input className={cn('flex h-10 w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm', className)} {...props} />;
export const CommandList = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('max-h-[300px] overflow-y-auto', className)} {...props} />;
export const CommandEmpty = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('py-6 text-center text-sm text-[#525252]', className)} {...props} />;
export const CommandGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('overflow-hidden p-1', className)} {...props} />;
export const CommandItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm hover:bg-black/5', className)} {...props} />;
export const CommandSeparator = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('-mx-1 h-px bg-black/10', className)} {...props} />;
