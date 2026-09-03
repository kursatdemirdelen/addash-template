export const THEMES = [
  {
    id: "warm" as const,
    canvas: "#dbdad7",
    paper: "#ffffff",
    sand: "#e6e4e0",
    ink: "#121212",
    smoke: "#616161",
    accent: "#121212",
  },
  {
    id: "dark" as const,
    canvas: "#2a2a2a",
    paper: "#1e1e1e",
    sand: "#2f2f2f",
    ink: "#f0f0f0",
    smoke: "#a0a0a0",
    accent: "#f0f0f0",
  },
  {
    id: "ocean" as const,
    canvas: "#c8dde8",
    paper: "#f0f7fb",
    sand: "#daeaf3",
    ink: "#0c1f2e",
    smoke: "#3d6882",
    accent: "#0ea5e9",
  },
  {
    id: "forest" as const,
    canvas: "#c8dbc8",
    paper: "#f0f7f0",
    sand: "#d8ead8",
    ink: "#0f2418",
    smoke: "#3a6645",
    accent: "#22c55e",
  },
  {
    id: "rose" as const,
    canvas: "#e8cdd2",
    paper: "#fdf5f6",
    sand: "#f2dde0",
    ink: "#2d1018",
    smoke: "#824055",
    accent: "#f43f5e",
  },
]

export type ThemeId = (typeof THEMES)[number]["id"]
