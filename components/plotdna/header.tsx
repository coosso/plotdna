"use client"

import { Boxes, Download, Shuffle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { APISettingsDialog } from "./api-settings-dialog"

export type ViewId = "market" | "mixer" | "studio" | "analytics"

const viewMeta: Record<ViewId, { title: string; description: string }> = {
  market: { title: "DNA 市场", description: "浏览经过抽象与相似度清洗的叙事结构" },
  mixer: { title: "重组实验室", description: "组合结构、情绪与视觉语法" },
  studio: { title: "分镜工坊", description: "将叙事 DNA 编译为可执行分镜" },
  analytics: { title: "分析报告", description: "评估节拍贡献、原创度与制作效率" },
}

export function Header({ view, onRandom, onExport }: { view: ViewId; onRandom: () => void; onExport: () => void }) {
  const current = viewMeta[view]
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <SidebarTrigger />
        <Separator orientation="vertical" className="h-4" />
        <div className="min-w-0">
          <h1 className="truncate text-sm font-semibold">{current.title}</h1>
          <p className="hidden truncate text-xs text-muted-foreground sm:block">{current.description}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        <Button variant="ghost" size="sm" onClick={onRandom} className="hidden sm:inline-flex">
          <Shuffle data-icon="inline-start" />随机组合
        </Button>
        <APISettingsDialog />
        <ThemeToggle />
        <Button size="sm" onClick={onExport} className="hidden md:inline-flex">
          <Download data-icon="inline-start" />导出整包
        </Button>
      </div>
    </header>
  )
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground"><Sparkles className="size-4" />{children}</div>
}

export function EmptyStudio() {
  return <div className="flex min-h-80 flex-col items-center justify-center gap-3 text-center"><Boxes className="size-10 text-muted-foreground" /><p className="font-medium">还没有装载剧本</p><p className="max-w-sm text-sm text-muted-foreground">先在 DNA 市场选择结构，或前往重组实验室生成一版完整分镜。</p></div>
}
