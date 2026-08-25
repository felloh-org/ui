import * as React from 'react';
export type CalendarProps = React.ComponentProps<'div'> & {
    mode?: 'single' | 'multiple';
    selected?: Date;
    onSelect?: (d?: Date) => void;
};
export declare function Calendar({ className, ...props }: CalendarProps): React.JSX.Element;
