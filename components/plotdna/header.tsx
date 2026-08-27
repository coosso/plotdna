"use client"

import { Boxes, Dna, Download, Shuffle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { APISettingsDialog } from "./api-settings-dialog"

export type ViewId = "market" | "mixer" | "studio" | "analytics"
const nav: { id: ViewId; label: string }[] = [{ id: "market", label: "DNA 市场" }, { id: "mixer", label: "重组实验室" }, { id: "studio", label: "分镜工坊" }, { id: "analytics", label: "分析报告" }]

export function Header({ view, onView, onRandom, onExport }: { view: ViewId; onView: (v: ViewId) => void; onRandom: () => void; onExport: () => void }) {
  return <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur-xl">
    <div className="mx-auto flex max-w-[1600px] flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-6">
      <div className="flex items-center justify-between gap-4">
        <button onClick={() => onView("market")} className="flex items-center gap-3 text-left" aria-label="返回 DNA 市场"><span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Dna className="size-5" /></span><span><span className="flex items-center gap-2 font-mono text-base font-bold tracking-tight">PlotDNA <Badge variant="secondary">BETA</Badge></span><span className="block text-xs text-muted-foreground">叙事结构编译器</span></span></button>
        <div className="flex gap-2 lg:hidden"><APISettingsDialog /></div>
      </div>
      <nav className="flex overflow-x-auto rounded-lg bg-muted p-1" aria-label="主导航">{nav.map((item) => <button key={item.id} onClick={() => onView(item.id)} className={`shrink-0 rounded-md px-3 py-2 text-sm font-medium transition-colors ${view === item.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}>{item.label}</button>)}</nav>
      <div className="hidden items-center gap-2 lg:flex"><Button variant="outline" size="sm" onClick={onRandom}><Shuffle data-icon="inline-start" />神级随机</Button><APISettingsDialog /><Button size="sm" onClick={onExport}><Download data-icon="inline-start" />导出整包</Button></div>
    </div>
  </header>
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) { return <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary"><Sparkles className="size-4" />{children}</div> }
export function EmptyStudio() { return <div className="flex min-h-80 flex-col items-center justify-center gap-3 text-center"><Boxes className="size-10 text-muted-foreground" /><p className="font-medium">还没有装载剧本</p><p className="max-w-sm text-sm text-muted-foreground">先在 DNA 市场选择结构，或前往重组实验室生成一版完整分镜。</p></div> }
