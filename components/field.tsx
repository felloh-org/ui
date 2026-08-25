import * as React from 'react';
import { cn } from '../utils/cn';
export const Field = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('space-y-1.5', className)} {...props} />;
export const FieldLabel = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => <label className={cn('text-sm font-medium text-[#161616]', className)} {...props} />;
export const FieldDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn('text-xs text-[#525252]', className)} {...props} />;
export const FieldError = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn('text-xs text-[#da1e28]', className)} {...props} />;
