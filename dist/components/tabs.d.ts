export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
}
export declare const Tabs: import('react').ForwardRefExoticComponent<TabsProps & import('react').RefAttributes<HTMLDivElement>>;
export declare const TabsList: import('react').ForwardRefExoticComponent<import('react').HTMLAttributes<HTMLDivElement> & import('react').RefAttributes<HTMLDivElement>>;
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}
export declare const TabsTrigger: import('react').ForwardRefExoticComponent<TabsTriggerProps & import('react').RefAttributes<HTMLButtonElement>>;
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}
export declare const TabsContent: import('react').ForwardRefExoticComponent<TabsContentProps & import('react').RefAttributes<HTMLDivElement>>;
