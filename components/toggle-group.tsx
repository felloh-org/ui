import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { cn } from '../utils/cn';
const ToggleGroup = ToggleGroupPrimitive.Root;
const ToggleGroupItem = React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Item>, React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>>(({ className, ...props }, ref) => <ToggleGroupPrimitive.Item ref={ref} className={cn('inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm hover:bg-black/5 data-[state=on]:bg-black data-[state=on]:text-white', className)} {...props} />);
ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;
export { ToggleGroup, ToggleGroupItem };
