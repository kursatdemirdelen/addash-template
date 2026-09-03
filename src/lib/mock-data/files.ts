import { Locale } from "@/locales/types";

export interface FileItem {
  id: string;
  name: string;
  type: "pdf" | "image" | "video" | "doc" | "spreadsheet" | "archive" | "code" | "folder";
  size: string;
  modifiedAt: string;
  modifiedBy: string;
  shared: boolean;
}

export const mockFilesTr: FileItem[] = [
  { id: "f1",  name: "Q3 Finansal Rapor.pdf",       type: "pdf",         size: "2.4 MB",  modifiedAt: "Bugün, 09:30",    modifiedBy: "Deniz A.", shared: true  },
  { id: "f2",  name: "Marka Varlıkları 2026",       type: "folder",      size: "148 MB",  modifiedAt: "Dün",             modifiedBy: "Selin A.", shared: true  },
  { id: "f3",  name: "Panel Ekran Görüntüsü.png",   type: "image",       size: "840 KB",  modifiedAt: "Dün",             modifiedBy: "Siz",      shared: false },
  { id: "f4",  name: "Ürün Yol Haritası.xlsx",      type: "spreadsheet", size: "320 KB",  modifiedAt: "31 Ağu",          modifiedBy: "Burak D.", shared: true  },
  { id: "f5",  name: "Ekip Toplantı Kaydı.mp4",     type: "video",       size: "1.2 GB",  modifiedAt: "30 Ağu",          modifiedBy: "Cem Y.", shared: false },
  { id: "f6",  name: "Tasarım Şartnamesi v3.docx",  type: "doc",         size: "980 KB",  modifiedAt: "28 Ağu",          modifiedBy: "Selin A.", shared: true  },
  { id: "f7",  name: "addash-template.zip",         type: "archive",     size: "14 MB",   modifiedAt: "26 Ağu",          modifiedBy: "Siz",      shared: false },
  { id: "f8",  name: "tailwind.config.ts",          type: "code",        size: "3 KB",    modifiedAt: "25 Ağu",          modifiedBy: "Elif K.",   shared: false },
  { id: "f9",  name: "Kullanıcı Araştırma Özeti",   type: "pdf",         size: "1.8 MB",  modifiedAt: "20 Ağu",          modifiedBy: "Deniz A.", shared: true  },
  { id: "f10", name: "Pazarlama Görselleri",        type: "folder",      size: "320 MB",  modifiedAt: "18 Ağu",          modifiedBy: "Selin A.", shared: true  },
];

export const mockFilesEn: FileItem[] = [
  { id: "f1",  name: "Q3 Financial Report.pdf",     type: "pdf",         size: "2.4 MB",  modifiedAt: "Today, 9:30 am",  modifiedBy: "Deniz A.", shared: true  },
  { id: "f2",  name: "Brand Assets 2026",           type: "folder",      size: "148 MB",  modifiedAt: "Yesterday",       modifiedBy: "Selin A.", shared: true  },
  { id: "f3",  name: "Dashboard Screenshot.png",    type: "image",       size: "840 KB",  modifiedAt: "Yesterday",       modifiedBy: "You",      shared: false },
  { id: "f4",  name: "Product Roadmap.xlsx",        type: "spreadsheet", size: "320 KB",  modifiedAt: "Aug 31",          modifiedBy: "Burak D.", shared: true  },
  { id: "f5",  name: "Team Offsite Recording.mp4",  type: "video",       size: "1.2 GB",  modifiedAt: "Aug 30",          modifiedBy: "Cem Y.", shared: false },
  { id: "f6",  name: "Design Spec v3.docx",         type: "doc",         size: "980 KB",  modifiedAt: "Aug 28",          modifiedBy: "Selin A.", shared: true  },
  { id: "f7",  name: "addash-template.zip",         type: "archive",     size: "14 MB",   modifiedAt: "Aug 26",          modifiedBy: "You",      shared: false },
  { id: "f8",  name: "tailwind.config.ts",          type: "code",        size: "3 KB",    modifiedAt: "Aug 25",          modifiedBy: "Elif K.",   shared: false },
  { id: "f9",  name: "User Research Summary",       type: "pdf",         size: "1.8 MB",  modifiedAt: "Aug 20",          modifiedBy: "Deniz A.", shared: true  },
  { id: "f10", name: "Marketing Assets",            type: "folder",      size: "320 MB",  modifiedAt: "Aug 18",          modifiedBy: "Selin A.", shared: true  },
];

export function getMockFiles(locale: Locale = "tr"): FileItem[] {
  return locale === "en" ? mockFilesEn : mockFilesTr;
}

export const mockFiles = mockFilesTr;
