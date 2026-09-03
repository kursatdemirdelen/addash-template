import { BadgeProps } from "@/components/ui/badge";

export type RoleName = "Admin" | "Editor" | "Analyst" | "Member" | "Viewer";

export interface RoleConfigItem {
  name: RoleName;
  label: string;
  description: string;
  badgeVariant: NonNullable<BadgeProps["variant"]>;
  colorClass: string;
  badgeClass: string;
}

export const ROLE_CONFIG: Record<string, RoleConfigItem> = {
  Admin: {
    name: "Admin",
    label: "Admin",
    description: "Full administrative clearance across systems, permissions, and billing.",
    badgeVariant: "violet",
    colorClass: "bg-violet/15 text-violet border-violet/30",
    badgeClass: "bg-violet/10 text-violet border-violet/30",
  },
  Editor: {
    name: "Editor",
    label: "Editor",
    description: "Create, edit, and publish content, catalog products, and communications.",
    badgeVariant: "sky",
    colorClass: "bg-sky/15 text-sky border-sky/30",
    badgeClass: "bg-sky/10 text-sky border-sky/30",
  },
  Analyst: {
    name: "Analyst",
    label: "Analyst",
    description: "Read-only access to metrics, financial data, and reporting exports.",
    badgeVariant: "amber",
    colorClass: "bg-amber/15 text-amber border-amber/30",
    badgeClass: "bg-amber/10 text-amber border-amber/30",
  },
  Member: {
    name: "Member",
    label: "Member",
    description: "Standard team member with collaborative workspace and task access.",
    badgeVariant: "moss",
    colorClass: "bg-moss/15 text-moss border-moss/30",
    badgeClass: "bg-moss/10 text-moss border-moss/30",
  },
  Viewer: {
    name: "Viewer",
    label: "Viewer",
    description: "Read-only clearance for workspace dashboards and general status feeds.",
    badgeVariant: "smoke",
    colorClass: "bg-slate-500/15 text-slate-500 border-slate-500/30",
    badgeClass: "bg-slate-500/10 text-slate-500 border-slate-500/25",
  },
};

export function getRoleConfig(roleName: string): RoleConfigItem {
  // Normalize variations like "Administrator" -> "Admin"
  const normalized = roleName.toLowerCase();
  if (normalized.includes("admin")) return ROLE_CONFIG.Admin;
  if (normalized.includes("edit")) return ROLE_CONFIG.Editor;
  if (normalized.includes("analy")) return ROLE_CONFIG.Analyst;
  if (normalized.includes("member") || normalized.includes("dev") || normalized.includes("design")) return ROLE_CONFIG.Member;
  if (normalized.includes("view")) return ROLE_CONFIG.Viewer;

  return (
    ROLE_CONFIG[roleName] || {
      name: "Member" as RoleName,
      label: roleName,
      description: "Standard workspace participant.",
      badgeVariant: "smoke",
      colorClass: "bg-sand text-smoke border-parchment",
      badgeClass: "bg-sand text-smoke border-parchment",
    }
  );
}
