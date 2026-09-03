import { LucideIcon } from "lucide-react";

export interface NavItemConfig {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
  exact?: boolean;
}

export interface NavSectionConfig {
  label: string;
  items: NavItemConfig[];
}
