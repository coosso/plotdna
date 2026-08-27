"use client"

import Link from "next/link"
import { ArrowRight, Clapperboard, Dna, FlaskConical, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const previewMetrics = [
  { label: "结构样本", value: "120+" },
  { label: "平均原创度", value: "92%" },
  { label: "编译耗时", value: "48s" },
]

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 lg:px-6 lg:py-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="secondary" className="gap-1.5">
            <Sparkles className="size-3.5" />
            叙事结构编译器 · Beta
          </Badge>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            拆解爆款的结构，重组属于你的<span className="text-primary">原创故事 DNA</span>
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            PlotDNA 从成熟作品中提炼节拍、情绪引擎与视觉语法，跨题材重建因果链，
            一键编译为可执行分镜与 ComfyUI 工作流。继承的是结构，不是情节。
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<Link href="/workspace" />}>
              免费开始创作
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<a href="#workflow" />}>
              了解工作流程
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="grid gap-0 p-0 md:grid-cols-3">
            {[
              { icon: Dna, title: "解构 DNA", text: "隔离专名与表层设定，保留可复用的抽象结构。" },
              { icon: FlaskConical, title: "重组基因", text: "混合三种来源的结构、情绪与镜头语言。" },
              { icon: Clapperboard, title: "编译分镜", text: "输出六幕执行分镜与双语提示词。" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 border-b p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-md bg-muted text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          {previewMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-2xl font-semibold md:text-3xl">{metric.value}</span>
              <span className="text-xs text-muted-foreground md:text-sm">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
