"use client";

import * as React from "react";
import Image from "next/image";
import { Package } from "lucide-react";
import { getMockProducts } from "@/lib/mock-data/products";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { formatCurrency, cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

function ProductImage({ url, name }: { url?: string; name: string }) {
  const [error, setError] = React.useState(false);
  if (!url || error) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-parchment bg-sand shrink-0">
        <Package className="h-4 w-4 text-smoke" />
      </div>
    );
  }
  return (
    <div className="relative h-10 w-10 overflow-hidden rounded-md border border-parchment shrink-0">
      <Image src={url} alt={name} fill className="object-cover" onError={() => setError(true)} />
    </div>
  );
}

export function ProductsPage() {
  const { t, locale } = useTranslation();
  const products = React.useMemo(() => getMockProducts(locale), [locale]);
  const [activeTab, setActiveTab] = React.useState<"All" | "In Stock" | "Low Stock" | "Out of Stock">("All");
  const [search, setSearch] = React.useState("");

  const statusTabs = [
    { key: "All" as const, label: t.common.all },
    { key: "In Stock" as const, label: t.common.inStock },
    { key: "Low Stock" as const, label: t.common.lowStock },
    { key: "Out of Stock" as const, label: t.common.outOfStock },
  ];

  const filtered = React.useMemo(() => {
    return products.filter((p) => {
      const matchesTab = activeTab === "All" || p.status === activeTab;
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.sku.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [products, activeTab, search]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return <Badge variant="moss" dot>{t.common.inStock}</Badge>;
      case "Low Stock":
        return <Badge variant="amber" dot>{t.common.lowStock}</Badge>;
      case "Out of Stock":
        return <Badge variant="rose" dot>{t.common.outOfStock}</Badge>;
      default:
        return <Badge variant="smoke">{status}</Badge>;
    }
  };

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.products.title}
        description={t.products.description}
        action={
          <Button variant="primary" size="sm">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            {t.products.addProduct}
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
                "rounded-full px-3 py-1 text-[12px] font-medium transition-all cursor-pointer",
                activeTab === tab.key
                  ? "bg-paper text-ink border border-parchment/40"
                  : "text-smoke hover:text-ink"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-smoke pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.products.searchPlaceholder}
            className="h-8 w-full rounded-full border border-parchment bg-paper pl-8 pr-3 text-[12px] text-ink placeholder:text-smoke focus:outline-none focus:border-ink"
          />
        </div>
      </div>

      {/* Products Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-parchment bg-sand/20">
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.products.columns.product}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden sm:table-cell">{t.products.columns.sku}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke hidden md:table-cell">{t.products.columns.category}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.products.columns.price}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.products.columns.stock}</th>
                <th className="px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.06em] text-smoke">{t.products.columns.status}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((product) => {
                const stockPercent = Math.min(100, Math.round((product.stock / 150) * 100));
                return (
                  <tr
                    key={product.id}
                    className="border-b border-parchment/50 last:border-b-0 hover:bg-sand/20 transition-colors"
                  >
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <ProductImage url={product.imageUrl} name={product.name} />
                        <div>
                          <p className="font-medium text-[13px] text-ink">{product.name}</p>
                          <p className="text-[11px] text-smoke font-mono sm:hidden">{product.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3 font-mono text-[11px] text-smoke hidden sm:table-cell">
                      {product.sku}
                    </td>
                    <td className="px-5 py-3 text-[12px] text-ink hidden md:table-cell">
                      <span className="bg-sand/60 px-2 py-0.5 rounded font-mono text-[11px] text-smoke border border-parchment/40">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono text-[13px] text-ink font-medium">
                      {formatCurrency(product.price)}
                    </td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 rounded-full bg-sand overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full",
                              product.stock === 0
                                ? "bg-rose"
                                : product.stock < 20
                                ? "bg-amber"
                                : "bg-moss"
                            )}
                            style={{ width: `${stockPercent}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-mono text-smoke">
                          {product.stock} {t.products.units}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      {getStatusBadge(product.status)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-xs text-smoke font-mono">
            {t.products.empty}
          </div>
        )}
      </Card>
    </PageContainer>
  );
}
