export type UserRole = "Admin" | "Editor" | "Analyst" | "Member" | "Viewer";
export type UserStatus = "active" | "inactive" | "invited" | "suspended";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
  department: string;
  createdAt: string;
  lastActive: string;
}
