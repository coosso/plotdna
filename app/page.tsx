import { Hero } from "@/components/landing/hero"
import { ProductSections } from "@/components/landing/product-sections"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <ProductSections />
      </main>
      <SiteFooter />
    </div>
  )
}
