"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"
import { Shield, Calendar, Clock, Building2, X } from "lucide-react"
import { User } from "@/types/user"
import { Avatar } from "@/components/ui/avatar"
import { RoleBadge } from "@/components/ui/role-badge"
import { UserStatusBadge } from "./user-status-badge"
import { useTranslation } from "@/hooks/use-translation"

type UserDetailDrawerProps = {
  user: User | null
  open: boolean
  onClose: () => void
}

export function UserDetailDrawer({ user, open, onClose }: UserDetailDrawerProps) {
  const { t } = useTranslation()

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [open, onClose])

  if (!open || !user) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-ink/30 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden
      />

      <div
        className="relative z-10 w-full sm:max-w-sm bg-paper border border-parchment rounded-t-2xl sm:rounded-xl shadow-lg"
        role="dialog"
        aria-label={user.name}
      >
        <div className="flex justify-center pt-2 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-parchment" />
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-b border-parchment/60">
          <h2 className="text-sm font-medium text-ink">{t.team.detail.accountDetails}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-smoke hover:text-ink transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-5 py-4">
          <div className="flex items-center gap-3 pb-4 border-b border-parchment/40">
            <Avatar
              src={user.avatarUrl}
              fallback={user.name.charAt(0)}
              size="lg"
              className="h-12 w-12 text-base shrink-0"
            />
            <div className="min-w-0">
              <h3 className="text-sm font-medium text-ink truncate">{user.name}</h3>
              <p className="text-[12px] text-smoke truncate">{user.email}</p>
              <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                <RoleBadge role={user.role} />
                <UserStatusBadge status={user.status} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <DetailField
              icon={<Shield className="h-3 w-3" />}
              label={t.team.detail.assignedRole}
              value={user.role}
            />
            <DetailField
              icon={<Building2 className="h-3 w-3" />}
              label={t.team.detail.department}
              value={user.department}
            />
            <DetailField
              icon={<Calendar className="h-3 w-3" />}
              label={t.team.detail.joinedDate}
              value={user.createdAt}
            />
            <DetailField
              icon={<Clock className="h-3 w-3" />}
              label={t.team.detail.lastActive}
              value={user.lastActive}
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

function DetailField({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="space-y-0.5">
      <span className="text-[11px] uppercase tracking-wide text-smoke flex items-center gap-1">
        {icon}
        {label}
      </span>
      <p className="text-[13px] font-medium text-ink">{value}</p>
    </div>
  )
}
