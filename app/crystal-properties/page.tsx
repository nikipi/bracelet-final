"use client"

import InfoPageLayout from "@/components/info-page-layout"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState, useCallback, Suspense } from "react"

const CRYSTAL_CATEGORIES = {
  "inner-peace": [
    { 
      name: "Amethyst", 
      img: "/images/amethyst-bead.png", 
      slug: "amethyst",
      url: "/crystal-healing-blog/what-are-the-healing-properties-of-amethyst",
      description: "A powerful stone for inner peace and spiritual growth. Amethyst calms the mind, enhances meditation, and promotes deep sleep." 
    },
    { 
      name: "Lapis Lazuli", 
      img: "/images/lapis-lazuli-bead.png", 
      slug: "lapis-lazuli",
      url: "/crystal-healing-blog/lapis-lazuli-meaning",
      description: "Stone of truth and wisdom, enhancing mental clarity and self-awareness." 
    },
    { 
      name: "Moonstone", 
      img: "/images/moonstone-bead.png", 
      slug: "moonstone",
      url: "/crystal-healing-blog/moonstone-properties",
      description: "Promotes emotional balance and inner harmony." 
    },
    { 
      name: "Clear Quartz", 
      img: "/images/clear-quartz-bead.png", 
      slug: "clear-quartz",
      url: "/crystal-healing-blog/clear-quartz-meaning",
      description: "Amplifies energy and thought, helping to achieve clarity and peace." 
    },
  ],
  "abundance": [
    { 
      name: "Citrine", 
      img: "/images/citrine-bead.png", 
      slug: "citrine",
      url: "/crystal-healing-blog/citrine-crystal-meaning",
      description: "Known as the 'merchant's stone,' Citrine attracts abundance and prosperity." 
    },
    { 
      name: "Green Aventurine", 
      img: "/images/green-aventurine-bead.png", 
      slug: "green-aventurine",
      url: "/crystal-healing-blog/green-aventurine-benefits",
      description: "Lucky stone that invites wealth and success." 
    },
    { 
      name: "Jade", 
      img: "/images/jade-bead.png", 
      slug: "jade",
      url: "/crystal-healing-blog/what-are-the-benefits-of-jade-harmony-and-abundance-explained",
      description: "Symbol of purity and serenity, attracting good luck and friendship." 
    },
    { 
      name: "Amazonite", 
      img: "/images/amazonite-bead.png", 
      slug: "amazonite",
      url: "/crystal-healing-blog/what-are-the-benefits-of-amazonite-calm-communication-and-truth-explained",
      description: "Promotes success, abundance, and courage." 
    },
  ],
  "protection": [
    { 
      name: "Black Tourmaline", 
      img: "/images/black-tourmaline-bead.png", 
      slug: "black-tourmaline",
      url: "/crystal-healing-blog/how-does-black-tourmaline-protect-your-energy",
      description: "Protects against negative energies and promotes grounding." 
    },
    { 
      name: "Tiger's Eye", 
      img: "/images/tigers-eye-bead.png", 
      slug: "tigers-eye",
      url: "/crystal-healing-blog/tigers-eye-benefits",
      description: "Stone of protection, enhancing willpower and self-confidence." 
    },
    { 
      name: "Clear Quartz", 
      img: "/images/clear-quartz-bead.png", 
      slug: "clear-quartz",
      url: "/crystal-healing-blog/clear-quartz-meaning",
      description: "Shields against negativity by amplifying positivity." 
    },
    { 
      name: "Amethyst", 
      img: "/images/amethyst-bead.png", 
      slug: "amethyst",
      url: "/crystal-healing-blog/what-are-the-healing-properties-of-amethyst",
      description: "Calms the aura, offering spiritual protection and purification." 
    },
  ],
  "self-love": [
    { 
      name: "Rose Quartz", 
      img: "/images/rose-quartz-bead.png", 
      slug: "rose-quartz",
      url: "/crystal-healing-blog/what-is-rose-quartz-good-for",
      description: "Stone of unconditional love, opening the heart to all forms of love." 
    },
    { 
      name: "Amazonite", 
      img: "/images/amazonite-bead.png", 
      slug: "amazonite",
      url: "/crystal-healing-blog/what-are-the-benefits-of-amazonite-calm-communication-and-truth-explained",
      description: "Encourages compassion and self-acceptance." 
    },
    { 
      name: "Moonstone", 
      img: "/images/moonstone-bead.png", 
      slug: "moonstone",
      url: "/crystal-healing-blog/moonstone-properties",
      description: "Connects with feminine energy and self-care." 
    },
    { 
      name: "Green Aventurine", 
      img: "/images/green-aventurine-bead.png", 
      slug: "green-aventurine",
      url: "/crystal-healing-blog/green-aventurine-benefits",
      description: "Promotes emotional healing and confidence." 
    },
  ],
} as const

