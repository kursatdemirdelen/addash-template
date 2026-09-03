import { z } from "zod";

export const userFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  role: z.enum(["Admin", "Editor", "Analyst", "Member", "Viewer"]),
  department: z.string().min(2, "Department is required"),
  status: z.enum(["active", "inactive", "invited", "suspended"]).default("active"),
});

export type UserFormValues = z.infer<typeof userFormSchema>;
