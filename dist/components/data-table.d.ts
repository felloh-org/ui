import * as React from "react";
export interface DataTableColumn<T> {
    /** Unique key for the column */
    key: string;
    /** Header label */
    header: string;
    /** Function to render cell content */
    cell: (row: T) => React.ReactNode;
    /** Function to get sortable value (if sortable) */
    sortValue?: (row: T) => string | number | Date;
    /** Function to get searchable value (if searchable) */
    searchValue?: (row: T) => string;
    /** Whether this column is sortable */
    sortable?: boolean;
    /** Additional className for the header */
    headerClassName?: string;
    /** Additional className for cells */
    cellClassName?: string;
}
export interface DataTableProps<T> {
    /** Array of data to display */
    data: T[];
    /** Column definitions */
    columns: DataTableColumn<T>[];
    /** Unique key for each row */
    getRowKey: (row: T) => string;
    /** Called when a row is clicked */
    onRowClick?: (row: T) => void;
    /** Enable search filtering */
    searchable?: boolean;
    /** Placeholder for search input */
    searchPlaceholder?: string;
    /** Empty state message */
    emptyMessage?: string;
    /** Maximum rows to display (for pagination) */
    maxRows?: number;
    /** Additional className for the table container */
    className?: string;
}
type SortDirection = "asc" | "desc" | null;
export declare function DataTable<T>({ data, columns, getRowKey, onRowClick, searchable, searchPlaceholder, emptyMessage, maxRows, className, }: DataTableProps<T>): React.JSX.Element;
export declare function useDataTableState(): {
    sortColumn: string | null;
    setSortColumn: React.Dispatch<React.SetStateAction<string | null>>;
    sortDirection: SortDirection;
    setSortDirection: React.Dispatch<React.SetStateAction<SortDirection>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};
export {};
