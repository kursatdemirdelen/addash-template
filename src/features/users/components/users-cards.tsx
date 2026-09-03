"use client"

import { Search } from "lucide-react"
import { User } from "@/types/user"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { RoleBadge } from "@/components/ui/role-badge"
import { UserStatusBadge } from "./user-status-badge"
import { UserActions } from "./user-actions"
import { useTranslation } from "@/hooks/use-translation"

type UsersCardsProps = {
  users: User[]
  onSelect: (user: User) => void
}

export function UsersCards({ users, onSelect }: UsersCardsProps) {
  const { t } = useTranslation()

  if (users.length === 0) {
    return (
      <Card className="p-8 text-center">
        <p className="text-xs text-smoke">{t.common.noResults}</p>
      </Card>
    )
  }

  return (
    <div className="space-y-2">
      {users.map((user) => (
        <Card key={user.id} className="p-3">
          <div className="flex items-start gap-3">
            <button
              type="button"
              className="flex flex-1 min-w-0 items-start gap-3 text-left cursor-pointer"
              onClick={() => onSelect(user)}
            >
              <Avatar
                src={user.avatarUrl}
                fallback={user.name.charAt(0)}
                size="sm"
                className="shrink-0"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium text-ink truncate">{user.name}</p>
                <p className="text-[11px] text-smoke truncate mt-0.5">{user.email}</p>
                <div className="flex flex-wrap items-center gap-1.5 mt-2">
                  <RoleBadge role={user.role} />
                  <UserStatusBadge status={user.status} />
                </div>
                <p className="text-[11px] text-smoke mt-2">{user.department}</p>
              </div>
            </button>
            <div
              className="shrink-0"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <UserActions user={user} onView={onSelect} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

type UsersToolbarProps = {
  search: string
  onSearchChange: (value: string) => void
  statusFilter: string
  onStatusFilterChange: (value: string) => void
}

export function UsersToolbar({
  search,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: UsersToolbarProps) {
  const { t } = useTranslation()

  const statusOptions = [
    { key: "all", label: t.common.all },
    { key: "active", label: t.common.active },
    { key: "invited", label: t.common.invited },
    { key: "suspended", label: t.common.suspended },
  ]

  return (
    <div className="space-y-3">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-smoke pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t.team.searchPlaceholder}
          className="h-8 w-full rounded-full border border-parchment bg-paper pl-8 pr-3 text-[12px] text-ink placeholder:text-smoke focus:border-ink focus:outline-none transition-colors"
        />
      </div>

      <div className="flex items-center gap-1 bg-sand/60 p-0.5 rounded-full border border-parchment/60 overflow-x-auto">
        {statusOptions.map((st) => (
          <button
            key={st.key}
            type="button"
            onClick={() => onStatusFilterChange(st.key)}
            className={`px-2.5 py-0.5 text-[11px] rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
              statusFilter === st.key
                ? "bg-paper text-ink font-medium border border-parchment/60"
                : "text-smoke hover:text-ink"
            }`}
          >
            {st.label}
          </button>
        ))}
      </div>
    </div>
  )
}
