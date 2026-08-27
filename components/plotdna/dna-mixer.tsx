"use client"

import { BrainCircuit, Clapperboard, Dna, LoaderCircle, Play, ScanSearch } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { dnaCases } from "@/lib/demo-data"
import type { GeneratedScriptResult, RemixConfig } from "@/types/dna"
import { SectionEyebrow } from "./header"
import { getAIConfig } from "./api-settings-dialog"

const stages = ["解析结构节拍", "转译情绪引擎", "编排六幕分镜", "编译 ComfyUI 提示词"]
export function DNAMixer({ config, setConfig, onComplete }: { config: RemixConfig; setConfig: (c: RemixConfig) => void; onComplete: (r: GeneratedScriptResult) => void }) {
  const [loading, setLoading] = React.useState(false), [stage, setStage] = React.useState(0)
  async function generate() {
    setLoading(true); setStage(0)
    const timer = window.setInterval(() => setStage((s) => Math.min(s + 1, 3)), 650)
    try { const response = await fetch("/api/remix", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ config, ai: getAIConfig() }) }); const result = await response.json(); onComplete(result) } finally { clearInterval(timer); setLoading(false) }
  }
  return <section className="flex flex-col gap-8"><div className="flex max-w-3xl flex-col gap-3"><SectionEyebrow>Remix Laboratory</SectionEyebrow><h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">不是拼贴，是一次<span className="text-primary">叙事转基因。</span></h1><p className="leading-relaxed text-muted-foreground">分别选择结构、情绪与镜头语言。系统会先抽象，再跨题材重建因果链。</p></div>
    <div className="grid gap-5 xl:grid-cols-[1fr_0.7fr]"><Card><CardHeader><CardTitle>DNA 三槽位</CardTitle><CardDescription>三个来源承担不同功能，避免直接复刻单一作品。</CardDescription></CardHeader><CardContent className="flex flex-col gap-6"><Slot icon={<Dna />} label="结构骨架" value={config.structureId} onChange={(v) => setConfig({ ...config, structureId: v })} /><Slot icon={<BrainCircuit />} label="情绪引擎" value={config.emotionId} onChange={(v) => setConfig({ ...config, emotionId: v })} /><Slot icon={<Clapperboard />} label="视觉语法" value={config.visualId} onChange={(v) => setConfig({ ...config, visualId: v })} /></CardContent></Card>
      <Card><CardHeader><CardTitle>编译参数</CardTitle><CardDescription>控制转译幅度与成片规格。</CardDescription></CardHeader><CardContent className="flex flex-col gap-6"><div className="flex flex-col gap-3"><div className="flex items-center justify-between"><Label>原创度</Label><strong className="font-mono text-primary">{config.originality}%</strong></div><Slider value={[config.originality]} min={60} max={100} step={1} onValueChange={(v) => setConfig({ ...config, originality: Array.isArray(v) ? v[0] : v })} /></div><div className="flex flex-col gap-2"><Label>目标时长</Label><Select value={config.duration} onValueChange={(v) => setConfig({ ...config, duration: v as RemixConfig["duration"] })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectGroup>{["30秒", "60秒", "90秒"].map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectGroup></SelectContent></Select></div><div className="flex flex-col gap-2"><Label htmlFor="requirement">附加导演要求</Label><Textarea id="requirement" value={config.requirement} onChange={(e) => setConfig({ ...config, requirement: e.target.value })} rows={5} /></div><Button size="lg" onClick={generate} disabled={loading}>{loading ? <LoaderCircle className="animate-spin" data-icon="inline-start" /> : <Play data-icon="inline-start" />}{loading ? "正在编译叙事…" : "生成完整分镜"}</Button></CardContent></Card></div>
    {loading && <Card><CardContent className="flex flex-col gap-4 py-6"><div className="flex items-center gap-3"><ScanSearch className="size-5 text-primary" /><div><p className="font-medium">{stages[stage]}</p><p className="text-sm text-muted-foreground">系统正在隔离专名、事件与表层设定</p></div></div><Progress value={(stage + 1) * 25} /><div className="grid gap-2 md:grid-cols-4">{stages.map((s, i) => <span key={s} className={i <= stage ? "text-xs text-foreground" : "text-xs text-muted-foreground"}>{String(i + 1).padStart(2, "0")} · {s}</span>)}</div></CardContent></Card>}
  </section>
}
function Slot({ icon, label, value, onChange }: { icon: React.ReactNode; label: string; value: string; onChange: (v: string) => void }) { const current = dnaCases.find((d) => d.id === value)!; return <div className="grid gap-3 rounded-xl border bg-muted/30 p-4 md:grid-cols-[auto_1fr_240px] md:items-center"><span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">{icon}</span><div><p className="text-xs text-muted-foreground">{label}</p><p className="font-medium">{current.title}</p></div><Select value={value} onValueChange={(next) => next && onChange(next)}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectGroup>{dnaCases.map((d) => <SelectItem value={d.id} key={d.id}>{d.title} · {d.genre}</SelectItem>)}</SelectGroup></SelectContent></Select></div> }

import * as React from "react"
