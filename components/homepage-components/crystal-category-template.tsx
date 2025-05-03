import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingBag } from "lucide-react"

export type CrystalInfo = {
  name: string
  image: string
  description: string
  benefits: string[]
  uses: string[]
  price: string
  productLink: string
}

interface CrystalCategoryTemplateProps {
  title: string
  subtitle: string
  description: string
  crystals: CrystalInfo[]
}

export default function CrystalCategoryTemplate({
  title,
  subtitle,
  description,
  crystals,
}: CrystalCategoryTemplateProps) {
  return (
    <InfoPageLayout title={title} subtitle={subtitle}>
      <div className="mb-12 text-center">
        <p className="text-[#5c5c5c] max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="mb-8">
        <Link
          href="/crystal-properties"
          className="inline-flex items-center text-[#c9a87c] hover:text-[#b89b72] transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Crystal Properties
        </Link>
      </div>

      <div className="space-y-16 mb-16">
        {crystals.map((crystal, index) => (
          <div
            key={crystal.name}
            className={`grid md:grid-cols-2 gap-8 ${index > 0 ? "pt-16 border-t border-[#e5e0d5]" : ""}`}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image src={crystal.image || "/placeholder.svg"} alt={crystal.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">{crystal.name}</h2>
              <p className="text-[#5c5c5c] mb-6 leading-relaxed">{crystal.description}</p>

              <div className="mb-6">
                <h3 className="font-medium text-[#2c2c2c] mb-3">Key Benefits:</h3>
                <ul className="space-y-2">
                  {crystal.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <span className="text-[#c9a87c] mr-2">✦</span>
                      <span className="text-[#5c5c5c]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-medium text-[#2c2c2c] mb-3">How to Use:</h3>
                <ul className="space-y-2">
                  {crystal.uses.map((use) => (
                    <li key={use} className="flex items-start">
                      <span className="text-[#c9a87c] mr-2">•</span>
                      <span className="text-[#5c5c5c]">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-2xl font-medium text-[#c9a87c]">{crystal.price}</div>
                <Link href={crystal.productLink}>
                  <Button className="bg-[#c9a87c] hover:bg-[#b89b72] text-white">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f0ebe2] p-8 rounded-xl mb-16">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-6 text-center">Crystal Care Tips</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-[#c9a87c]">
              1
            </div>
            <h3 className="font-medium text-[#2c2c2c] mb-2">Cleansing</h3>
            <p className="text-[#5c5c5c] text-sm">
              Cleanse your crystals monthly by placing them in moonlight, using sound, or smudging with sage to clear
              absorbed energies.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-[#c9a87c]">
              2
            </div>
            <h3 className="font-medium text-[#2c2c2c] mb-2">Charging</h3>
            <p className="text-[#5c5c5c] text-sm">
              Recharge your crystals by placing them in sunlight (for most crystals) or moonlight, or on a selenite
              charging plate.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-[#c9a87c]">
              3
            </div>
            <h3 className="font-medium text-[#2c2c2c] mb-2">Setting Intentions</h3>
            <p className="text-[#5c5c5c] text-sm">
              Hold your crystal in your hand, close your eyes, and set a clear intention for what you'd like to manifest
              or heal.
            </p>
          </div>
        </div>
      </div>
    </InfoPageLayout>
  )
}
