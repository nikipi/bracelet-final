import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export type CrystalDetailProps = {
  name: string
  category: string
  categoryPath: string
  image: string
  description: string
  longDescription: string
  chakras: string[]
  elements: string[]
  zodiacSigns: string[]
  benefits: string[]
  uses: string[]
  pairsWith: Array<{
    name: string
    path: string
    imageUrl: string
  }>
  price: string
  productLink: string
}

export default function CrystalDetailTemplate({
  name,
  category,
  categoryPath,
  image,
  description,
  longDescription,
  chakras,
  elements,
  zodiacSigns,
  benefits,
  uses,
  pairsWith,
  price,
  productLink,
}: CrystalDetailProps) {
  return (
    <InfoPageLayout title={name} subtitle={description}>
      <div className="mb-10 px-4 md:px-8">
        <Link
          href="/crystal-healing-blog"
          className="inline-flex items-center text-[#c9a87c] hover:text-[#b89b72] transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      {/* 2x2 Grid */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 px-4 md:px-8">
        {/* Image */}
        <div className="order-1 md:order-1 flex justify-center">
          <div className="relative w-full max-w-[400px] h-[400px]">
            <Image
              src={image}
              alt={name}
              className="object-cover rounded-xl"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="order-2 md:order-2 space-y-6">
          <h2 className="font-serif text-2xl font-light text-[#2c2c2c]">Benefits & Properties</h2>
          <ul className="space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start">
                <span className="text-[#c9a87c] mr-2">✦</span>
                <span className="text-[#5c5c5c]">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold mb-2">Chakras</h2>
              <ul className="list-disc list-inside">
                {chakras.map((chakra) => (
                  <li key={chakra}>{chakra}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Elements</h2>
              <ul className="list-disc list-inside">
                {elements.map((element) => (
                  <li key={element}>{element}</li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-2"> Best Zodiac Match</h2>
          <div className="flex flex-wrap gap-2">
            {zodiacSigns.map((sign) => (
              <span key={sign} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                {sign}
              </span>
            ))}
          </div>

        </div>

        {/* About */}
        <div className="order-3 md:order-3 space-y-6">
          <h2 className="font-serif text-2xl font-light text-[#2c2c2c]">About {name}</h2>
          <div className="text-[#5c5c5c] space-y-4 leading-relaxed">
          {longDescription.split("\\n\\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
          ))}
          </div>
        </div>

        {/* How to Use */}
        <div className="order-4 md:order-4 space-y-6">
          <h2 className="font-serif text-2xl font-light text-[#2c2c2c]">How to Use</h2>
          <ul className="space-y-3">
            {uses.map((use) => (
              <li key={use} className="flex items-start">
                <span className="text-[#c9a87c] mr-2">•</span>
                <span className="text-[#5c5c5c]">{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pairs Well With */}
      <div className="mb-20 px-4 md:px-8">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-8 text-center">
          Pairs Well With These Crystals
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pairsWith.map((crystal) => (
            <Link
              key={crystal.name}
              href={crystal.path}
              className="bg-white p-4 rounded-lg shadow-sm border border-[#e5e0d5] text-center hover:shadow-md transition-shadow"
            >
              <img
                src={crystal.imageUrl}
                alt={crystal.name}
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <h3 className="font-medium text-[#2c2c2c]">{crystal.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Crystal Care Tips */}
      <div className="bg-[#f0ebe2] px-6 py-10 rounded-xl mb-24">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-10 text-center">
          Crystal Care Tips
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cleansing",
              step: "1",
              text: `Cleanse your ${name} monthly by placing it in moonlight, using sound, or smudging with sage to clear absorbed energies.`,
            },
            {
              title: "Charging",
              step: "2",
              text: `Recharge your ${name} by placing it in sunlight (for most crystals) or moonlight, or on a selenite charging plate.`,
            },
            {
              title: "Setting Intentions",
              step: "3",
              text: `Hold your ${name} in your hand, close your eyes, and set a clear intention for what you'd like to manifest or heal.`,
            },
          ].map(({ title, step, text }) => (
            <div key={step} className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto text-[#c9a87c] font-bold text-lg">
                {step}
              </div>
              <h3 className="font-medium text-[#2c2c2c]">{title}</h3>
              <p className="text-[#5c5c5c] text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </InfoPageLayout>
  )
}
