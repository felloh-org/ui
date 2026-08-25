import * as React from "react"
import { ChevronDown, ChevronUp, ChevronsUpDown, Search, X } from "lucide-react"
import { cn } from "../utils/cn"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table"
import { Input } from "./input"

// Column definition for DataTable
export interface DataTableColumn<T> {
  /** Unique key for the column */
  key: string
  /** Header label */
  header: string
  /** Function to render cell content */
  cell: (row: T) => React.ReactNode
  /** Function to get sortable value (if sortable) */
  sortValue?: (row: T) => string | number | Date
  /** Function to get searchable value (if searchable) */
  searchValue?: (row: T) => string
  /** Whether this column is sortable */
  sortable?: boolean
  /** Additional className for the header */
  headerClassName?: string
  /** Additional className for cells */
  cellClassName?: string
}

export interface DataTableProps<T> {
  /** Array of data to display */
  data: T[]
  /** Column definitions */
  columns: DataTableColumn<T>[]
  /** Unique key for each row */
  getRowKey: (row: T) => string
  /** Called when a row is clicked */
  onRowClick?: (row: T) => void
  /** Enable search filtering */
  searchable?: boolean
  /** Placeholder for search input */
  searchPlaceholder?: string
  /** Empty state message */
  emptyMessage?: string
  /** Maximum rows to display (for pagination) */
  maxRows?: number
  /** Additional className for the table container */
  className?: string
}

type SortDirection = "asc" | "desc" | null

