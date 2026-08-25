import * as React from 'react';
import { cn } from '../utils/cn';
export const Carousel = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('relative', className)} {...props} />;
export const CarouselContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('flex gap-4 overflow-hidden', className)} {...props} />;
export const CarouselItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn('min-w-0 shrink-0 grow-0 basis-full', className)} {...props} />;
export const CarouselPrevious = (props: any) => <button className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow" {...props}>‹</button>;
export const CarouselNext = (props: any) => <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow" {...props}>›</button>;
