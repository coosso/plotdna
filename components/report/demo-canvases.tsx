"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Check, FileOutput, GitBranch, Library, Sparkles } from "lucide-react"

function CanvasFrame({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
    <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
      <div className="flex items-center gap-2"><span className="size-2 rounded-full bg-foreground"/><span className="text-sm font-medium">{title}</span></div>
      <span className="font-mono text-[11px] text-muted-foreground">{subtitle}</span>
    </div>
    <div className="p-4 md:p-5">{children}</div>
  </div>
}

export function OverviewCanvas() {
  const stages = ["素材", "DNA", "重组", "分镜", "溯源", "导出"]
  return <CanvasFrame title="项目总览" subtitle="project / v0.8">
    <div className="grid gap-3 sm:grid-cols-3">
      {[['12','来源素材'],['6','DNA 资产'],['94%','项目完成度']].map(([value,label])=><div key={label} className="rounded-lg border bg-background p-3"><p className="font-mono text-xl font-semibold">{value}</p><p className="text-xs text-muted-foreground">{label}</p></div>)}
    </div>
    <div className="mt-4 rounded-lg border p-4">
      <div className="mb-3 flex items-center justify-between"><span className="text-sm font-medium">创作流水线</span><Badge variant="secondary">6 / 6 已就绪</Badge></div>
      <div className="flex flex-wrap items-center gap-2">{stages.map((stage,i)=><div className="flex items-center gap-2" key={stage}><div className="flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-2 text-xs"><Check className="size-3"/>{stage}</div>{i<stages.length-1&&<ArrowRight className="size-3 text-muted-foreground"/>}</div>)}</div>
    </div>
  </CanvasFrame>
}

export function MixerCanvas() {
  const slots = [{name:"冲突内核",value:"失败者被迫直播自证",source:"SRC-001"},{name:"人物原型",value:"失控型天才导演",source:"SRC-003"},{name:"钩子机制",value:"每 45 秒一次身份翻转",source:"SRC-006"}]
  return <CanvasFrame title="DNA 重组实验室" subtitle="remix / originality 86%">
    <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
      {slots.map((slot,i)=><div className="contents" key={slot.name}><Card size="sm"><CardHeader><CardDescription>{slot.name}</CardDescription><CardTitle>{slot.value}</CardTitle></CardHeader><CardContent><Badge variant="outline">溯源 {slot.source}</Badge></CardContent></Card>{i<2&&<div className="hidden items-center lg:flex"><span className="rounded-full border bg-background p-2"><span className="block size-1.5 rounded-full bg-foreground"/></span></div>}</div>)}
    </div>
    <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_180px]"><div className="rounded-lg bg-muted p-4"><p className="text-xs text-muted-foreground">AI 编译结果</p><p className="mt-1 text-sm leading-relaxed">一名被封杀的导演，用一场不可中断的直播证明自己，却发现观众正在实时改写他的过去。</p></div><div className="rounded-lg border p-4"><div className="flex justify-between text-xs"><span>原创度</span><span className="font-mono">86%</span></div><Progress value={86} className="mt-3"/></div></div>
  </CanvasFrame>
}

export function StoryboardCanvas() {
  const scenes=[['00:00','冷开场','直播画面突然出现未来的自己'],['00:32','第一次翻转','弹幕提前说出导演的台词'],['01:18','冲突升级','旧事故录像被全网同步播放'],['02:40','尾钩','屏幕外有人按下第二次直播']]
  return <CanvasFrame title="分镜工坊" subtitle="4 scenes / 03:00">
    <div className="relative flex flex-col gap-3 before:absolute before:bottom-4 before:left-[38px] before:top-4 before:w-px before:bg-border">
      {scenes.map(([time,title,content],i)=><div key={time} className="relative grid grid-cols-[76px_1fr] gap-3"><div className="flex items-start gap-2"><span className="font-mono text-xs text-muted-foreground">{time}</span><span className="relative mt-1.5 size-2 shrink-0 rounded-full bg-foreground ring-4 ring-background"/></div><div className="rounded-lg border bg-background p-3"><div className="flex items-center justify-between"><p className="text-sm font-medium">{title}</p><Badge variant={i===3?'default':'secondary'}>{i===3?'悬念':'节拍'}</Badge></div><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{content}</p></div></div>)}
    </div>
  </CanvasFrame>
}

export function LineageCanvas() {
  return <CanvasFrame title="溯源与交付" subtitle="lineage / export">
    <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
      <Node icon={Library} label="来源素材" value="3 个片段" meta="TXT · PDF · URL"/><ArrowRight className="mx-auto hidden size-4 text-muted-foreground md:block"/><Node icon={GitBranch} label="DNA 重组" value="3 个槽位" meta="变换说明已记录"/><ArrowRight className="mx-auto hidden size-4 text-muted-foreground md:block"/><Node icon={FileOutput} label="交付产物" value="5 种格式" meta="剧本 · JSON · CSV"/>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">{['来源 ID','引用区间','转换动作','原创度声明','导出版本'].map(v=><Badge key={v} variant="outline"><Check/>{v}</Badge>)}</div>
  </CanvasFrame>
}

function Node({icon:Icon,label,value,meta}:{icon:typeof Sparkles;label:string;value:string;meta:string}) {return <div className="rounded-lg border bg-background p-4"><Icon className="mb-5 size-5 text-muted-foreground"/><p className="text-xs text-muted-foreground">{label}</p><p className="mt-1 font-medium">{value}</p><p className="mt-1 text-xs text-muted-foreground">{meta}</p></div>}
