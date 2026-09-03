import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-charcoal text-parchment font-serif text-[17px] font-medium leading-none tracking-tight",
        className
      )}
      aria-hidden
    >
      A
    </div>
  )
}
