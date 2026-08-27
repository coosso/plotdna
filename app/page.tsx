import { Hero } from "@/components/landing/hero"
import { ProductSections } from "@/components/landing/product-sections"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { VideoDemo } from "@/components/landing/video-demo"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <VideoDemo />
        <ProductSections />
      </main>
      <SiteFooter />
    </div>
  )
}
