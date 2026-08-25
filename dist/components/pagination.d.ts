import { Button } from './button';
/**
 * Pagination — Carbon pagination pattern: page size + range + page buttons.
 * API matches shadcn pagination, styled with Carbon spacing.
 */
export declare const Pagination: {
    ({ className, ...props }: React.ComponentProps<"nav">): import("react").JSX.Element;
    displayName: string;
};
export declare const PaginationContent: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & import('react').RefAttributes<HTMLUListElement>>;
export declare const PaginationItem: import('react').ForwardRefExoticComponent<Omit<import('react').DetailedHTMLProps<import('react').LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & import('react').RefAttributes<HTMLLIElement>>;
type PaginationLinkProps = {
    isActive?: boolean;
} & React.ComponentProps<typeof Button>;
export declare const PaginationLink: {
    ({ className, isActive, size, ...props }: PaginationLinkProps): import("react").JSX.Element;
    displayName: string;
};
export declare const PaginationPrevious: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): import("react").JSX.Element;
    displayName: string;
};
export declare const PaginationNext: {
    ({ className, ...props }: React.ComponentProps<typeof PaginationLink>): import("react").JSX.Element;
    displayName: string;
};
export declare const PaginationEllipsis: {
    ({ className, ...props }: React.ComponentProps<"span">): import("react").JSX.Element;
    displayName: string;
};
/**
 * Carbon-style page info: "1–10 of 100 items"
 */
export declare const PaginationInfo: ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => import("react").JSX.Element;
export {};
