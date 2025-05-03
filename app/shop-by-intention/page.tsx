import InfoPageLayout from "@/components/info-page-layout"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const intentions = [
  {
    id: "intuition",
    title: "Intuition",
    description:
      "Enhance your inner knowing and psychic abilities with crystals that open the third eye and crown chakras.",
    image: "/images/crystal-bracelet-blue.png",
    crystals: ["Amethyst", "Labradorite", "Moonstone", "Clear Quartz"],
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    id: "strength",
    title: "Strength",
    description:
      "Build resilience and courage with grounding crystals that enhance your personal power and determination.",
    image: "/images/crystal-bracelet.png",
    crystals: ["Tiger's Eye", "Red Jasper", "Hematite", "Black Tourmaline"],
    color: "bg-red-100 text-red-800",
  },
  {
    id: "self-love",
    title: "Self-Love",
    description:
      "Nurture your heart and cultivate self-compassion with gentle crystals that promote emotional healing.",
    image: "/images/crystal-bracelet.png",
    crystals: ["Rose Quartz", "Rhodonite", "Green Aventurine", "Jade"],
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: "tranquility",
    title: "Tranquility",
    description: "Find peace and calm amidst life's chaos with soothing crystals that reduce stress and anxiety.",
    image: "/images/crystal-bracelet-blue.png",
    crystals: ["Amethyst", "Blue Lace Agate", "Selenite", "Aquamarine"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: "abundance",
    title: "Abundance",
    description: "Attract prosperity and success with crystals that open you to receiving wealth in all forms.",
    image: "/images/crystal-bracelet-blue.png",
    crystals: ["Citrine", "Pyrite", "Green Aventurine", "Clear Quartz"],
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    id: "protection",
    title: "Protection",
    description:
      "Create energetic shields and boundaries with crystals that deflect negative energy and provide spiritual safety.",
    image: "/images/crystal-bracelet.png",
    crystals: ["Black Tourmaline", "Obsidian", "Smoky Quartz", "Hematite"],
    color: "bg-gray-100 text-gray-800",
  },
]

export default function ShopByIntentionPage() {
  return (
    <InfoPageLayout
      title="Shop By Intention"
      subtitle="Discover crystals and jewelry designed to support your specific energy needs and intentions"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {intentions.map((intention) => (
          <div key={intention.id} className="bg-white rounded-xl shadow-sm border border-[#e5e0d5] overflow-hidden">
            <div className="relative h-48">
              <Image src={intention.image || "/placeholder.svg"} alt={intention.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${intention.color}`}>
                  {intention.title}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-2">{intention.title}</h3>
              <p className="text-[#5c5c5c] text-sm mb-4">{intention.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-[#2c2c2c] mb-2">Key Crystals:</h4>
                <div className="flex flex-wrap gap-2">
                  {intention.crystals.map((crystal) => (
                    <span key={crystal} className="px-2 py-1 bg-[#f8f5f0] text-[#5c5c5c] rounded text-xs">
                      {crystal}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={`/shop/intention/${intention.id}`}>
                <Button className="w-full bg-[#c9a87c] hover:bg-[#b89b72] text-white">
                  Shop {intention.title} Jewelry
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#f0ebe2] p-8 rounded-xl mb-16">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4">
            Not Sure Which Intention Is Right For You?
          </h2>
          <p className="text-[#5c5c5c] max-w-2xl mx-auto">
            Take our quick crystal quiz to discover which crystals and intentions align best with your current energy
            needs and life circumstances.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/build-your-own-crystal-jewelry">
            <Button className="bg-[#c9a87c] hover:bg-[#b89b72] text-white px-8 py-3">Take The Crystal Quiz</Button>
          </Link>
        </div>
      </div>
    </InfoPageLayout>
  )
}
