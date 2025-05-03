import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <InfoPageLayout title="Our Story" subtitle="Discover the passion and purpose behind our handcrafted crystal bracelets">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4">Our Mission</h2>
          <p className="text-[#5c5c5c] mb-4 leading-relaxed">
            At Yumiere, we believe in the transformative power of crystals to enhance wellbeing, promote healing,
            and manifest positive energy in your life.
          </p>
          <p className="text-[#5c5c5c] mb-4 leading-relaxed">
            Our mission is to create beautiful, high-quality crystal jewelry that not only looks stunning but also
            serves as a powerful tool for your spiritual and emotional journey.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed">
            Each piece is thoughtfully designed, ethically sourced, and handcrafted with intention to help you harness
            the natural energies of the earth's most precious stones.
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
            Every bracelet is carefully assembled by our skilled artisans, ensuring the highest quality and attention to
            detail.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e5e0d5]">
          <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-3">Ethically Sourced</h3>
          <p className="text-[#5c5c5c]">
            We partner with responsible suppliers who share our commitment to ethical mining practices and fair labor
            conditions.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#e5e0d5]">
          <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-3">Energy Infused</h3>
          <p className="text-[#5c5c5c]">
            Each bracelet is cleansed, charged under moonlight, and infused with positive intentions before being sent
            to you.
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
