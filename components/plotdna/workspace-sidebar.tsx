"use client"

import Link from "next/link"
import { BarChart3, Clapperboard, Dna, FlaskConical, Home, Settings2 } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import type { ViewId } from "./header"

const navigation: { id: ViewId; label: string; description: string; icon: typeof Dna }[] = [
  { id: "market", label: "DNA 市场", description: "浏览结构样本", icon: Dna },
  { id: "mixer", label: "重组实验室", description: "混合叙事基因", icon: FlaskConical },
  { id: "studio", label: "分镜工坊", description: "编辑执行分镜", icon: Clapperboard },
  { id: "analytics", label: "分析报告", description: "查看叙事指标", icon: BarChart3 },
]

export function WorkspaceSidebar({ view, onView }: { view: ViewId; onView: (view: ViewId) => void }) {
  const { setOpenMobile } = useSidebar()
  const selectView = (next: ViewId) => {
    onView(next)
    setOpenMobile(false)
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/" />}>
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <Dna />
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="font-semibold">PlotDNA</span>
                <span className="text-xs text-muted-foreground">叙事结构编译器</span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>创作工作流</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={view === item.id}
                    tooltip={item.label}
                    onClick={() => selectView(item.id)}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton render={<Link href="/" />} tooltip="产品主页">
              <Home />
              <span>产品主页</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="设置" onClick={() => undefined}>
              <Settings2 />
              <span>PlotDNA Beta</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
