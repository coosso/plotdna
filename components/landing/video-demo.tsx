import { Clapperboard } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function VideoDemo() {
  return (
    <section id="demo" className="border-b">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-16 lg:px-6 lg:py-24">
        <div className="flex max-w-2xl flex-col items-center gap-3 text-center">
          <Badge variant="secondary" className="gap-1.5">
            <Clapperboard className="size-3.5" />
            产品演示
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            五分钟看懂 PlotDNA 的完整流程
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            从结构 DNA 市场选择样本，到跨题材重组、六幕分镜编译与 ComfyUI 导出，完整演示一遍核心工作流。
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-lg border bg-muted/40 shadow-sm">
          <video
            className="aspect-video w-full"
            src="/videos/project-demo.mov"
            controls
            preload="metadata"
            playsInline
          >
            您的浏览器不支持视频播放，请升级或使用 Chrome / Safari 等现代浏览器观看。
          </video>
        </div>
      </div>
    </section>
  )
}
