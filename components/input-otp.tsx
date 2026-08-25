import * as React from 'react';
import { cn } from '../utils/cn';
export const InputOTP = ({ className, ...props }: any) => <div className={cn('flex items-center gap-2', className)} {...props} />;
export const InputOTPGroup = ({ className, ...props }: any) => <div className={cn('flex items-center', className)} {...props} />;
export const InputOTPSlot = ({ className, ...props }: any) => <div className={cn('relative flex h-9 w-9 items-center justify-center border border-black/10 text-sm', className)} {...props} />;
export const InputOTPSeparator = () => <div className="flex items-center"><div className="h-1 w-1 rounded-full bg-black/10" /></div>;
