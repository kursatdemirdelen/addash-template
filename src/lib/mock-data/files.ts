export interface FileItem {
  id: string;
  name: string;
  type: "pdf" | "image" | "video" | "doc" | "spreadsheet" | "archive" | "code" | "folder";
  size: string;
  modifiedAt: string;
  modifiedBy: string;
  shared: boolean;
}

export const mockFiles: FileItem[] = [
  { id: "f1",  name: "Q3 Financial Report",     type: "pdf",         size: "2.4 MB",  modifiedAt: "Today, 9:30 am",    modifiedBy: "Sofia A.", shared: true  },
  { id: "f2",  name: "Brand Assets 2026",        type: "folder",      size: "148 MB",  modifiedAt: "Yesterday",          modifiedBy: "Amara D.", shared: true  },
  { id: "f3",  name: "Dashboard Screenshot",     type: "image",       size: "840 KB",  modifiedAt: "Yesterday",          modifiedBy: "You",      shared: false },
  { id: "f4",  name: "Product Roadmap.xlsx",     type: "spreadsheet", size: "320 KB",  modifiedAt: "Aug 31",             modifiedBy: "Lucas B.", shared: true  },
  { id: "f5",  name: "Team Offsite Recording",   type: "video",       size: "1.2 GB",  modifiedAt: "Aug 30",             modifiedBy: "James O.", shared: false },
  { id: "f6",  name: "Design Spec v3.docx",      type: "doc",         size: "980 KB",  modifiedAt: "Aug 28",             modifiedBy: "Amara D.", shared: true  },
  { id: "f7",  name: "addash-template.zip",      type: "archive",     size: "14 MB",   modifiedAt: "Aug 26",             modifiedBy: "You",      shared: false },
  { id: "f8",  name: "tailwind.config.ts",       type: "code",        size: "3 KB",    modifiedAt: "Aug 25",             modifiedBy: "Mia C.",   shared: false },
  { id: "f9",  name: "User Research Summary",    type: "pdf",         size: "1.8 MB",  modifiedAt: "Aug 20",             modifiedBy: "Sofia A.", shared: true  },
  { id: "f10", name: "Marketing Assets",         type: "folder",      size: "320 MB",  modifiedAt: "Aug 18",             modifiedBy: "Amara D.", shared: true  },
];
