import * as React from 'react';
export declare const Attachment: ({ className, name, size, onRemove, ...props }: React.HTMLAttributes<HTMLDivElement> & {
    name?: string;
    size?: string;
    onRemove?: () => void;
}) => React.JSX.Element;
