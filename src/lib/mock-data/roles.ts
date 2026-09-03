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
  | "api_access";

export interface RolePermissions {
  role: string;
  description: string;
  color: string;
  badgeVariant: "violet" | "sky" | "amber" | "moss" | "smoke";
  userCount: number;
  permissions: Record<Permission, boolean>;
}

export const permissionLabels: Record<Permission, { label: string; group: string }> = {
  view_dashboard:    { label: "View Dashboard",     group: "Overview"    },
  view_analytics:    { label: "View Analytics",     group: "Overview"    },
  manage_users:      { label: "Manage Users",        group: "Team"        },
  invite_members:    { label: "Invite Members",      group: "Team"        },
  create_content:    { label: "Create Content",      group: "Content"     },
  edit_content:      { label: "Edit Content",        group: "Content"     },
  delete_content:    { label: "Delete Content",      group: "Content"     },
  publish_content:   { label: "Publish Content",     group: "Content"     },
  manage_products:   { label: "Manage Products",     group: "Catalog"     },
  view_reports:      { label: "View Reports",        group: "Data"        },
  export_data:       { label: "Export Data",         group: "Data"        },
  manage_roles:      { label: "Manage Roles",        group: "System"      },
  manage_billing:    { label: "Manage Billing",      group: "System"      },
  api_access:        { label: "API Access",          group: "System"      },
};

export const mockRoles: RolePermissions[] = [
  {
    role: "Admin",
    description: "Full access to all features, settings, and billing.",
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
    description: "Manage and publish content, products, and media.",
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
    description: "Read-only access to analytics, trends, and reports.",
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
    description: "Standard collaborator with active workspace access.",
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
    description: "Read-only access to dashboard and status feeds.",
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
];
