"use client"

import Link from "next/link"
import { BarChart3, Clapperboard, Dna, FileInput, FileOutput, FlaskConical, GitBranch, Home, LayoutDashboard, Settings2 } from "lucide-react"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail, useSidebar } from "@/components/ui/sidebar"
import type { ViewId } from "./header"

const groups=[
 {label:"项目",items:[{id:"overview",label:"项目总览",icon:LayoutDashboard},{id:"sources",label:"素材库与导入",icon:FileInput}]},
 {label:"创作流程",items:[{id:"market",label:"DNA 结构资产",icon:Dna},{id:"mixer",label:"结构重组画布",icon:FlaskConical},{id:"studio",label:"分镜工坊",icon:Clapperboard},{id:"analytics",label:"可视化分析",icon:BarChart3}]},
 {label:"交付与治理",items:[{id:"lineage",label:"溯源追踪",icon:GitBranch},{id:"exports",label:"导出中心",icon:FileOutput}]},
] as const
export function WorkspaceSidebar({view,onView}:{view:ViewId;onView:(view:ViewId)=>void}){const{setOpenMobile}=useSidebar();const select=(id:ViewId)=>{onView(id);setOpenMobile(false)};return <Sidebar collapsible="icon"><SidebarHeader><SidebarMenu><SidebarMenuItem><SidebarMenuButton size="lg" render={<Link href="/"/>}><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"><Dna/></span><span className="flex min-w-0 flex-col"><span className="font-semibold">PlotDNA</span><span className="text-xs text-muted-foreground">叙事结构编译器</span></span></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarHeader><SidebarContent>{groups.map(g=><SidebarGroup key={g.label}><SidebarGroupLabel>{g.label}</SidebarGroupLabel><SidebarGroupContent><SidebarMenu>{g.items.map(item=><SidebarMenuItem key={item.id}><SidebarMenuButton isActive={view===item.id} tooltip={item.label} onClick={()=>select(item.id as ViewId)}><item.icon/><span>{item.label}</span></SidebarMenuButton></SidebarMenuItem>)}</SidebarMenu></SidebarGroupContent></SidebarGroup>)}</SidebarContent><SidebarFooter><SidebarMenu><SidebarMenuItem><SidebarMenuButton render={<Link href="/"/>} tooltip="产品主页"><Home/><span>产品主页</span></SidebarMenuButton></SidebarMenuItem><SidebarMenuItem><SidebarMenuButton tooltip="设置"><Settings2/><span>PlotDNA Beta</span></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarFooter><SidebarRail/></Sidebar>}
