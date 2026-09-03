export type ProductStatus = "in_stock" | "low_stock" | "out_of_stock" | "draft";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  inventory: number;
  status: ProductStatus;
  updatedAt: string;
  imageUrl?: string;
}
