import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist_Mono, Noto_Sans_SC } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import "./globals.css"

const notoSans = Noto_Sans_SC({ subsets: ["latin"], variable: "--font-noto-sans-sc" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "PlotDNA｜叙事结构编译器",
  description: "拆解、重组并编译原创故事 DNA，生成可执行分镜与 ComfyUI 工作流。",
  generator: "v0.app",
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#080b12",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" className="dark bg-background"><body className={`${notoSans.className} ${notoSans.variable} ${geistMono.variable} font-sans antialiased`}><TooltipProvider>{children}</TooltipProvider><Toaster richColors position="top-center" />{process.env.NODE_ENV === "production" && <Analytics />}</body></html>
}
