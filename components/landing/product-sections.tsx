import Link from "next/link"
import { ArrowRight, BarChart3, BrainCircuit, Clapperboard, FileJson, Layers3, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const capabilities = [
  { icon: Layers3, title: "结构 DNA 市场", text: "检索多题材叙事样本，查看钩子、核心节拍、情绪引擎与视觉语法。" },
  { icon: BrainCircuit, title: "跨题材重组", text: "分别选择结构、情绪与镜头语言，在高原创度约束下重建因果链。" },
  { icon: Clapperboard, title: "六幕分镜编译", text: "自动生成景别、运镜、光线、对白和中英双语视觉提示词。" },
  { icon: ShieldCheck, title: "相似度与合规扫描", text: "隔离专名、事件与表层设定，让每次重组都有清晰的原创度解释。" },
  { icon: BarChart3, title: "叙事分析报告", text: "量化节拍贡献、制作效率与提示词一致性，辅助创作判断。" },
  { icon: FileJson, title: "ComfyUI 直接导出", text: "将每一幕转换为可执行节点，减少从剧本到生成流程的重复工作。" },
]

const steps = [
  { number: "01", title: "选择结构样本", text: "从 DNA 市场找到合适的叙事骨架，忽略角色与题材外壳。" },
  { number: "02", title: "配置重组参数", text: "混合情绪与视觉来源，设定时长、原创度和导演要求。" },
  { number: "03", title: "生成并交付", text: "审阅六幕分镜，复制提示词或导出剧本与 ComfyUI 工作流。" },
]

export function ProductSections() {
  return (
    <>
      <section id="capabilities" className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 lg:px-6 lg:py-24">
        <SectionHeading
          eyebrow="核心能力"
          title="一套围绕叙事结构的完整创作链路"
          description="不再从空白文档开始。PlotDNA 将结构研究、创意重组、分镜输出与生产交付放在同一个工作台。"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <span className="mb-2 flex size-10 items-center justify-center rounded-md bg-muted text-primary">
                  <item.icon className="size-5" />
                </span>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="leading-relaxed">{item.text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section id="workflow" className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 lg:px-6 lg:py-24">
        <SectionHeading
          eyebrow="工作流程"
          title="从故事参考到执行分镜，只需要三步"
          description="每一步都保留人工控制。你决定创作方向，PlotDNA 负责把抽象意图编译成结构化结果。"
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-5 rounded-lg border p-6">
              <Badge variant="outline" className="w-fit font-mono">{step.number}</Badge>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="modules" className="border-y bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-6 lg:py-24">
          <div className="flex flex-col items-start gap-5">
            <Badge variant="secondary">专业工作台</Badge>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">专注创作，而不是管理零散工具</h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              可收缩侧栏将 DNA 市场、重组实验室、分镜工坊与分析报告串联为稳定工作流。
              浅色与深色主题随时切换，适应白天规划和夜间创作。
            </p>
            <Button nativeButton={false} render={<Link href="/workspace" />}>
              打开工作台
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
          <Card>
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-base">DNA 重组实验室</CardTitle>
                  <CardDescription>当前项目 · 末班地铁</CardDescription>
                </div>
                <Badge>原创度 94</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 pt-6">
              {[
                ["结构骨架", "有限空间 · 倒计时困局"],
                ["情绪引擎", "身份错位 · 信任崩塌"],
                ["视觉语法", "冷调霓虹 · 长焦压缩"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 rounded-md border bg-background p-4">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-right text-sm font-medium">{value}</span>
                </div>
              ))}
              <Button className="w-full">编译完整分镜</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center lg:px-6 lg:py-28">
        <Badge variant="outline">现在开始</Badge>
        <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">把下一个创意，从结构开始搭建</h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">无需注册即可体验完整演示流程。也可以接入你的 OpenAI-compatible API，生成专属分镜。</p>
        <Button size="lg" nativeButton={false} render={<Link href="/workspace" />}>
          进入 PlotDNA
          <ArrowRight data-icon="inline-end" />
        </Button>
      </section>
    </>
  )
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="flex max-w-2xl flex-col gap-3">
      <Badge variant="secondary" className="w-fit">{eyebrow}</Badge>
      <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
