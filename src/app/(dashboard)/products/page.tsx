import type { Metadata } from "next";
import { ProductsPage } from "@/features/products/components/products-page";

export const metadata: Metadata = {
  title: "Ürünler",
  description: "Ürün kataloğu ve envanter stok durumu.",
};

export default function Page() {
  return <ProductsPage />;
}
