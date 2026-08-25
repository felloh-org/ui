import * as React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from './button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar } from './calendar';
export const DatePicker = ({ className, value, onChange, ...props }: any) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild><Button variant="outline" className={cn('justify-start text-left font-normal', !value && 'text-[#8d8d8d]', className)}><CalendarIcon className="mr-2 h-4 w-4" />{value ? new Date(value).toLocaleDateString() : 'Pick a date'}</Button></PopoverTrigger>
      <PopoverContent className="w-auto p-0"><Calendar {...props} /></PopoverContent>
    </Popover>
  );
};
