import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "@/styles/globals.css"

export default function AboutPage() {
  return (
    <InfoPageLayout
      title="Not just our story, but yours"
      subtitle="You are the light. We just remind you."
    >
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4">Our Mission</h2>
          <p className="text-[#5c5c5c] mb-4 leading-relaxed">
            <strong><span className="green-text">Yumiere</span></strong> was born from the belief that healing is not something that happens to you — it’s something you choose. 
            Blending the essence of <strong><span className="green-text">玉 (yu)</span></strong>, meaning jade or precious gem in Chinese, and <strong><span className="green-text">Lumière</span></strong>, the French word for light, 
            our name reflects a journey of illumination through intention.
          </p>
          <p className="text-[#5c5c5c] mb-4 leading-relaxed">
            We create crystal jewelry that does more than beautify — it empowers. Each piece is a ritual, a reminder, and 
            a tool for aligning with your inner light. We invite you to wear your energy with purpose and let every gemstone 
            support your path to self-discovery, healing, and strength.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed">
          We believe in the active pursuit of healing. <strong><span className="green-text">Yumiere</span></strong> isn’t just about crystals — it’s about claiming your own light. Every piece is a ritual of intention, a daily reminder that you are the one who chooses to grow, to radiate, and to rise.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image src="/images/crystal-bracelet.png" alt="Crystal Energy bracelets" fill className="object-cover" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e5e0d5]">
          <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-3">Handcrafted Quality</h3>
          <p className="text-[#5c5c5c]">
            Each bracelet is assembled by hand with care and precision, ensuring the highest quality and thoughtful craftsmanship.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e5e0d5]">
          <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-3">Ethically Sourced</h3>
          <p className="text-[#5c5c5c]">
            We work only with trusted partners who prioritize fair labor practices and environmentally respectful sourcing.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e5e0d5]">
          <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-3">Energy Infused</h3>
          <p className="text-[#5c5c5c]">
            Every piece is energetically cleansed, charged under moonlight, and infused with loving intentions before it finds its way to you.
          </p>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-6">Learn More About Us</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about/our-story">
            <Button variant="outline" className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0]">
              Our Story
            </Button>
          </Link>
          <Link href="/crystal-properties">
            <Button variant="outline" className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0]">
              Crystal Properties
            </Button>
          </Link>
          <Link href="/sustainability">
            <Button variant="outline" className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0]">
              Sustainability
            </Button>
          </Link>
        </div>
      </div>
    </InfoPageLayout>
  )
}