import { Locale } from "@/locales/types";

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  maxStock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
  imageUrl?: string;
}

export const mockProductsTr: Product[] = [
  {
    id: "pr1",
    name: "Kablosuz Gürültü Engelleyici Kulaklık",
    sku: "AUD-WNC-001",
    category: "Ses Sistemleri",
    price: 299.99,
    stock: 142,
    maxStock: 200,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr2",
    name: "Mekanik Klavye — TKL Kompakt",
    sku: "KBD-TKL-002",
    category: "Çevre Birimleri",
    price: 149.00,
    stock: 18,
    maxStock: 100,
    status: "Low Stock",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr3",
    name: "Ergonomik Yönetici Çalışma Koltuğu",
    sku: "FRN-CHR-003",
    category: "Ofis Mobilyası",
    price: 549.00,
    stock: 0,
    maxStock: 40,
    status: "Out of Stock",
    imageUrl: "https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr4",
    name: "4K USB-C Profesyonel Monitör 27\"",
    sku: "DSP-MON-004",
    category: "Ekranlar",
    price: 699.00,
    stock: 55,
    maxStock: 80,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr5",
    name: "Taşınabilir NVMe SSD 1TB",
    sku: "STO-SSD-005",
    category: "Depolama",
    price: 89.99,
    stock: 9,
    maxStock: 120,
    status: "Low Stock",
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr6",
    name: "Alüminyum Dizüstü Bilgisayar Standı",
    sku: "ACC-STD-006",
    category: "Aksesuarlar",
    price: 49.00,
    stock: 200,
    maxStock: 200,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr7",
    name: "Akıllı LED Çalışma Lambası",
    sku: "LGT-DKL-007",
    category: "Aydınlatma",
    price: 79.00,
    stock: 33,
    maxStock: 60,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr8",
    name: "USB-C Çoklayıcı Hub 7'si 1 Arada",
    sku: "ACC-HUB-008",
    category: "Aksesuarlar",
    price: 59.99,
    stock: 7,
    maxStock: 80,
    status: "Low Stock",
    imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=96&h=96&fit=crop&q=80",
  },
];

export const mockProductsEn: Product[] = [
  {
    id: "pr1",
    name: "Wireless Noise-Cancelling Headphones",
    sku: "AUD-WNC-001",
    category: "Audio",
    price: 299.99,
    stock: 142,
    maxStock: 200,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr2",
    name: "Mechanical Keyboard — TKL",
    sku: "KBD-TKL-002",
    category: "Peripherals",
    price: 149.00,
    stock: 18,
    maxStock: 100,
    status: "Low Stock",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr3",
    name: "Ergonomic Office Chair",
    sku: "FRN-CHR-003",
    category: "Furniture",
    price: 549.00,
    stock: 0,
    maxStock: 40,
    status: "Out of Stock",
    imageUrl: "https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr4",
    name: "4K USB-C Monitor 27\"",
    sku: "DSP-MON-004",
    category: "Displays",
    price: 699.00,
    stock: 55,
    maxStock: 80,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr5",
    name: "Portable SSD 1TB",
    sku: "STO-SSD-005",
    category: "Storage",
    price: 89.99,
    stock: 9,
    maxStock: 120,
    status: "Low Stock",
    imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr6",
    name: "Laptop Stand — Aluminium",
    sku: "ACC-STD-006",
    category: "Accessories",
    price: 49.00,
    stock: 200,
    maxStock: 200,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr7",
    name: "Smart Desk Lamp",
    sku: "LGT-DKL-007",
    category: "Lighting",
    price: 79.00,
    stock: 33,
    maxStock: 60,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=96&h=96&fit=crop&q=80",
  },
  {
    id: "pr8",
    name: "USB-C Hub 7-in-1",
    sku: "ACC-HUB-008",
    category: "Accessories",
    price: 59.99,
    stock: 7,
    maxStock: 80,
    status: "Low Stock",
    imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=96&h=96&fit=crop&q=80",
  },
];

export function getMockProducts(locale: Locale = "tr"): Product[] {
  return locale === "en" ? mockProductsEn : mockProductsTr;
}

export const mockProducts = mockProductsTr;
