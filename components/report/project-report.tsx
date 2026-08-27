"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"
import { OverviewCanvas, MixerCanvas, StoryboardCanvas, LineageCanvas } from "./demo-canvases"
import { Bot, Boxes, Check, CircleAlert, Clock3, Code2, Database, Eye, FileInput, GitBranch, Layers3, MonitorPlay, Sparkles, UserRoundCog } from "lucide-react"

const sections=[
  {id:"opening",label:"开场",time:"0:00"},{id:"problem",label:"问题与解法",time:"0:20"},{id:"demo",label:"核心演示",time:"0:55"},{id:"choices",label:"关键选择",time:"2:55"},{id:"ai",label:"AI 如何参与",time:"3:35"},{id:"boundary",label:"边界与投入",time:"4:10"},{id:"closing",label:"收尾",time:"4:40"},
]

export function ProjectReport(){
 const [active,setActive]=useState("opening"); const [progress,setProgress]=useState(0)
 useEffect(()=>{const onScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;setProgress(max?Math.min(100,scrollY/max*100):0);let current="opening";for(const item of sections){const el=document.getElementById(item.id);if(el&&el.getBoundingClientRect().top<180)current=item.id}setActive(current)};onScroll();addEventListener("scroll",onScroll,{passive:true});return()=>removeEventListener("scroll",onScroll)},[])
 const go=(id:string)=>document.getElementById(id)?.scrollIntoView({behavior:"smooth",block:"start"})
 return <main className="min-h-screen bg-background">
   <div className="fixed inset-x-0 top-0 z-50 h-1 bg-muted"><div className="h-full bg-foreground transition-[width]" style={{width:`${progress}%`}}/></div>
   <header className="sticky top-1 z-40 border-b bg-background/90 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3"><div className="flex items-center gap-3"><div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Sparkles className="size-4"/></div><div><p className="text-sm font-semibold">PlotDNA 项目讲解</p><p className="text-xs text-muted-foreground">录屏辅助页 · 约 4 分 55 秒</p></div></div><div className="flex items-center gap-2"><Badge variant="outline" className="hidden sm:flex">内部演示报告</Badge><ThemeToggle/></div></div></header>
   <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_250px]">
    <article className="min-w-0">
      <section id="opening" className="scroll-mt-24 pb-16 pt-8">
       <Badge>01 · 开场 / 20 秒</Badge><h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">把零散灵感，变成可追踪、可执行、可交付的短剧生产链。</h1>
       <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">PlotDNA 不是又一个“输入一句话、输出一段文本”的生成器。它把素材导入、叙事结构拆解、DNA 重组、分镜编译、质量分析、来源溯源和多格式导出组织为一套可观察的创作工作流。</p>
       <div className="mt-8 grid gap-3 sm:grid-cols-3">{[["8","工作台模块"],["5","交付格式"],["2–3h","实际实现会话"]].map(([v,l])=><Card key={l}><CardContent className="py-5"><p className="font-mono text-3xl font-semibold">{v}</p><p className="mt-1 text-sm text-muted-foreground">{l}</p></CardContent></Card>)}</div>
       <Speaker>开场只需要讲清一句话：这个产品解决的不是“没有文本”，而是 AI 生成从素材到交付之间缺少结构、可控性和证据链。</Speaker>
      </section>
      <Separator/>
      <section id="problem" className="scroll-mt-24 py-16"><SectionHead number="02" time="35 秒" title="问题不是生成能力，而是生产链断了" description="传统 AI 创作工具往往只优化单次输出，却没有解决输入、决策、执行和交付之间的断点。"/>
       <div className="mt-8 grid gap-3 md:grid-cols-2">{[
        [FileInput,"输入碎片化","文本、网页、旧剧本无法形成统一素材库。","统一导入与解析状态"],[Eye,"生成黑盒","不知道结果使用了什么、修改了什么。","DNA 槽位与显式参数"],[Layers3,"输出不可执行","故事梗概无法直接进入分镜或制作。","六幕结构与镜头时间轴"],[GitBranch,"来源难追踪","引用、变换、版本和导出彼此断开。","端到端血缘与原创声明"],
       ].map(([I,p,a,b])=>{const Icon=I as typeof FileInput;return <Card key={p as string}><CardHeader><div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-muted"><Icon className="size-4"/></div><CardTitle>{p as string}</CardTitle><CardDescription>{a as string}</CardDescription></CardHeader><CardContent><div className="flex items-center gap-2 text-sm font-medium"><Check className="size-4"/>{b as string}</div></CardContent></Card>})}</div>
       <div className="mt-5 flex flex-wrap items-center gap-2 rounded-xl border bg-muted/40 p-4">{["导入","拆解","重组","分镜","分析","溯源","导出"].map((v,i)=><div className="flex items-center gap-2" key={v}><Badge variant="secondary">{v}</Badge>{i<6&&<span className="text-muted-foreground">→</span>}</div>)}</div>
      </section>
      <Separator/>
      <section id="demo" className="scroll-mt-24 py-16"><SectionHead number="03" time="2 分钟" title="四个画面讲清完整工作流" description="以下画布复刻工作台核心信息结构。录屏时可先用它说明，再切换工作台实际操作。"/>
       <DemoBlock step="1" title="先从项目总览建立全局认知" note="指出素材、DNA、完成度三个指标，再从左到右读一遍流水线。重点强调：每一步都有明确输入和产出。"><OverviewCanvas/></DemoBlock>
       <DemoBlock step="2" title="用三槽位控制 AI 重组" note="展示冲突内核、人物原型、钩子机制分别来自哪个来源。调整参数后生成的不是随机故事，而是有约束的结构编译。"><MixerCanvas/></DemoBlock>
       <DemoBlock step="3" title="把故事继续编译成镜头时间轴" note="从冷开场、翻转、冲突升级到尾钩，讲清每幕的时间、功能和可执行内容，证明输出已经接近生产资料。"><StoryboardCanvas/></DemoBlock>
       <DemoBlock step="4" title="最后补齐溯源与交付" note="沿着来源素材、DNA 重组、交付产物读完整链路，并展示来源 ID、引用区间、转换动作和导出版本都被记录。"><LineageCanvas/></DemoBlock>
      </section>
      <Separator/>
      <section id="choices" className="scroll-mt-24 py-16"><SectionHead number="04" time="40 秒" title="六个关键选择，让演示变成产品" description="这些不是单纯的界面选择，而是围绕可理解、可控制与可交付做出的产品决策。"/>
       <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
        [Boxes,"项目制工作台","把一次问答提升为可持续推进的创作项目。"],[Code2,"结构 DNA","把提示词隐含变量变成可见、可替换的槽位。"],[GitBranch,"显式溯源","让创作者能说明灵感从哪里来、经历了什么变化。"],[Database,"演示回退","无 API Key 或上游失败时，核心路径仍可完整演示。"],[MonitorPlay,"浏览器导出","无需后端即可展示剧本、JSON、CSV 等真实下载。"],[Eye,"双主题与响应式","同一套工作台适应录屏、桌面和移动场景。"],
       ].map(([I,t,d])=>{const Icon=I as typeof Boxes;return <Card key={t as string}><CardHeader><Icon className="mb-3 size-5 text-muted-foreground"/><CardTitle>{t as string}</CardTitle><CardDescription className="leading-relaxed">{d as string}</CardDescription></CardHeader></Card>})}</div>
      </section>
      <Separator/>
      <section id="ai" className="scroll-mt-24 py-16"><SectionHead number="05" time="35 秒" title="AI 在两条线上参与，但不替代产品判断" description="一条线发生在产品里，另一条线发生在开发过程中。两者都由明确结构和人工验收约束。"/>
       <div className="mt-8 grid gap-4 md:grid-cols-2"><Card><CardHeader><Bot className="mb-3 size-6"/><CardTitle>产品中的 AI</CardTitle><CardDescription>在确定的槽位、原创度和目标类型下，完成剧情结构重组与分镜编译；失败时回退到可验证的演示数据。</CardDescription></CardHeader><CardContent><div className="flex flex-col gap-2">{["受参数约束，不是自由漫游","输出结构化结果而非纯文本","保留来源和转换动作"].map(v=><CheckLine key={v}>{v}</CheckLine>)}</div></CardContent></Card><Card><CardHeader><UserRoundCog className="mb-3 size-6"/><CardTitle>开发过程中的 AI</CardTitle><CardDescription>协助拆解需求、组合组件、建模类型、生成样例数据、运行构建与浏览器验证；产品边界和最终取舍仍由人决定。</CardDescription></CardHeader><CardContent><div className="flex flex-col gap-2">{["需求 → 信息架构 → 组件","代码 → 构建 → 浏览器验证","人工负责标准、边界与验收"].map(v=><CheckLine key={v}>{v}</CheckLine>)}</div></CardContent></Card></div>
      </section>
      <Separator/>
      <section id="boundary" className="scroll-mt-24 py-16"><SectionHead number="06" time="30 秒" title="当前完成边界与实际投入" description="这是一套经过构建和交互验证的前端产品原型，不把演示能力包装成已经上线的商业系统。"/>
       <div className="mt-8 grid gap-4 md:grid-cols-2"><Card><CardHeader><CardTitle>已经完成</CardTitle></CardHeader><CardContent className="flex flex-col gap-2">{["产品主页与 8 个工作台模块","AI 生成与演示数据回退","模拟素材导入和解析状态","5 类导出与来源血缘视图","双主题、响应式与可收缩侧栏","生产构建和关键流程浏览器验证"].map(v=><CheckLine key={v}>{v}</CheckLine>)}</CardContent></Card><Card><CardHeader><CardTitle>尚未进入本次范围</CardTitle></CardHeader><CardContent className="flex flex-col gap-2">{["账号、权限、数据库和项目持久化","真实 PDF / URL 文件解析服务","多人协作、评论与版本合并","真实版权库比对和法律结论","生产级计费、审计和运维体系"].map(v=><div key={v} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"><CircleAlert className="mt-0.5 size-4 shrink-0"/>{v}</div>)}</CardContent></Card></div>
       <Card className="mt-4"><CardContent className="grid gap-5 py-6 sm:grid-cols-[180px_1fr]"><div><p className="font-mono text-4xl font-semibold">约 2–3 小时</p><p className="mt-1 text-sm text-muted-foreground">本次会话内集中投入</p></div><div className="text-sm leading-relaxed text-muted-foreground"><p>该数字包含产品结构设计、多个界面迭代、组件实现、类型建模、样例数据、生产构建与浏览器验证。</p><p className="mt-2 font-medium text-foreground">它不是完整商业产品工期。若加入真实解析、数据库、账号、协作和版权服务，还需独立的工程与合规阶段。</p></div></CardContent></Card>
      </section>
      <Separator/>
      <section id="closing" className="scroll-mt-24 pb-24 pt-16"><SectionHead number="07" time="15 秒" title="最后用三句话收束" description="不要再展开新功能，强调项目从“生成器”到“生产系统原型”的变化。"/>
       <div className="mt-8 grid gap-3 md:grid-cols-3">{["从功能演示，到项目制创作工作台","从生成一段文本，到输出可执行交付","从黑盒结果，到可解释、可追踪的证据链"].map((v,i)=><Card key={v}><CardContent className="py-6"><span className="font-mono text-xs text-muted-foreground">0{i+1}</span><p className="mt-3 text-lg font-medium leading-relaxed">{v}</p></CardContent></Card>)}</div>
       <div className="mt-6 rounded-xl border bg-muted/40 p-5"><p className="font-medium">录屏前检查</p><div className="mt-3 grid gap-2 sm:grid-cols-2">{["浏览器宽度约 1200px","从浅色主题开始","工作台保持演示数据","提前测试一次导出","口播不超过 5 分钟","明确分数仅为演示数据"].map(v=><CheckLine key={v}>{v}</CheckLine>)}</div></div>
      </section>
    </article>
    <aside className="hidden lg:block"><div className="sticky top-24 rounded-xl border bg-card p-3"><div className="flex items-center gap-2 px-2 py-2"><Clock3 className="size-4"/><span className="text-sm font-medium">录制时间线</span></div><div className="mt-2 flex flex-col gap-1">{sections.map(s=><button key={s.id} onClick={()=>go(s.id)} className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors ${active===s.id?'bg-primary text-primary-foreground':'text-muted-foreground hover:bg-muted hover:text-foreground'}`}><span>{s.label}</span><span className="font-mono text-xs opacity-70">{s.time}</span></button>)}</div><Separator className="my-3"/><div className="px-2 pb-2"><div className="flex justify-between text-xs text-muted-foreground"><span>阅读进度</span><span>{Math.round(progress)}%</span></div><Progress value={progress} className="mt-2"/><p className="mt-3 text-xs leading-relaxed text-muted-foreground">目录只用于本页内部定位，不包含任何站内或外部链接。</p></div></div></aside>
   </div>
 </main>
}

function SectionHead({number,time,title,description}:{number:string;time:string;title:string;description:string}){return <div><div className="flex items-center gap-2"><Badge variant="outline">{number}</Badge><span className="font-mono text-xs text-muted-foreground">建议 {time}</span></div><h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2><p className="mt-3 max-w-3xl text-pretty leading-relaxed text-muted-foreground">{description}</p></div>}
function Speaker({children}:{children:React.ReactNode}){return <div className="mt-6 rounded-xl border bg-muted/40 p-4"><div className="flex items-start gap-3"><MonitorPlay className="mt-0.5 size-5 shrink-0"/><div><p className="text-sm font-medium">口播提示</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{children}</p></div></div></div>}
function DemoBlock({step,title,note,children}:{step:string;title:string;note:string;children:React.ReactNode}){return <div className="mt-10"><div className="mb-4 grid gap-3 md:grid-cols-[1fr_280px]"><div className="flex items-center gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-primary font-mono text-xs text-primary-foreground">{step}</span><h3 className="text-xl font-semibold">{title}</h3></div><p className="text-sm leading-relaxed text-muted-foreground">{note}</p></div>{children}</div>}
function CheckLine({children}:{children:React.ReactNode}){return <div className="flex items-start gap-2 text-sm leading-relaxed"><span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="size-2.5"/></span>{children}</div>}
