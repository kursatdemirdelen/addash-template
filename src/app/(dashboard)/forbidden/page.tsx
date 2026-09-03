import { Metadata } from "next";
import { AccessDeniedCard } from "@/components/feedback";

export const metadata: Metadata = {
  title: "403 - Access Forbidden | Addash",
  description: "Restricted area requiring elevated clearance.",
};

export default function ForbiddenPage() {
  return (
    <div className="py-8 sm:py-16">
      <AccessDeniedCard />
    </div>
  );
}
