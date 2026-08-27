import type { Metadata } from "next"
import { ProjectReport } from "@/components/report/project-report"

export const metadata: Metadata = {
  title: "PlotDNA 项目讲解报告",
  description: "PlotDNA 产品原型的功能演示、关键选择、AI 协作方式与完成边界。",
  robots: { index: false, follow: false },
}

export default function ReportPage() {
  return <ProjectReport />
}
