import * as React from 'react';
import { Paperclip, X } from 'lucide-react';
import { cn } from '../utils/cn';
export const Attachment = ({ className, name, size, onRemove, ...props }: React.HTMLAttributes<HTMLDivElement> & { name?: string; size?: string; onRemove?: () => void }) => (
  <div className={cn('flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-2 text-sm', className)} {...props}>
    <Paperclip className="h-4 w-4 text-[#525252]" />
    <span className="flex-1 truncate">{name ?? 'file.pdf'}</span>
    {size && <span className="text-xs text-[#8d8d8d]">{size}</span>}
    {onRemove && <button onClick={onRemove} className="rounded p-1 hover:bg-black/5"><X className="h-3 w-3" /></button>}
  </div>
);
