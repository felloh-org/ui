import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from './button';
export type CalendarProps = React.ComponentProps<'div'> & { mode?: 'single' | 'multiple'; selected?: Date; onSelect?: (d?: Date) => void };
export function Calendar({ className, ...props }: CalendarProps) {
  return <div className={cn('rounded-md border border-black/10 bg-white p-3 text-sm', className)} {...props}><div className="flex items-center justify-between"><Button variant="ghost" size="icon"><ChevronLeft className="h-4 w-4" /></Button><span className="font-medium">January 2026</span><Button variant="ghost" size="icon"><ChevronRight className="h-4 w-4" /></Button></div><div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-[#525252]"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div><div className="mt-2 grid grid-cols-7 gap-1">{Array.from({length:35}).map((_,i)=><div key={i} className={cn('flex h-8 items-center justify-center rounded text-xs', i===10 && 'bg-[#161616] text-white')}>{i+1}</div>)}</div></div>;
}
