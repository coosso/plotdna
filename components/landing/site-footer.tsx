import Link from "next/link"
import { Dna } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <Dna className="size-4" />
          <span className="font-semibold">PlotDNA</span>
        </Link>
        <p>继承结构，不复制故事。© 2026 PlotDNA</p>
      </div>
    </footer>
  )
}
