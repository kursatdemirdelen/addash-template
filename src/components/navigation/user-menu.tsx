"use client"

import Link from "next/link"
import { LogOut, Settings } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Avatar } from "@/components/ui/avatar"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function UserMenu({ collapsed = false }: { collapsed?: boolean }) {
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "flex w-full items-center gap-2.5 rounded-lg p-1.5 hover:bg-sand/80 transition-colors outline-none cursor-pointer",
          collapsed && "justify-center p-1"
        )}
        aria-label={siteConfig.user.name}
      >
        <Avatar
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop&crop=faces&q=80"
          fallback={siteConfig.user.avatar}
          size="sm"
        />
        {!collapsed && (
          <div className="min-w-0 text-left flex-1 pr-1">
            <p className="text-[13px] font-medium leading-none text-ink truncate">
              {siteConfig.user.name}
            </p>
            <p className="text-[11px] text-smoke mt-0.5 leading-none truncate">
              {siteConfig.user.role}
            </p>
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align={collapsed ? "center" : "start"}
        className="w-56 p-1"
      >
        <div className="px-2 py-1.5 border-b border-parchment/60 mb-1">
          <p className="text-xs font-medium text-ink">{siteConfig.user.name}</p>
          <p className="text-[11px] text-smoke font-mono">{siteConfig.user.email}</p>
        </div>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2">
            <Settings className="h-3.5 w-3.5 text-smoke" />
            <span>{t.nav.settings}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/login" className="flex items-center gap-2 text-red-700 hover:text-red-800">
            <LogOut className="h-3.5 w-3.5" />
            <span>{t.common.signOut}</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
