import * as React from 'react';
import { cn } from '../utils/cn';
export const InputGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex items-center rounded-md border border-black/10 bg-white focus-within:ring-2 focus-within:ring-[#161616]', className)} {...props} />;
export const InputGroupAddon = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('px-3 text-sm text-[#525252]', className)} {...props} />;
export const InputGroupInput = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => <input className={cn('flex-1 bg-transparent px-3 py-2 text-sm outline-none', className)} {...props} />;
export const InputGroupButton = ({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => <button className={cn('px-3 py-1.5 text-sm hover:bg-black/5', className)} {...props} />;
