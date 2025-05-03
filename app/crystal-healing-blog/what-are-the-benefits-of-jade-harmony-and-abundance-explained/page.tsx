import CrystalDetailTemplate from "@/components/crystal-detail-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Are the Benefits of Jade? Harmony & Abundance Explained | Crystal Healing",
  description:
    "Explore the benefits of Jade crystal for harmony, abundance, and emotional well-being. Learn how this ancient stone promotes balance and prosperity.",
  keywords:
    "jade benefits, jade crystal, jade stone meaning, harmony crystal, abundance stone, prosperity crystal, emotional healing, crystal healing",
  openGraph: {
    title: "What Are the Benefits of Jade? Harmony & Abundance Explained",
    description:
      "Explore the benefits of Jade crystal for harmony, abundance, and emotional well-being. Learn how this ancient stone promotes balance and prosperity.",
    images: [
      {
        url: "/images/jade.png",
        width: 1200,
        height: 630,
        alt: "Jade crystal - the nurturing stone of harmony and abundance",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are the Benefits of Jade? Harmony & Abundance Explained",
    description:
      "Explore the benefits of Jade crystal for harmony, abundance, and emotional well-being. Learn how this ancient stone promotes balance and prosperity.",
    images: ["/images/jade.png"],
  },
}

export default function JadePage() {
  return (
    <CrystalDetailTemplate
      name="What Are the Benefits of Jade? Harmony & Abundance Explained"
      category="Harmony"
      categoryPath="/crystal-properties/harmony"
      image="/images/jade.png"
      description="A nurturing stone that promotes harmony, prosperity, and emotional well-being"
      longDescription="Jade is a revered stone in many cultures, symbolizing purity, serenity, and abundant luck. For centuries, it has been used in spiritual practices and royal adornments, especially in ancient China where it was seen as more precious than gold. Green Jade soothes the mind and encourages a sense of calm and balance. It’s known to attract prosperity and good fortune, while also supporting emotional healing, confidence, and compassion. Jade is perfect for those seeking to harmonize their energy and promote a peaceful life path."
      chakras={["Heart"]}
      elements={["Earth"]}
      zodiacSigns={["Taurus", "Libra", "Pisces"]}
      benefits={[
        "Promotes emotional balance and inner peace",
        "Attracts prosperity and good fortune",
        "Encourages confidence and self-sufficiency",
        "Supports physical healing and vitality",
        "Enhances love and nurturing energy",
        "Protects against negative influences",
      ]}
      uses={[
        "Carry in your pocket or bag to invite good luck",
        "Place in your workspace for a calm, productive atmosphere",
        "Wear as a pendant to stay grounded and emotionally balanced",
        "Use in manifestation rituals for abundance and growth",
        "Keep in the bedroom to promote harmony in relationships",
      ]}
      pairsWith={[
        { name: "Green Aventurine", path: "/crystal-healing-blog/green-aventurine-benefits", imageUrl: "/images/green-aventurine-bead.png" },
        { name: "Amazonite", path: "/crystal-healing-blog/what-are-the-benefits-of-amazonite-calm-communication-and-truth-explained", imageUrl: "/images/amazonite-bead.png" },
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
        { name: "Rose Quartz", path: "/crystal-healing-blog/what-is-rose-quartz-good-for", imageUrl: "/images/rose-quartz-bead.png" },
      ]}
      price="$82.00"
      productLink="/shop/harmony-bracelet"
    />
  )
}
