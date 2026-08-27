"use client"

import { useState } from "react"
import { toast } from "sonner"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AnalyticsView } from "./analytics-view"
import { DNAMarket } from "./dna-market"
import { DNAMixer } from "./dna-mixer"
import { ExportCenter } from "./export-center"
import { Header, type ViewId } from "./header"
import { LineageView } from "./lineage-view"
import { ProjectOverview } from "./project-overview"
import { SourceLibrary } from "./source-library"
import { StoryboardStudio } from "./storyboard-studio"
import { WorkspaceSidebar } from "./workspace-sidebar"
import { defaultConfig, demoResult, dnaCases } from "@/lib/demo-data"
import type { GeneratedScriptResult, Genre, PlotDNA, RemixConfig } from "@/types/dna"

export function Workspace(){const[view,setView]=useState<ViewId>("overview"),[genre,setGenre]=useState<Genre>("全部"),[config,setConfig]=useState<RemixConfig>(defaultConfig),[result,setResult]=useState<GeneratedScriptResult>(demoResult)
 const load=(dna:PlotDNA)=>{setConfig(c=>({...c,structureId:dna.id}));setView("mixer");toast.success(`已装载「${dna.title}」的结构 DNA`)}
 const random=()=>{const ids=[...dnaCases].sort(()=>Math.random()-.5).slice(0,3).map(d=>d.id);setConfig(c=>({...c,structureId:ids[0],emotionId:ids[1],visualId:ids[2],originality:85+Math.floor(Math.random()*12)}));setView("mixer");toast.success("已创建 v0.8.4 草稿与高差异组合")}
 const complete=(data:GeneratedScriptResult)=>{setResult(data);setView("studio");toast.success(data.source==="demo"?"已使用高质量演示结果完成编译":"AI 分镜编译完成")}
 const download=(name:string,value:string,type="text/plain")=>{const url=URL.createObjectURL(new Blob([value],{type}));const a=document.createElement("a");a.href=url;a.download=name;a.click();URL.revokeObjectURL(url)}
 const workflow=()=>download("plotdna-comfyui-workflow.json",JSON.stringify({title:result.title,version:"v0.8.3",sources:["SRC-001","SRC-002","SRC-003"],nodes:result.scenes.map(s=>({id:s.id,type:s.node,prompt:s.promptEn,camera:s.camera}))},null,2),"application/json")
 const exportAll=()=>{const md=`# ${result.title}\n\n> ${result.logline}\n\n## 主题\n${result.theme}\n\n${result.scenes.map(s=>`## ${s.id}. ${s.title} (${s.time})\n${s.shot}\n\n**对白**：${s.dialogue}\n\n**Prompt**：${s.promptZh}`).join("\n\n")}`;download("plotdna-script.md",md,"text/markdown");window.setTimeout(workflow,150);toast.success("完整项目包已开始导出")}
 return <SidebarProvider><WorkspaceSidebar view={view} onView={setView}/><SidebarInset className="min-w-0"><Header view={view} onRandom={random} onExport={exportAll}/><div className="flex flex-1 flex-col"><main className="w-full flex-1 px-4 py-6 lg:px-8 lg:py-8">{view==="overview"&&<ProjectOverview onView={setView}/>} {view==="sources"&&<SourceLibrary onExtract={()=>setView("market")}/>} {view==="market"&&<DNAMarket genre={genre} onGenre={setGenre} onLoad={load}/>} {view==="mixer"&&<DNAMixer config={config} setConfig={setConfig} onComplete={complete}/>} {view==="studio"&&<StoryboardStudio result={result} onDownload={workflow}/>} {view==="analytics"&&<AnalyticsView/>} {view==="lineage"&&<LineageView/>} {view==="exports"&&<ExportCenter result={result} onExportAll={exportAll} onDownload={download}/>}</main><footer className="flex items-center justify-between border-t px-4 py-4 text-xs text-muted-foreground lg:px-8"><span>PlotDNA · 项目 P-240827 · v0.8.3</span><span className="hidden font-mono sm:inline">ALL OUTPUTS TRACEABLE.</span></footer></div></SidebarInset></SidebarProvider>}
