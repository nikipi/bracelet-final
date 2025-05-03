import CrystalDetailTemplate from "@/components/crystal-detail-template"



import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Green Aventurine Benefits: Luck, Growth & Prosperity | Crystal Healing",
  description:
    "Discover the healing properties of Green Aventurine, the stone of opportunity that attracts abundance, growth, and new beginnings. Learn about its benefits and how to use it for spiritual growth.",
  keywords:
    "green aventurine, green aventurine benefits, green aventurine properties, stone of opportunity, luck, growth, prosperity, crystal healing, spiritual growth, crystal properties",
  openGraph: {
    title: "Green Aventurine Benefits: Luck, Growth & Prosperity",
    description:
      "Discover the healing properties of Green Aventurine, the stone of opportunity that attracts abundance, growth, and new beginnings. Learn about its benefits and how to use it for spiritual growth.",
    images: [
      {
        url: "/images/green-aventurine.png",
        width: 1200,
        height: 630,
        alt: "Green aventurine crystal - the stone of opportunity that attracts abundance, growth, and new beginnings",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Aventurine Benefits: Luck, Growth & Prosperity",
    description:
      "Discover the healing properties of Green Aventurine, the stone of opportunity that attracts abundance, growth, and new beginnings. Learn about its benefits and how to use it for spiritual growth.",
    images: ["/images/green-aventurine.png"],
  },
}


export default function GreenAventurinePage() {
  return (
    <CrystalDetailTemplate
      name="Green Aventurine Benefits: Luck, Growth & Prosperity"
      category="Abundance"
      categoryPath="/crystal-properties/abundance"
      image="/images/green-aventurine.png"
      description="A stone of luck and opportunity that attracts abundance, growth, and new beginnings"
      longDescription="Green Aventurine is known as the 'Stone of Opportunity,' thought to be the luckiest of all crystals, especially in manifesting prosperity and wealth. Its soft green shimmer comes from tiny inclusions of fuchsite, giving it a calming, optimistic energy. Historically used in talismans and lucky charms, Green Aventurine not only attracts abundance but also supports emotional healing and confidence. It helps release old patterns, encouraging personal growth and a fresh perspective on life. It's a go-to crystal for anyone starting new ventures or seeking to invite good fortune."
      chakras={["Heart"]}
      elements={["Earth"]}
      zodiacSigns={["Aries", "Leo", "Virgo"]}
      benefits={[
        "Attracts abundance, success, and good luck",
        "Promotes emotional recovery and optimism",
        "Encourages growth, both personal and financial",
        "Supports the heart and soothes emotional wounds",
        "Inspires creativity and motivation",
        "Helps release old habits and welcome change",
      ]}
      uses={[
        "Carry in your wallet or purse to attract financial luck",
        "Place on your desk to inspire motivation and opportunity",
        "Wear during job interviews or new endeavors",
        "Use in manifestation rituals focused on growth and success",
        "Keep in your home or office to create a fresh, prosperous energy",
      ]}
      pairsWith={[
        { name: "Citrine", path: "/crystal-healing-blog/citrine-crystal-meaning", imageUrl: "/images/citrine-bead.png" },
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
        { name: "Moonstone", path: "/crystal-healing-blog/moonstone-properties", imageUrl: "/images/moonstone-bead.png" },
        { name: "Rose Quartz", path: "/crystal-healing-blog/what-is-rose-quartz-good-for", imageUrl: "/images/rose-quartz-bead.png" },
      ]}
      price="$79.00"
      productLink="/shop/abundance-bracelet"
    />
  )
}
