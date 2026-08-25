import * as React from 'react';
import { cn } from '../utils/cn';
export const Drawer = ({ children, open, onOpenChange }: any) => <div>{children}</div>;
export const DrawerTrigger = ({ children, ...props }: any) => <button {...props}>{children}</button>;
export const DrawerContent = ({ className, children, ...props }: any) => <div className={cn('fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-lg border bg-white', className)} {...props}>{children}</div>;
export const DrawerHeader = ({ className, ...props }: any) => <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />;
export const DrawerTitle = ({ className, ...props }: any) => <h3 className={cn('text-lg font-semibold', className)} {...props} />;
export const DrawerDescription = ({ className, ...props }: any) => <p className={cn('text-sm text-[#525252]', className)} {...props} />;
