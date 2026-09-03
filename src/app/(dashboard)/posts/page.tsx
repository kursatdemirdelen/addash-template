import type { Metadata } from "next";
import { PostsPage } from "@/features/posts/components/posts-page";

export const metadata: Metadata = {
  title: "İçerikler",
  description: "İçerik yönetim sistemi ve yayın listesi.",
};

export default function Page() {
  return <PostsPage />;
}
