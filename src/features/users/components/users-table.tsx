"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { User } from "@/types/user"
import { DataTable } from "@/components/data-display/data-table"
import { UserStatusBadge } from "./user-status-badge"
import { UserActions } from "./user-actions"
import { Avatar } from "@/components/ui/avatar"
import { RoleBadge } from "@/components/ui/role-badge"
import { UserDetailDrawer } from "./user-detail"
import { UsersCards, UsersToolbar } from "./users-cards"
import { getMockUsers } from "@/lib/mock-data/users"
import { useTranslation } from "@/hooks/use-translation"

const filterUsers = (users: User[], search: string) => {
  if (!search.trim()) return users

  const query = search.toLowerCase()
  return users.filter(
    (user) =>
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query) ||
      user.department.toLowerCase().includes(query)
  )
}

export function UsersTable({ initialUsers }: { initialUsers?: User[] }) {
  const { t, locale } = useTranslation()
  const rawUsers = React.useMemo(() => initialUsers ?? getMockUsers(locale), [initialUsers, locale])
  const [statusFilter, setStatusFilter] = React.useState<string>("all")
  const [search, setSearch] = React.useState("")
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null)

  const statusFiltered = React.useMemo(() => {
    if (statusFilter === "all") return rawUsers
    return rawUsers.filter((user) => user.status === statusFilter)
  }, [rawUsers, statusFilter])

  const mobileFiltered = React.useMemo(
    () => filterUsers(statusFiltered, search),
    [statusFiltered, search]
  )

  const columns = React.useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "name",
        meta: { className: "min-w-0" },
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
          const user = row.original
          return (
            <button
              type="button"
              className="flex items-center gap-3 text-left cursor-pointer group w-full min-w-0"
              onClick={() => setSelectedUser(user)}
            >
              <Avatar
                src={user.avatarUrl}
                fallback={user.name.charAt(0)}
                size="sm"
              />
              <div className="min-w-0">
                <span className="font-medium text-ink group-hover:underline block truncate leading-tight">
                  {user.name}
                </span>
                <span className="text-[11px] text-smoke block truncate mt-0.5">
                  {user.email}
                </span>
              </div>
            </button>
          )
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
        meta: { className: "hidden lg:table-cell" },
        cell: ({ row }) => (
          <span className="text-[12px] text-smoke">
            {row.getValue("lastActive")}
          </span>
        ),
      },
      {
        id: "actions",
        header: "",
        meta: { className: "w-10 px-2" },
        cell: ({ row }) => (
          <div className="flex justify-end">
            <UserActions user={row.original} onView={setSelectedUser} />
          </div>
        ),
      },
    ],
    [t]
  )

  const statusOptions = [
    { key: "all", label: t.common.all },
    { key: "active", label: t.common.active },
    { key: "invited", label: t.common.invited },
    { key: "suspended", label: t.common.suspended },
  ]

  return (
    <>
      {/* mobil: kart listesi */}
      <div className="md:hidden space-y-3">
        <UsersToolbar
          search={search}
          onSearchChange={setSearch}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
        />
        <UsersCards users={mobileFiltered} onSelect={setSelectedUser} />
      </div>

      {/* masaustu: tablo */}
      <div className="hidden md:block">
        <DataTable
          columns={columns}
          data={statusFiltered}
          searchPlaceholder={t.team.searchPlaceholder}
          filterSlot={
            <div className="flex items-center gap-1 bg-sand/60 p-0.5 rounded-full border border-parchment/60">
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
      </div>

      <UserDetailDrawer
        user={selectedUser}
        open={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </>
  )
}
