import { Metadata } from "next";
import { StatesPage } from "@/features/states/components/states-page";

export const metadata: Metadata = {
  title: "System States & Feedback | Addash",
  description: "Exhibition and testing suite for errors, loading skeletons, empty states, and confirmations.",
};

export default function Page() {
  return <StatesPage />;
}