const DEFAULT_TAB = "inner-peace"

function formatCategoryLabel(category: string) {
  return category
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

export default function CrystalPropertiesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CrystalPropertiesContent />
    </Suspense>
  )
}

function CrystalPropertiesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<string>(DEFAULT_TAB)

  useEffect(() => {
    const category = searchParams.get("category")
    if (category && Object.hasOwn(CRYSTAL_CATEGORIES, category)) {
      setActiveTab(category)
    } else {
      setActiveTab(DEFAULT_TAB)
    }
  }, [searchParams])

  const handleTabChange = useCallback((value: string) => {
    setActiveTab(value)
    router.push(`/crystal-properties?category=${value}`)
  }, [router])

  return (
    <InfoPageLayout
      title="The Ultimate Crystal Guide"
      subtitle="Discover the unique meaning, benefits, and properties of our crystals"
    >
      <div className="mb-12 text-center">
        <p className="text-[#5c5c5c] max-w-3xl mx-auto">
          For millennia, cultures around the world have cherished crystals for their healing properties and spiritual significance...
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-16">
      <TabsList className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-16">
          {Object.keys(CRYSTAL_CATEGORIES).map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="data-[state=active]:bg-[#c9a87c] data-[state=active]:text-white capitalize"
            >
              {formatCategoryLabel(category)}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(CRYSTAL_CATEGORIES).map(([category, crystals]) => (
          <TabsContent key={category} value={category} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {crystals.map((crystal) => (
                <Link key={crystal.slug} href={crystal.url} className="block group">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] flex gap-4 transition-all group-hover:shadow-lg group-hover:scale-105">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={crystal.img}
                        alt={`${crystal.name} crystal`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#2c2c2c] mb-1">
                        {crystal.name}
                      </h3>
                      <p className="text-[#5c5c5c] text-sm">
                        {crystal.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>


      <div className="bg-[#f0ebe2] p-8 rounded-xl mb-13">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-6 text-center">How to Work with Crystals</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-[#c9a87c] font-bold text-1.8xl">
              1
            </div>
            <h3 className="font-medium text-[#2c2c2c] mb-2">Set an Intention</h3>
            <p className="text-[#5c5c5c] text-sm">
              Hold your crystal in your hand, close your eyes, and set a clear intention for what you'd like to manifest
              with it.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-[#c9a87c] font-bold text-1.8xl">
              2
            </div>
            <h3 className="font-medium text-[#2c2c2c] mb-2">Wear with Purpose</h3>
            <p className="text-[#5c5c5c] text-sm">
              Wear your crystal bracelet throughout the day to maintain a connection with its energy and your intention.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-[#c9a87c] font-bold text-1.8xl">
              3
            </div>
            <h3 className="font-medium text-[#2c2c2c] mb-2">Cleanse Regularly</h3>
            <p className="text-[#5c5c5c] text-sm">
              Cleanse your crystals monthly by placing them in moonlight, using sound, or smudging with sage to clear
              absorbed energies.
            </p>
          </div>
        </div>
      </div>

    </InfoPageLayout>
  )
}

