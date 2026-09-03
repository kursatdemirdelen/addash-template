import { Metadata } from "next";
import { SuccessState } from "@/components/feedback";

export const metadata: Metadata = {
  title: "Operation Confirmed | Addash",
  description: "Operation completed successfully.",
};

export default function SuccessPage() {
  return (
    <div className="py-8 sm:py-16">
      <SuccessState />
    </div>
  );
}
