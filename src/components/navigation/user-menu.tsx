"use client";

import Link from "next/link";
import { LogOut, Settings, User as UserIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Avatar } from "@/components/ui/avatar";
import { useTranslation } from "@/hooks/use-translation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserMenu() {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2.5 p-1 rounded-full hover:bg-sand/80 transition-colors outline-none cursor-pointer">
        <Avatar
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop&crop=faces&q=80"
          fallback={siteConfig.user.avatar}
          size="sm"
        />
        <div className="hidden text-left md:block pr-1">
          <p className="text-[13px] font-medium leading-none text-ink">
            {siteConfig.user.name}
          </p>
          <p className="text-[11px] text-smoke mt-0.5 leading-none">
            {siteConfig.user.role}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 p-1">
        <div className="px-2 py-1.5 border-b border-parchment/60 mb-1">
          <p className="text-xs font-medium text-ink">{siteConfig.user.name}</p>
          <p className="text-[11px] text-smoke font-mono">{siteConfig.user.email}</p>
        </div>
        <DropdownMenuItem asChild>
          <Link href="/settings/profile" className="flex items-center gap-2">
            <UserIcon className="h-3.5 w-3.5 text-smoke" />
            <span>{t.common.profileDetails}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2">
            <Settings className="h-3.5 w-3.5 text-smoke" />
            <span>{t.common.systemSettings}</span>
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
  );
}