export function DataTable<T>({
  data,
  columns,
  getRowKey,
  onRowClick,
  searchable = false,
  searchPlaceholder = "Search...",
  emptyMessage = "No data available",
  maxRows,
  className,
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [columnFilters, setColumnFilters] = React.useState<Record<string, string>>({})

  // Check if any columns have searchValue defined (for column filtering)
  const hasColumnFilters = columns.some((col) => col.searchValue)

  // Update a column filter
  const updateColumnFilter = (columnKey: string, value: string) => {
    setColumnFilters((prev) => ({
      ...prev,
      [columnKey]: value,
    }))
  }

  // Clear a column filter
  const clearColumnFilter = (columnKey: string) => {
    setColumnFilters((prev) => {
      const updated = { ...prev }
      delete updated[columnKey]
      return updated
    })
  }

  // Check if any column filters are active
  const hasActiveColumnFilters = Object.values(columnFilters).some((v) => v.trim())

  // Handle sort column click
  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      // Cycle through: asc -> desc -> null
      if (sortDirection === "asc") {
        setSortDirection("desc")
      } else if (sortDirection === "desc") {
        setSortColumn(null)
        setSortDirection(null)
      }
    } else {
      setSortColumn(columnKey)
      setSortDirection("asc")
    }
  }

  // Filter data based on global search query and column filters
  const filteredData = React.useMemo(() => {
    let result = data

    // Apply global search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter((row) => {
        return columns.some((col) => {
          if (col.searchValue) {
            return col.searchValue(row).toLowerCase().includes(query)
          }
          return false
        })
      })
    }

    // Apply column-specific filters
    if (hasActiveColumnFilters) {
      result = result.filter((row) => {
        return Object.entries(columnFilters).every(([columnKey, filterValue]) => {
          if (!filterValue.trim()) return true
          const column = columns.find((col) => col.key === columnKey)
          if (!column?.searchValue) return true
          return column.searchValue(row).toLowerCase().includes(filterValue.toLowerCase())
        })
      })
    }

    return result
  }, [data, searchQuery, columns, columnFilters, hasActiveColumnFilters])

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData

    const column = columns.find((col) => col.key === sortColumn)
    if (!column?.sortValue) return filteredData

    return [...filteredData].sort((a, b) => {
      const aVal = column.sortValue!(a)
      const bVal = column.sortValue!(b)

      let comparison = 0
      if (aVal < bVal) comparison = -1
      if (aVal > bVal) comparison = 1

      return sortDirection === "desc" ? -comparison : comparison
    })
  }, [filteredData, sortColumn, sortDirection, columns])

  // Apply max rows limit
  const displayData = maxRows ? sortedData.slice(0, maxRows) : sortedData
  const hasMore = maxRows && sortedData.length > maxRows

  // Render sort icon
  const renderSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) {
      return <ChevronsUpDown className="h-4 w-4 text-[#8d8d8d]" />
    }
    if (sortDirection === "asc") {
      return <ChevronUp className="h-4 w-4 text-[#0f62fe]" />
    }
    return <ChevronDown className="h-4 w-4 text-[#0f62fe]" />
  }

  return (
    <div className={cn("space-y-0", className)}>
      {/* Search bar */}
      {searchable && (
        <div className="p-4 bg-[#f4f4f4] border-b border-[#e0e0e0]">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#525252]" />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10 bg-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#525252] hover:text-[#161616]"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="mt-2 text-xs text-[#525252]">
              {filteredData.length} result{filteredData.length !== 1 ? "s" : ""} found
            </p>
          )}
        </div>
      )}

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.key}
                className={cn(
                  column.sortable && "cursor-pointer select-none hover:bg-[#c6c6c6]",
                  column.headerClassName
                )}
                onClick={column.sortable ? () => handleSort(column.key) : undefined}
                aria-sort={
                  sortColumn === column.key
                    ? sortDirection === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
              >
                <div className="flex items-center gap-2">
                  <span>{column.header}</span>
                  {column.sortable && renderSortIcon(column.key)}
                </div>
              </TableHead>
            ))}
          </TableRow>
          {/* Column filter row */}
          {hasColumnFilters && (
            <TableRow className="bg-[#f4f4f4] hover:bg-[#f4f4f4]">
              {columns.map((column) => (
                <TableHead key={`filter-${column.key}`} className={cn("py-2", column.headerClassName)}>
                  {column.searchValue ? (
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3 w-3 text-[#8d8d8d]" />
                      <input
                        type="text"
                        placeholder={`Filter...`}
                        value={columnFilters[column.key] || ""}
                        onChange={(e) => updateColumnFilter(column.key, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                          "w-full h-7 pl-7 pr-7 text-xs bg-white border border-[#e0e0e0] text-[#161616]",
                          "placeholder:text-[#a8a8a8]",
                          "focus:outline-none focus:border-[#0f62fe] focus:ring-1 focus:ring-[#0f62fe]",
                          column.headerClassName?.includes("text-right") && "text-right"
                        )}
                        aria-label={`Filter ${column.header}`}
                      />
                      {columnFilters[column.key] && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            clearColumnFilter(column.key)
                          }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-[#8d8d8d] hover:text-[#161616]"
                          aria-label={`Clear ${column.header} filter`}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <span className="text-xs text-[#8d8d8d]">—</span>
                  )}
                </TableHead>
              ))}
            </TableRow>
          )}
        </TableHeader>
        <TableBody>
          {displayData.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center text-[#525252]">
                {searchQuery || hasActiveColumnFilters ? "No matching results" : emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            <>
              {displayData.map((row) => (
                <TableRow
                  key={getRowKey(row)}
                  interactive={!!onRowClick}
                  onClick={onRowClick ? () => onRowClick(row) : undefined}
                  onKeyDown={onRowClick ? (e) => e.key === "Enter" && onRowClick(row) : undefined}
                >
                  {columns.map((column) => (
                    <TableCell key={column.key} className={column.cellClassName}>
                      {column.cell(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              {hasMore && (
                <TableRow>
                  <TableCell colSpan={columns.length} className="text-center text-[#525252]">
                    ... and {sortedData.length - maxRows} more rows
                  </TableCell>
                </TableRow>
              )}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  )
}

// Export a simple hook for managing table state externally if needed
export function useDataTableState() {
  const [sortColumn, setSortColumn] = React.useState<string | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)
  const [searchQuery, setSearchQuery] = React.useState("")

  return {
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
    searchQuery,
    setSearchQuery,
  }
}
