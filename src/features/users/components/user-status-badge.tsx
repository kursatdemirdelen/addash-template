"use client";

import { UserStatus } from "@/types/user";
import { Badge, BadgeProps } from "@/components/ui/badge";
import { useTranslation } from "@/hooks/use-translation";

export function UserStatusBadge({ status }: { status: UserStatus }) {
  const { t } = useTranslation();

  const map: Record<
    UserStatus,
    { variant: NonNullable<BadgeProps["variant"]>; label: string }
  > = {
    active: { variant: "moss", label: t.common.active },
    inactive: { variant: "smoke", label: t.common.inactive },
    invited: { variant: "amber", label: t.common.invited },
    suspended: { variant: "rose", label: t.common.suspended },
  };

  const item = map[status] || { variant: "smoke", label: status };

  return (
    <Badge variant={item.variant} dot>
      {item.label}
    </Badge>
  );
}
