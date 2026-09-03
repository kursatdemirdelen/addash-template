"use client";

import * as React from "react";
import { getMockRoles, getPermissionLabels, type Permission } from "@/lib/mock-data/roles";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { RoleBadge } from "@/components/ui/role-badge";
import { Button } from "@/components/ui/button";
import { Check, Minus, Users, Plus } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function RolesPage() {
  const { t, locale } = useTranslation();
  const roles = React.useMemo(() => getMockRoles(locale), [locale]);
  const pLabels = React.useMemo(() => getPermissionLabels(locale), [locale]);

  const permissionGroups = React.useMemo(() => {
    return Object.entries(pLabels).reduce<
      Record<string, { key: Permission; label: string }[]>
    >((acc, [key, val]) => {
      if (!acc[val.group]) acc[val.group] = [];
      acc[val.group].push({ key: key as Permission, label: val.label });
      return acc;
    }, {});
  }, [pLabels]);

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.roles.title}
        description={t.roles.description}
        action={
          <Button variant="primary" size="sm">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            {t.roles.newRole}
          </Button>
        }
      />

      {/* Role Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {roles.map((role) => (
          <Card key={role.role} className="p-4 space-y-2.5 hover:border-ink/40 transition-colors">
            <div className="flex items-center justify-between">
              <RoleBadge role={role.role} />
              <div className="flex items-center gap-1 text-[11px] text-smoke font-mono">
                <Users className="h-3 w-3" />
                {role.userCount}
              </div>
            </div>
            <p className="text-[11px] text-smoke leading-relaxed line-clamp-2">{role.description}</p>
            <p className="text-[10px] font-mono text-smoke/80 uppercase tracking-wider pt-1">
              {Object.values(role.permissions).filter(Boolean).length} /{" "}
              {Object.values(role.permissions).length} {t.roles.permissionsCount}
            </p>
          </Card>
        ))}
      </div>

      {/* Permission Matrix */}
      <Card className="overflow-hidden">
        <CardHeader>
          <div>
            <CardTitle>{t.roles.matrixTitle}</CardTitle>
          </div>
          <p className="text-[11px] text-smoke font-mono shrink-0">
            {Object.keys(pLabels).length} {t.roles.permissionsCount} · {roles.length} {t.roles.roleLabel}
          </p>
        </CardHeader>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-parchment bg-sand/20">
                <th className="px-5 py-3 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke w-56">
                  {t.roles.permissionName}
                </th>
                {roles.map((role) => (
                  <th
                    key={role.role}
                    className="px-5 py-3 text-center text-[10px] font-medium uppercase tracking-[0.06em] text-smoke"
                  >
                    {role.role}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(permissionGroups).map(([group, perms]) => (
                <React.Fragment key={group}>
                  {/* Group header */}
                  <tr className="border-b border-parchment/60 bg-sand/40">
                    <td
                      colSpan={roles.length + 1}
                      className="px-5 py-2 text-[10px] font-mono uppercase tracking-[0.08em] text-ink font-medium"
                    >
                      {group}
                    </td>
                  </tr>
                  {/* Permissions rows */}
                  {perms.map((perm) => (
                    <tr
                      key={perm.key}
                      className="border-b border-parchment/40 last:border-b-0 hover:bg-sand/20 transition-colors"
                    >
                      <td className="px-5 py-3 text-[12px] font-medium text-ink">
                        {perm.label}
                      </td>
                      {roles.map((role) => {
                        const allowed = role.permissions[perm.key];
                        return (
                          <td key={role.role} className="px-5 py-3 text-center">
                            {allowed ? (
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-moss/10 text-moss mx-auto">
                                <Check className="h-3 w-3 stroke-[2.5]" />
                              </span>
                            ) : (
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full text-smoke/40 mx-auto">
                                <Minus className="h-3 w-3" />
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PageContainer>
  );
}
