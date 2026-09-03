"use client";

import * as React from "react";
import { mockFiles, type FileItem } from "@/lib/mock-data/files";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  UploadCloud,
  FileText,
  Image as ImageIcon,
  Video,
  FileSpreadsheet,
  Folder,
  Archive,
  Code2,
  File,
  LayoutGrid,
  List,
  Search,
  MoreVertical,
  Download,
  Share2,
  Trash2,
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";

function getFileIcon(type: FileItem["type"]) {
  const base = "h-5 w-5 shrink-0";
  switch (type) {
    case "folder":
      return <Folder className={cn(base, "text-amber fill-amber/20")} />;
    case "pdf":
      return <FileText className={cn(base, "text-rose")} />;
    case "image":
      return <ImageIcon className={cn(base, "text-sky")} />;
    case "video":
      return <Video className={cn(base, "text-violet")} />;
    case "spreadsheet":
      return <FileSpreadsheet className={cn(base, "text-moss")} />;
    case "archive":
      return <Archive className={cn(base, "text-smoke")} />;
    case "code":
      return <Code2 className={cn(base, "text-ink")} />;
    default:
      return <File className={cn(base, "text-smoke")} />;
  }
}

export function FilesPage() {
  const { t } = useTranslation();
  const [activeTabKey, setActiveTabKey] = React.useState<"all" | "documents" | "media" | "archives">("all");
  const [viewMode, setViewMode] = React.useState<"list" | "grid">("list");
  const [search, setSearch] = React.useState("");

  const tabs = [
    { key: "all" as const, label: t.files.tabs.all },
    { key: "documents" as const, label: t.files.tabs.documents },
    { key: "media" as const, label: t.files.tabs.media },
    { key: "archives" as const, label: t.files.tabs.archives },
  ];

  const filtered = React.useMemo(() => {
    return mockFiles.filter((f) => {
      const matchSearch = f.name.toLowerCase().includes(search.toLowerCase());
      if (!matchSearch) return false;
      if (activeTabKey === "all") return true;
      if (activeTabKey === "documents") return ["pdf", "spreadsheet", "code"].includes(f.type);
      if (activeTabKey === "media") return ["image", "video"].includes(f.type);
      if (activeTabKey === "archives") return ["archive", "folder"].includes(f.type);
      return true;
    });
  }, [search, activeTabKey]);

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.files.title}
        description={t.files.description}
        action={
          <Button variant="primary" size="sm">
            <UploadCloud className="h-3.5 w-3.5 mr-1.5" />
            {t.files.upload}
          </Button>
        }
      />

      {/* Storage quota strip */}
      <Card className="p-4 bg-sand/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-ink">{t.files.cloudStorage}</span>
              <span className="text-[11px] font-mono text-smoke">18.4 GB / 50 GB {t.files.storageUsage} (36%)</span>
            </div>
            <div className="h-1.5 w-64 sm:w-80 rounded-full bg-sand overflow-hidden">
              <div className="h-full rounded-full bg-ink" style={{ width: "36%" }} />
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono text-smoke">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-sky" /> Docs 8.2 GB
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-violet" /> Media 7.8 GB
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-parchment border border-smoke/40" /> Other 2.4 GB
            </span>
          </div>
        </div>
      </Card>

      {/* Controls toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        {/* Tabs */}
        <div className="inline-flex items-center rounded-full bg-sand p-1 border border-parchment/60 select-none">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTabKey(tab.key)}
              className={cn(
                "rounded-full px-3 py-1 text-[12px] font-medium transition-all cursor-pointer",
                activeTabKey === tab.key
                  ? "bg-paper text-ink border border-parchment/40"
                  : "text-smoke hover:text-ink"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search & View toggle */}
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-smoke pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.files.searchPlaceholder}
              className="h-8 w-full rounded-full border border-parchment bg-paper pl-8 pr-3 text-[12px] text-ink placeholder:text-smoke focus:outline-none focus:border-ink"
            />
          </div>

          <div className="flex items-center rounded-full border border-parchment bg-paper p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={cn(
                "p-1.5 rounded-full transition-colors cursor-pointer",
                viewMode === "list" ? "bg-sand text-ink" : "text-smoke hover:text-ink"
              )}
              title="List view"
            >
              <List className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-1.5 rounded-full transition-colors cursor-pointer",
                viewMode === "grid" ? "bg-sand text-ink" : "text-smoke hover:text-ink"
              )}
              title="Grid view"
            >
              <LayoutGrid className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === "list" ? (
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-parchment bg-sand/20">
                  <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.files.columns.name}</th>
                  <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.files.columns.size}</th>
                  <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden md:table-cell">{t.files.columns.modifiedBy}</th>
                  <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.files.columns.lastUpdated}</th>
                  <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke text-right">{t.files.columns.actions}</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((file) => (
                  <tr
                    key={file.id}
                    className="border-b border-parchment/50 last:border-b-0 hover:bg-sand/20 transition-colors"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {getFileIcon(file.type)}
                        <div className="min-w-0">
                          <p className="font-medium text-[13px] text-ink truncate">{file.name}</p>
                          <div className="flex items-center gap-2 text-[10px] font-mono text-smoke">
                            <span className="uppercase">{file.type}</span>
                            {file.shared && <span className="text-moss">{t.files.shared}</span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 font-mono text-[12px] text-smoke">{file.size}</td>
                    <td className="px-5 py-3 text-[12px] text-ink hidden md:table-cell">{file.modifiedBy}</td>
                    <td className="px-5 py-3 font-mono text-[11px] text-smoke">{file.modifiedAt}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button type="button" className="p-1 rounded text-smoke hover:text-ink transition-colors cursor-pointer" title="Download">
                          <Download className="h-3.5 w-3.5" />
                        </button>
                        <button type="button" className="p-1 rounded text-smoke hover:text-ink transition-colors cursor-pointer" title="Share">
                          <Share2 className="h-3.5 w-3.5" />
                        </button>
                        <button type="button" className="p-1 rounded text-smoke hover:text-rose transition-colors cursor-pointer" title="Delete">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        /* Grid Mode */
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((file) => (
            <Card
              key={file.id}
              className="p-4 space-y-3 hover:border-ink/40 transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-lg bg-sand/60 flex items-center justify-center border border-parchment/60">
                  {getFileIcon(file.type)}
                </div>
                <button
                  type="button"
                  className="p-1 text-smoke opacity-0 group-hover:opacity-100 hover:text-ink transition-all cursor-pointer"
                >
                  <MoreVertical className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="space-y-0.5 min-w-0">
                <p className="text-[12px] font-medium text-ink truncate" title={file.name}>
                  {file.name}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-smoke">
                  <span>{file.size}</span>
                  <span>{file.modifiedAt}</span>
                </div>
              </div>

              {file.shared && (
                <div className="pt-1 border-t border-parchment/40">
                  <span className="text-[10px] text-moss font-mono">{t.files.shared}</span>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </PageContainer>
  );
}
