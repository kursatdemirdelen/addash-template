import { Locale } from "@/locales/types"

export type Permission =
  | "view_dashboard"
  | "view_analytics"
  | "manage_users"
  | "invite_members"
  | "create_content"
  | "edit_content"
  | "delete_content"
  | "publish_content"
  | "manage_products"
  | "view_reports"
  | "export_data"
  | "manage_roles"
  | "manage_billing"
  | "api_access"

export interface RolePermissions {
  role: string
  description: string
  color: string
  badgeVariant: "violet" | "sky" | "amber" | "moss" | "smoke"
  userCount: number
  permissions: Record<Permission, boolean>
}

export const permissionLabelsTr: Record<Permission, { label: string; group: string }> = {
  view_dashboard:    { label: "Dashboard'u Görüntüle",   group: "Genel Bakış" },
  view_analytics:    { label: "Analitiği Görüntüle",     group: "Genel Bakış" },
  manage_users:      { label: "Kullanıcıları Yönet",     group: "Ekip"        },
  invite_members:    { label: "Üye Davet Et",            group: "Ekip"        },
  create_content:    { label: "İçerik Oluştur",          group: "İçerik"      },
  edit_content:      { label: "İçerik Düzenle",          group: "İçerik"      },
  delete_content:    { label: "İçerik Sil",              group: "İçerik"      },
  publish_content:   { label: "İçerik Yayınla",          group: "İçerik"      },
  manage_products:   { label: "Ürünleri Yönet",          group: "Katalog"     },
  view_reports:      { label: "Raporları Gör",           group: "Veri"        },
  export_data:       { label: "Veri Dışa Aktar",         group: "Veri"        },
  manage_roles:      { label: "Rolleri Yönet",           group: "Sistem"      },
  manage_billing:    { label: "Faturaları Yönet",        group: "Sistem"      },
  api_access:        { label: "API Erişimi",             group: "Sistem"      },
}

export const permissionLabelsEn: Record<Permission, { label: string; group: string }> = {
  view_dashboard:    { label: "View Dashboard",     group: "Overview" },
  view_analytics:    { label: "View Analytics",     group: "Overview" },
  manage_users:      { label: "Manage Users",       group: "Team"     },
  invite_members:    { label: "Invite Members",     group: "Team"     },
  create_content:    { label: "Create Content",     group: "Content"  },
  edit_content:      { label: "Edit Content",       group: "Content"  },
  delete_content:    { label: "Delete Content",     group: "Content"  },
  publish_content:   { label: "Publish Content",    group: "Content"  },
  manage_products:   { label: "Manage Products",    group: "Catalog"  },
  view_reports:      { label: "View Reports",       group: "Data"     },
  export_data:       { label: "Export Data",        group: "Data"     },
  manage_roles:      { label: "Manage Roles",       group: "System"   },
  manage_billing:    { label: "Manage Billing",     group: "System"   },
  api_access:        { label: "API Access",         group: "System"   },
}

