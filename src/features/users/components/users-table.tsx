"use client";

import * as React from "react";
import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { User } from "@/types/user";
import { DataTable } from "@/components/data-display/data-table";
import { UserStatusBadge } from "./user-status-badge";
import { UserActions } from "./user-actions";
import { Avatar } from "@/components/ui/avatar";
import { RoleBadge } from "@/components/ui/role-badge";
import { getMockUsers } from "@/lib/mock-data/users";
import { useTranslation } from "@/hooks/use-translation";

export function UsersTable({ initialUsers }: { initialUsers?: User[] }) {
  const { t, locale } = useTranslation();
  const rawUsers = React.useMemo(() => initialUsers ?? getMockUsers(locale), [initialUsers, locale]);
  const [statusFilter, setStatusFilter] = React.useState<string>("all");

  const filteredData = React.useMemo(() => {
    if (statusFilter === "all") return rawUsers;
    return rawUsers.filter((u) => u.status === statusFilter);
  }, [rawUsers, statusFilter]);

  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "name",
        header: ({ column }) => (
          <button
            type="button"
            className="flex items-center gap-1 hover:text-ink cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <span>{t.team.columns.user}</span>
            <ArrowUpDown className="h-3 w-3" />
          </button>
        ),
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="flex items-center gap-3">
              <Avatar
                src={user.avatarUrl}
                fallback={user.name.charAt(0)}
                size="sm"
              />
              <div className="min-w-0">
                <Link
                  href={`/users/${user.id}`}
                  className="font-medium text-ink hover:underline block truncate leading-tight"
                >
                  {user.name}
                </Link>
                <span className="text-[11px] text-smoke block truncate mt-0.5">
                  {user.email}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "role",
        header: t.team.columns.role,
        cell: ({ row }) => (
          <RoleBadge role={row.getValue("role") as string} />
        ),
      },
      {
        accessorKey: "department",
        header: t.team.columns.department,
        cell: ({ row }) => (
          <span className="text-[12px] text-smoke">
            {row.getValue("department")}
          </span>
        ),
      },
      {
        accessorKey: "status",
        header: t.team.columns.status,
        cell: ({ row }) => (
          <UserStatusBadge status={row.original.status} />
        ),
      },
      {
        accessorKey: "lastActive",
        header: t.team.detail.lastActive,
        cell: ({ row }) => (
          <span className="text-[12px] text-smoke">
            {row.getValue("lastActive")}
          </span>
        ),
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <UserActions user={row.original} />
          </div>
        ),
      },
    ],
    [t]
  );

  const statusOptions = [
    { key: "all", label: t.common.all },
    { key: "active", label: t.common.active },
    { key: "invited", label: t.common.invited },
    { key: "suspended", label: t.common.suspended },
  ];

  return (
    <DataTable
      columns={columns}
      data={filteredData}
      searchPlaceholder={t.team.searchPlaceholder}
      filterSlot={
        <div className="hidden sm:flex items-center gap-1 bg-sand/60 p-0.5 rounded-full border border-parchment/60">
          {statusOptions.map((st) => (
            <button
              key={st.key}
              type="button"
              onClick={() => setStatusFilter(st.key)}
              className={`px-2.5 py-0.5 text-[11px] rounded-full transition-colors cursor-pointer ${
                statusFilter === st.key
                  ? "bg-paper text-ink font-medium border border-parchment/60"
                  : "text-smoke hover:text-ink"
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      }
    />
  );
}
