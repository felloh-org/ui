import * as React from 'react';
import { cn } from '../utils/cn';
export const ResizablePanelGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex h-full w-full', className)} {...props} />;
export const ResizablePanel = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('', className)} {...props} />;
export const ResizableHandle = ({ withHandle, className, ...props }: any) => <div className={cn('relative flex w-px items-center justify-center bg-black/10', className)} {...props}>{withHandle && <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-white" />}</div>;
