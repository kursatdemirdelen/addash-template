"use client"

import * as React from "react"
import { getMockMessages } from "@/lib/mock-data/messages"
import { PageContainer } from "@/components/layout/page-container"
import { PageHeader } from "@/components/layout/page-header"
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Pencil, Star, Search, Archive, ArrowLeft } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { cn } from "@/lib/utils"

const LABEL_STYLE: Record<string, string> = {
  urgent: "bg-rose/10 text-rose border-rose/20",
  team: "bg-sky/10 text-sky border-sky/20",
  client: "bg-violet/10 text-violet border-violet/20",
  system: "bg-smoke/10 text-smoke border-smoke/20",
}

const PANEL_HEIGHT = "h-[calc(100dvh-11rem)] lg:h-[600px]"

export function MessagesPage() {
  const { t, locale } = useTranslation()
  const [messages, setMessages] = React.useState(() => getMockMessages(locale))

  React.useEffect(() => {
    setMessages(getMockMessages(locale))
  }, [locale])

  const [selected, setSelected] = React.useState<string | null>(null)
  const [search, setSearch] = React.useState("")

  React.useEffect(() => {
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 1024px)").matches) return
      setSelected((current) => current ?? messages[0]?.id ?? null)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [messages])

  const unread = messages.filter((m) => !m.read).length
  const filtered = messages.filter(
    (m) =>
      m.subject.toLowerCase().includes(search.toLowerCase()) ||
      m.from.name.toLowerCase().includes(search.toLowerCase())
  )

  const selectedMsg = messages.find((m) => m.id === selected)

  const handleSelect = (id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, read: true } : m)))
    setSelected(id)
  }

  const handleBack = () => {
    setSelected(null)
  }

  const toggleStar = (id: string) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, starred: !m.starred } : m)))
  }

  return (
    <PageContainer className="space-y-6">
      <PageHeader
        title={t.messages.title}
        description={`${unread} ${t.messages.unreadCount}`}
        action={
          <Button variant="primary" size="sm">
            <Pencil className="h-3.5 w-3.5 sm:mr-1.5" />
            <span className="hidden sm:inline">{t.messages.compose}</span>
          </Button>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5 min-w-0">
        {/* liste */}
        <Card
          className={cn(
            "overflow-hidden flex flex-col min-h-0 min-w-0",
            PANEL_HEIGHT,
            selectedMsg ? "hidden lg:flex" : "flex"
          )}
        >
          <div className="px-4 py-3 border-b border-parchment shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-smoke" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.messages.searchPlaceholder}
                className="w-full h-8 pl-8 pr-3 text-[12px] bg-sand/50 rounded-full border border-parchment placeholder:text-smoke text-ink focus:outline-none focus:border-ink"
              />
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-y-auto divide-y divide-parchment/60">
            {filtered.map((msg) => {
              const isSelected = msg.id === selected
              return (
                <button
                  key={msg.id}
                  type="button"
                  onClick={() => handleSelect(msg.id)}
                  className={cn(
                    "w-full p-3.5 cursor-pointer transition-colors text-left",
                    isSelected
                      ? "bg-sand"
                      : !msg.read
                        ? "bg-paper hover:bg-sand/40"
                        : "hover:bg-sand/30 opacity-75"
                  )}
                >
                  <div className="flex items-start gap-2.5">
                    <Avatar
                      src={msg.from.avatarUrl}
                      fallback={msg.from.initials}
                      size="sm"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={cn(
                            "text-[12px] truncate",
                            !msg.read ? "font-semibold text-ink" : "text-ink"
                          )}
                        >
                          {msg.from.name}
                        </span>
                        <span className="text-[10px] font-mono text-smoke shrink-0">
                          {msg.timestamp}
                        </span>
                      </div>
                      <p
                        className={cn(
                          "text-[12px] truncate",
                          !msg.read ? "font-medium text-ink" : "text-smoke"
                        )}
                      >
                        {msg.subject}
                      </p>
                      <p className="text-[11px] text-smoke truncate mt-0.5">{msg.preview}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </Card>

        {/* detay */}
        {selectedMsg ? (
          <Card className={cn("overflow-hidden flex flex-col min-h-0 min-w-0", PANEL_HEIGHT)}>
            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-parchment shrink-0">
              <button
                type="button"
                onClick={handleBack}
                className="lg:hidden flex items-center gap-1.5 text-[12px] text-smoke hover:text-ink transition-colors cursor-pointer mb-3"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                {t.common.back}
              </button>

              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {selectedMsg.label && (
                      <span
                        className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-mono border",
                          LABEL_STYLE[selectedMsg.label]
                        )}
                      >
                        {selectedMsg.label}
                      </span>
                    )}
                    <span className="text-[11px] font-mono text-smoke">{selectedMsg.timestamp}</span>
                  </div>
                  <h2 className="text-[16px] font-medium text-ink leading-snug">
                    {selectedMsg.subject}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar
                      src={selectedMsg.from.avatarUrl}
                      fallback={selectedMsg.from.initials}
                      size="sm"
                    />
                    <p className="text-[12px] font-medium text-ink truncate">
                      {selectedMsg.from.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => toggleStar(selectedMsg.id)}
                    className="cursor-pointer text-smoke hover:text-amber transition-colors"
                  >
                    <Star
                      className={cn("h-4 w-4", selectedMsg.starred && "fill-amber text-amber")}
                    />
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer text-smoke hover:text-ink transition-colors"
                  >
                    <Archive className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto px-4 sm:px-6 py-5">
              <p className="text-[13px] text-ink leading-relaxed whitespace-pre-line">
                {selectedMsg.preview}
              </p>
              <p className="text-[13px] text-smoke mt-4 leading-relaxed italic">
                {locale === "tr"
                  ? "— Gerçek bir uygulamada mesajın tam metni burada görünür. Bu panel bölünmüş görünüm (split-view) modelini sergilemektedir."
                  : "— Full message body would appear here in a real application. This panel is a showcase of an inbox/detail split-view pattern."}
              </p>
            </div>

            <div className="px-4 sm:px-6 py-4 border-t border-parchment shrink-0">
              <div className="flex gap-2 sm:gap-3">
                <input
                  placeholder={`${t.messages.replyPlaceholder} (${selectedMsg.from.name})`}
                  className="flex-1 min-w-0 h-9 rounded-full border border-parchment bg-sand/40 px-4 text-[12px] text-ink placeholder:text-smoke focus:outline-none focus:border-ink"
                />
                <Button variant="primary" size="sm" className="shrink-0">
                  {t.messages.send}
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <Card className="hidden lg:flex items-center justify-center h-[600px]">
            <p className="text-sm text-smoke">{t.messages.selectPrompt}</p>
          </Card>
        )}
      </div>
    </PageContainer>
  )
}
