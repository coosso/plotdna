"use client"

import { useState } from "react"
import { toast } from "sonner"
import { AnalyticsView } from "./analytics-view"
import { DNAMarket } from "./dna-market"
import { DNAMixer } from "./dna-mixer"
import { Header, type ViewId } from "./header"
import { StoryboardStudio } from "./storyboard-studio"
import { defaultConfig, demoResult, dnaCases } from "@/lib/demo-data"
import type { GeneratedScriptResult, Genre, PlotDNA, RemixConfig } from "@/types/dna"

export function Workspace() {
  const [view, setView] = useState<ViewId>("market")
  const [genre, setGenre] = useState<Genre>("全部")
  const [config, setConfig] = useState<RemixConfig>(defaultConfig)
  const [result, setResult] = useState<GeneratedScriptResult>(demoResult)
  const load = (dna: PlotDNA) => { setConfig((c) => ({ ...c, structureId: dna.id })); setView("mixer"); toast.success(`已装载「${dna.title}」的结构 DNA`) }
  const random = () => { const ids = [...dnaCases].sort(() => Math.random() - .5).slice(0, 3).map((d) => d.id); setConfig((c) => ({ ...c, structureId: ids[0], emotionId: ids[1], visualId: ids[2], originality: 85 + Math.floor(Math.random() * 12) })); setView("mixer"); toast.success("已生成一组高差异 DNA 组合") }
  const complete = (data: GeneratedScriptResult) => { setResult(data); setView("studio"); toast.success(data.source === "demo" ? "已使用高质量演示结果完成编译" : "AI 分镜编译完成") }
  const download = (name: string, value: string, type = "text/plain") => { const url = URL.createObjectURL(new Blob([value], { type })); const a = document.createElement("a"); a.href = url; a.download = name; a.click(); URL.revokeObjectURL(url) }
  const workflow = () => download("plotdna-comfyui-workflow.json", JSON.stringify({ title: result.title, nodes: result.scenes.map((s) => ({ id: s.id, type: s.node, prompt: s.promptEn, camera: s.camera })) }, null, 2), "application/json")
  const exportAll = () => { const md = `# ${result.title}\n\n> ${result.logline}\n\n## 主题\n${result.theme}\n\n${result.scenes.map((s) => `## ${s.id}. ${s.title} (${s.time})\n${s.shot}\n\n**对白**：${s.dialogue}\n\n**Prompt**：${s.promptZh}`).join("\n\n")}`; download("plotdna-script.md", md, "text/markdown"); window.setTimeout(workflow, 150); toast.success("剧本与工作流已开始下载") }
  return <div className="min-h-screen bg-background text-foreground"><Header view={view} onView={setView} onRandom={random} onExport={exportAll} /><main className="mx-auto max-w-[1600px] px-4 py-8 lg:px-6 lg:py-12">{view === "market" && <DNAMarket genre={genre} onGenre={setGenre} onLoad={load} />}{view === "mixer" && <DNAMixer config={config} setConfig={setConfig} onComplete={complete} />}{view === "studio" && <StoryboardStudio result={result} onDownload={workflow} />}{view === "analytics" && <AnalyticsView />}</main><footer className="mx-auto flex max-w-[1600px] items-center justify-between border-t px-4 py-5 text-xs text-muted-foreground lg:px-6"><span>PlotDNA · 叙事结构编译器</span><span className="font-mono">STRUCTURE, NOT STORY.</span></footer></div>
}