export const mockRolesTr: RolePermissions[] = [
  {
    role: "Admin",
    description: "Her şeye tam erişim. Ayarlar ve faturalar dahil.",
    color: "bg-violet/15 text-violet border border-violet/30",
    badgeVariant: "violet",
    userCount: 2,
    permissions: {
      view_dashboard: true,  view_analytics: true,  manage_users: true,
      invite_members: true,  create_content: true,  edit_content: true,
      delete_content: true,  publish_content: true, manage_products: true,
      view_reports:   true,  export_data:    true,  manage_roles: true,
      manage_billing: true,  api_access:     true,
    },
  },
  {
    role: "Editor",
    description: "İçerik ve ürün yönetimi yapabilir, yayınlayabilir.",
    color: "bg-sky/15 text-sky border border-sky/30",
    badgeVariant: "sky",
    userCount: 5,
    permissions: {
      view_dashboard: true,  view_analytics: true,  manage_users: false,
      invite_members: false, create_content: true,  edit_content: true,
      delete_content: false, publish_content: true, manage_products: true,
      view_reports:   true,  export_data:    false, manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
  {
    role: "Analyst",
    description: "Analitik ve raporlara bakabilir, veri export edebilir.",
    color: "bg-amber/15 text-amber border border-amber/30",
    badgeVariant: "amber",
    userCount: 3,
    permissions: {
      view_dashboard: true,  view_analytics: true,  manage_users: false,
      invite_members: false, create_content: false, edit_content: false,
      delete_content: false, publish_content: false, manage_products: false,
      view_reports:   true,  export_data:    true,  manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
  {
    role: "Member",
    description: "İçerik oluşturup düzenleyebilir, sadece kendi alanında.",
    color: "bg-moss/15 text-moss border border-moss/30",
    badgeVariant: "moss",
    userCount: 8,
    permissions: {
      view_dashboard: true,  view_analytics: false, manage_users: false,
      invite_members: false, create_content: true,  edit_content: true,
      delete_content: false, publish_content: false, manage_products: false,
      view_reports:   false, export_data:    false, manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
  {
    role: "Viewer",
    description: "Sadece dashboard'u görebilir, değişiklik yapamaz.",
    color: "bg-sand text-smoke border border-parchment",
    badgeVariant: "smoke",
    userCount: 12,
    permissions: {
      view_dashboard: true,  view_analytics: false, manage_users: false,
      invite_members: false, create_content: false, edit_content: false,
      delete_content: false, publish_content: false, manage_products: false,
      view_reports:   false, export_data:    false, manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
]

export const mockRolesEn: RolePermissions[] = [
  {
    role: "Admin",
    description: "Full access to everything including settings and billing.",
    color: "bg-violet/15 text-violet border border-violet/30",
    badgeVariant: "violet",
    userCount: 2,
    permissions: {
      view_dashboard: true,  view_analytics: true,  manage_users: true,
      invite_members: true,  create_content: true,  edit_content: true,
      delete_content: true,  publish_content: true, manage_products: true,
      view_reports:   true,  export_data:    true,  manage_roles: true,
      manage_billing: true,  api_access:     true,
    },
  },
  {
    role: "Editor",
    description: "Can manage and publish content, products and media.",
    color: "bg-sky/15 text-sky border border-sky/30",
    badgeVariant: "sky",
    userCount: 5,
    permissions: {
      view_dashboard: true,  view_analytics: true,  manage_users: false,
      invite_members: false, create_content: true,  edit_content: true,
      delete_content: false, publish_content: true, manage_products: true,
      view_reports:   true,  export_data:    false, manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
  {
    role: "Analyst",
    description: "Can view analytics, reports and export data.",
    color: "bg-amber/15 text-amber border border-amber/30",
    badgeVariant: "amber",
    userCount: 3,
    permissions: {
      view_dashboard: true,  view_analytics: true,  manage_users: false,
      invite_members: false, create_content: false, edit_content: false,
      delete_content: false, publish_content: false, manage_products: false,
      view_reports:   true,  export_data:    true,  manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
  {
    role: "Member",
    description: "Can create and edit content within their workspace.",
    color: "bg-moss/15 text-moss border border-moss/30",
    badgeVariant: "moss",
    userCount: 8,
    permissions: {
      view_dashboard: true,  view_analytics: false, manage_users: false,
      invite_members: false, create_content: true,  edit_content: true,
      delete_content: false, publish_content: false, manage_products: false,
      view_reports:   false, export_data:    false, manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
  {
    role: "Viewer",
    description: "Read-only access to the dashboard. No changes allowed.",
    color: "bg-sand text-smoke border border-parchment",
    badgeVariant: "smoke",
    userCount: 12,
    permissions: {
      view_dashboard: true,  view_analytics: false, manage_users: false,
      invite_members: false, create_content: false, edit_content: false,
      delete_content: false, publish_content: false, manage_products: false,
      view_reports:   false, export_data:    false, manage_roles: false,
      manage_billing: false, api_access:     false,
    },
  },
]

export function getMockRoles(locale: Locale = "tr"): RolePermissions[] {
  return locale === "en" ? mockRolesEn : mockRolesTr
}

export function getPermissionLabels(locale: Locale = "tr"): Record<Permission, { label: string; group: string }> {
  return locale === "en" ? permissionLabelsEn : permissionLabelsTr
}

export const mockRoles = mockRolesTr
export const permissionLabels = permissionLabelsTr
