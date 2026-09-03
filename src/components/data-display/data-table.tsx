"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey?: string;
  searchPlaceholder?: string;
  toolbarActions?: React.ReactNode;
  filterSlot?: React.ReactNode;
  initialPageSize?: number;
  className?: string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey: _searchKey,
  searchPlaceholder,
  toolbarActions,
  filterSlot,
  initialPageSize = 10,
  className,
}: DataTableProps<TData, TValue>) {
  const { t, locale } = useTranslation();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = React.useState("");

  const placeholder = searchPlaceholder ?? t.common.search;

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: initialPageSize,
      },
    },
  });

  return (
    <div className={cn("space-y-3", className)}>
      {/* Toolbar */}
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 flex-1">
          {/* Search Pill Input */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-smoke pointer-events-none" />
            <input
              type="text"
              value={globalFilter ?? ""}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder={placeholder}
              className="h-8 w-full rounded-full border border-parchment bg-paper pl-8 pr-3 text-[12px] text-ink placeholder:text-smoke focus:border-ink focus:outline-none transition-colors"
            />
          </div>
          {filterSlot}
        </div>

        {toolbarActions && (
          <div className="flex items-center gap-2 shrink-0">
            {toolbarActions}
          </div>
        )}
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-lg border border-parchment bg-paper no-shadow">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="border-b border-parchment bg-sand/30"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.06em] text-smoke select-none"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className={cn(
                      "border-b border-parchment/60 transition-colors last:border-b-0 hover:bg-sand/40",
                      index % 2 === 1 ? "bg-sand/15" : "bg-paper"
                    )}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 py-3 text-[13px] text-ink tracking-[0.02em]"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="h-32 text-center text-xs text-smoke"
                  >
                    {t.common.noResults}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer & Pagination */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between px-4 py-3 border-t border-parchment bg-paper text-xs text-smoke">
          <div className="flex items-center gap-2">
            <span>
              {locale === "tr" ? (
                <>
                  {t.dataTable.showingPrefix}{" "}
                  <strong className="font-medium text-ink">
                    {table.getFilteredRowModel().rows.length}
                  </strong>{" "}
                  {t.dataTable.of}{" "}
                  <strong className="font-medium text-ink">
                    {table.getState().pagination.pageIndex *
                      table.getState().pagination.pageSize +
                      (table.getRowModel().rows.length > 0 ? 1 : 0)}
                    {t.dataTable.to}
                    {Math.min(
                      (table.getState().pagination.pageIndex + 1) *
                        table.getState().pagination.pageSize,
                      table.getFilteredRowModel().rows.length
                    )}
                  </strong>{" "}
                  {t.dataTable.results}
                </>
              ) : (
                <>
                  {t.dataTable.showingPrefix}{" "}
                  <strong className="font-medium text-ink">
                    {table.getState().pagination.pageIndex *
                      table.getState().pagination.pageSize +
                      (table.getRowModel().rows.length > 0 ? 1 : 0)}
                  </strong>{" "}
                  {t.dataTable.to}{" "}
                  <strong className="font-medium text-ink">
                    {Math.min(
                      (table.getState().pagination.pageIndex + 1) *
                        table.getState().pagination.pageSize,
                      table.getFilteredRowModel().rows.length
                    )}
                  </strong>{" "}
                  {t.dataTable.of}{" "}
                  <strong className="font-medium text-ink">
                    {table.getFilteredRowModel().rows.length}
                  </strong>{" "}
                  {t.dataTable.results}
                </>
              )}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-7 px-2.5"
            >
              <ChevronLeft className="h-3.5 w-3.5 mr-1" />
              {t.dataTable.previous}
            </Button>
            <span className="px-2 text-[11px] font-medium text-ink">
              {t.dataTable.page} {table.getState().pagination.pageIndex + 1} / {Math.max(1, table.getPageCount())}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-7 px-2.5"
            >
              {t.dataTable.next}
              <ChevronRight className="h-3.5 w-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
