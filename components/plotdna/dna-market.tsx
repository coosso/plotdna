"use client"

import { ArrowRight, Eye, Gauge, Layers3, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { dnaCases } from "@/lib/demo-data"
import type { Genre, PlotDNA } from "@/types/dna"
import { SectionEyebrow } from "./header"

const genres: Genre[] = ["全部", "悬疑", "科幻", "职场", "爱情", "古装", "喜剧"]
export function DNAMarket({ genre, onGenre, onLoad }: { genre: Genre; onGenre: (g: Genre) => void; onLoad: (dna: PlotDNA) => void }) {
  const items = genre === "全部" ? dnaCases : dnaCases.filter((item) => item.genre === genre)
  return <section className="flex flex-col gap-8">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div className="flex max-w-3xl flex-col gap-3"><SectionEyebrow>DNA Marketplace / 006</SectionEyebrow><h1 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">拆掉爆款的外壳，<span className="text-primary">只取叙事基因。</span></h1><p className="text-pretty leading-relaxed text-muted-foreground">从成熟故事中提炼节拍、情绪引擎与视觉语法。重组的是结构函数，不是角色和情节。</p></div><div className="font-mono text-xs text-muted-foreground">数据版本 2026.08 · 已通过相似度清洗</div></div>
    <ToggleGroup value={[genre]} onValueChange={(v) => v[0] && onGenre(v[0] as Genre)} variant="outline" className="w-fit max-w-full overflow-x-auto">{genres.map((g) => <ToggleGroupItem key={g} value={g}>{g}</ToggleGroupItem>)}</ToggleGroup>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{items.map((dna, index) => <Card key={dna.id} className="group overflow-hidden transition-transform hover:-translate-y-1"><div className="h-1 bg-primary" /><CardHeader><div className="mb-2 flex items-center gap-2"><Badge>{dna.genre}</Badge><span className="font-mono text-xs text-muted-foreground">DNA-{String(index + 1).padStart(3, "0")}</span></div><CardTitle className="text-xl">{dna.title}</CardTitle><CardDescription className="text-pretty leading-relaxed">{dna.hook}</CardDescription><CardAction><Layers3 className="size-5 text-muted-foreground" /></CardAction></CardHeader><CardContent className="flex flex-col gap-4"><div className="rounded-lg bg-muted p-3"><p className="mb-1 text-xs text-muted-foreground">结构函数</p><p className="text-sm font-medium">{dna.structure}</p></div><div className="grid grid-cols-3 gap-3">{[["张力", dna.tension], ["节奏", dna.pace], ["原创", dna.originality]].map(([label, value]) => <div key={label as string} className="flex flex-col gap-1"><span className="text-xs text-muted-foreground">{label}</span><Progress value={value as number} /><strong className="font-mono text-xs">{value}</strong></div>)}</div><div className="flex flex-wrap gap-2">{dna.tags.map((tag) => <Badge variant="secondary" key={tag}>{tag}</Badge>)}</div></CardContent><CardFooter className="justify-between"><DNADetail dna={dna} /><Button size="sm" onClick={() => onLoad(dna)}>装载 DNA<ArrowRight data-icon="inline-end" /></Button></CardFooter></Card>)}</div>
  </section>
}
function DNADetail({ dna }: { dna: PlotDNA }) { return <Dialog><DialogTrigger render={<Button variant="ghost" size="sm" />}><Eye data-icon="inline-start" />解构</DialogTrigger><DialogContent className="sm:max-w-2xl"><DialogHeader><DialogTitle>{dna.title} · DNA 解构</DialogTitle><DialogDescription>{dna.hook}</DialogDescription></DialogHeader><div className="grid gap-4 md:grid-cols-2"><Info icon={<Zap />} title="情绪引擎" text={dna.emotionalEngine} /><Info icon={<Gauge />} title="视觉语法" text={dna.visualGrammar} /></div><div className="flex flex-col gap-3"><h3 className="font-medium">核心节拍</h3>{dna.beats.map((beat, i) => <div className="flex items-center gap-3" key={beat}><span className="flex size-7 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">{i + 1}</span><span className="text-sm">{beat}</span></div>)}</div></DialogContent></Dialog> }
function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="flex gap-3 rounded-xl border bg-muted/40 p-4"><span className="text-primary">{icon}</span><div><p className="text-xs text-muted-foreground">{title}</p><p className="mt-1 text-sm font-medium">{text}</p></div></div> }
