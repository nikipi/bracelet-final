import type React from "react"
import Header from "./header"
import Footer from "./footer"
import { cn } from "@/lib/utils"

interface InfoPageLayoutProps {
  children: React.ReactNode
  className?: string
  title: string
  subtitle?: string
  backgroundClass?: string
}

export default function InfoPageLayout({
  children,
  className,
  title,
  subtitle,
  backgroundClass = "bg-[#f8f5f0]",
}: InfoPageLayoutProps) {
  return (
    <div className={cn("min-h-screen", backgroundClass)}>
      <Header />

      <main className="py-16 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-2">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-[#2c2c2c] mb-6">
            <span className="font-normal italic">{title}</span>
            </h1>
            {subtitle && <p className="text-[#5c5c5c] text-lg md:text-xl font-light max-w-2xl mx-auto">{subtitle}</p>}
          </div>

          <div className={cn("max-w-6xl mx-auto", className)}>{children}</div>
        
        </div>
      </main>

      <Footer />
    </div>
  )
}
