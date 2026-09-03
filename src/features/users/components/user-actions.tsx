"use client";

import Link from "next/link";
import { MoreHorizontal, ExternalLink, ShieldAlert, Trash2 } from "lucide-react";
import { User } from "@/types/user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserActions({ user }: { user: User }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-sand text-smoke hover:text-ink transition-colors cursor-pointer outline-none">
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">Actions</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem asChild>
          <Link href={`/users/${user.id}`} className="flex items-center gap-2">
            <ExternalLink className="h-3.5 w-3.5 text-smoke" />
            <span>Profili Görüntüle</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert(`Yetki düzenleme: ${user.name}`)}>
          <ShieldAlert className="h-3.5 w-3.5 text-smoke mr-2" />
          Yetkileri Düzenle
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-700 hover:text-red-800"
          onClick={() => alert(`Kullanıcı silindi: ${user.name}`)}
        >
          <Trash2 className="h-3.5 w-3.5 mr-2" />
          Kullanıcıyı Sil
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
