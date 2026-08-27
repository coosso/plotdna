"use client"

import Link from "next/link"
import { Dna } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "#capabilities", label: "核心能力" },
  { href: "#workflow", label: "工作流程" },
  { href: "#modules", label: "功能模块" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Dna className="size-4" />
          </span>
          <span className="text-base font-semibold">PlotDNA</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" nativeButton={false} render={<a href={link.href} />}>
              {link.label}
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" nativeButton={false} render={<Link href="/workspace" />}>
            进入工作台
          </Button>
        </div>
      </div>
    </header>
  )
}
