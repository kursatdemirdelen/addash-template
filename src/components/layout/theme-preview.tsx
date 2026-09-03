import type { ThemeId } from "@/lib/themes"
import { THEMES } from "@/lib/themes"
import { cn } from "@/lib/utils"

export function ThemePreview({
  themeId,
  compact = false,
  className,
}: {
  themeId: ThemeId
  compact?: boolean
  className?: string
}) {
  const option = THEMES.find((item) => item.id === themeId) ?? THEMES[0]

  return (
    <div
      className={cn(
        "rounded-md overflow-hidden border",
        compact ? "h-5 w-5" : "",
        className
      )}
      style={{
        background: option.canvas,
        borderColor: option.sand,
      }}
      aria-hidden
    >
      {compact ? (
        <div className="flex h-full">
          <span className="w-1.5 h-full" style={{ background: option.ink }} />
          <span className="flex-1" style={{ background: option.paper }} />
        </div>
      ) : (
        <>
          <div
            className="flex items-center gap-1 px-2 h-5"
            style={{ background: option.paper, borderBottom: `1px solid ${option.sand}` }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: option.accent }}
            />
            <span className="h-1 w-8 rounded-sm" style={{ background: option.sand }} />
          </div>
          <div className="p-2 space-y-1.5">
            <span
              className="block h-1.5 w-10 rounded-sm"
              style={{ background: option.ink, opacity: 0.7 }}
            />
            <span
              className="block h-1 w-14 rounded-sm"
              style={{ background: option.smoke, opacity: 0.5 }}
            />
            <span
              className="block h-6 w-full rounded-sm"
              style={{ background: option.paper }}
            />
          </div>
        </>
      )}
    </div>
  )
}
