"use client";

import * as React from "react";
import Link from "next/link";
import { mockPosts } from "@/lib/mock-data/posts";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Plus, Search, BookOpen, Clock } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

export function PostsPage() {
  const { t, locale } = useTranslation();
  const [activeTab, setActiveTab] = React.useState<"All" | "Published" | "Draft" | "Scheduled">("All");
  const [search, setSearch] = React.useState("");

  const statusTabs = [
    { key: "All" as const, label: t.common.all },
    { key: "Published" as const, label: t.common.published },
    { key: "Draft" as const, label: t.common.draft },
    { key: "Scheduled" as const, label: t.common.scheduled },
  ];

  const filtered = React.useMemo(() => {
    return mockPosts.filter((p) => {
      const matchesTab = activeTab === "All" || p.status === activeTab;
      const matchesSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.author.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, search]);

  const counts = React.useMemo(() => ({
    All: mockPosts.length,
    Published: mockPosts.filter((p) => p.status === "Published").length,
    Draft: mockPosts.filter((p) => p.status === "Draft").length,
    Scheduled: mockPosts.filter((p) => p.status === "Scheduled").length,
  }), []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Published":
        return <Badge variant="moss" dot>{t.common.published}</Badge>;
      case "Draft":
        return <Badge variant="sand">{t.common.draft}</Badge>;
      case "Scheduled":
        return <Badge variant="sky" dot>{t.common.scheduled}</Badge>;
      default:
        return <Badge variant="smoke">{status}</Badge>;
    }
  };

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.posts.title}
        description={t.posts.description}
        action={
          <Button variant="primary" size="sm">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            {t.posts.newPost}
          </Button>
        }
      />

      {/* Filter + Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Status Tabs */}
        <div className="inline-flex items-center rounded-full bg-sand p-1 border border-parchment/60 select-none">
          {statusTabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium transition-all cursor-pointer",
                activeTab === tab.key
                  ? "bg-paper text-ink border border-parchment/40"
                  : "text-smoke hover:text-ink"
              )}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] font-mono opacity-70">
                {counts[tab.key]}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-smoke pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.posts.searchPlaceholder}
            className="h-8 w-full rounded-full border border-parchment bg-paper pl-8 pr-3 text-[12px] text-ink placeholder:text-smoke focus:outline-none focus:border-ink"
          />
        </div>
      </div>

      {/* Posts Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-parchment bg-sand/20">
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.posts.columns.title}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden sm:table-cell">{t.posts.columns.author}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden md:table-cell">{t.posts.columns.category}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.posts.columns.status}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden lg:table-cell">{t.posts.columns.length}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.posts.columns.published}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-parchment/50 last:border-b-0 hover:bg-sand/20 transition-colors"
                >
                  <td className="px-5 py-3.5 max-w-xs">
                    <p className="font-medium text-[13px] text-ink truncate hover:text-smoke transition-colors cursor-pointer">
                      {post.title}
                    </p>
                    <p className="text-[11px] text-smoke truncate font-mono mt-0.5">
                      /{post.slug}
                    </p>
                  </td>
                  <td className="px-5 py-3.5 hidden sm:table-cell">
                    <div className="flex items-center gap-2">
                      <Avatar
                        src={post.author.avatarUrl}
                        fallback={post.author.initials}
                        size="sm"
                      />
                      <span className="text-[12px] text-ink whitespace-nowrap">{post.author.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 hidden md:table-cell">
                    <span className="text-[11px] font-mono text-smoke bg-sand/60 px-2 py-0.5 rounded border border-parchment/40">
                      {post.category}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    {getStatusBadge(post.status)}
                  </td>
                  <td className="px-5 py-3.5 hidden lg:table-cell font-mono text-[11px] text-smoke">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {post.wordCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 font-mono text-[11px] text-smoke whitespace-nowrap">
                    {post.publishedAt ?? (locale === "tr" ? "Yayınlanmadı" : "Unpublished")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-xs text-smoke font-mono">
            {t.posts.empty}
          </div>
        )}
      </Card>
    </PageContainer>
  );
}
