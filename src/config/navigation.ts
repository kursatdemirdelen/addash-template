import {
  LayoutDashboard,
  ChartNoAxesCombined,
  CheckSquare,
  MessageSquare,
  FolderOpen,
  Layers,
  FileText,
  Package,
  Building2,
  Users,
  ShieldCheck,
  Bell,
  Settings,
} from "lucide-react";
import { NavSectionConfig } from "@/types/navigation";
import { Dictionary } from "@/locales/types";
import { en } from "@/locales/en";

export function getNavigationConfig(t: Dictionary): NavSectionConfig[] {
  return [
    {
      label: t.nav.overview,
      items: [
        { title: t.nav.dashboard, href: "/dashboard", icon: LayoutDashboard },
        { title: t.nav.analytics, href: "/analytics", icon: ChartNoAxesCombined },
      ],
    },
    {
      label: t.nav.workspace,
      items: [
        { title: t.nav.tasks, href: "/tasks", icon: CheckSquare },
        { title: t.nav.messages, href: "/messages", icon: MessageSquare, badge: "2" },
        { title: t.nav.files, href: "/files", icon: FolderOpen },
        { title: t.nav.states, href: "/states", icon: Layers },
      ],
    },
    {
      label: t.nav.operations,
      items: [
        { title: t.nav.posts, href: "/posts", icon: FileText },
        { title: t.nav.products, href: "/products", icon: Package },
        { title: t.nav.customers, href: "/customers", icon: Building2 },
      ],
    },
    {
      label: t.nav.administration,
      items: [
        { title: t.nav.team, href: "/users", icon: Users },
        { title: t.nav.roles, href: "/roles", icon: ShieldCheck },
        { title: t.nav.notifications, href: "/notifications", icon: Bell, badge: "3" },
        { title: t.nav.settings, href: "/settings", icon: Settings },
      ],
    },
  ];
}

export const navigationConfig: NavSectionConfig[] = getNavigationConfig(en);
