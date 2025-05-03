import CrystalDetailTemplate from "@/components/crystal-detail-template"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Citrine Crystal Meaning: How It Attracts Success & Wealth | Crystal Healing",
  description:
    "Discover how Citrine, the merchant's stone, attracts wealth, prosperity, and success. Learn about its properties, benefits, and how to use it for abundance.",
  keywords:
    "citrine crystal, citrine meaning, citrine benefits, prosperity crystal, abundance stone, wealth attraction, success stone, crystal healing",
  openGraph: {
    title: "Citrine Crystal Meaning: How It Attracts Success & Wealth",
    description:
      "Discover how Citrine, the merchant's stone, attracts wealth, prosperity, and success. Learn about its properties, benefits, and how to use it for abundance.",
    images: [
      {
        url: "/images/citrine.png",
        width: 1200,
        height: 630,
        alt: "Citrine crystal - the golden stone of abundance and prosperity",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citrine Crystal Meaning: How It Attracts Success & Wealth",
    description:
      "Discover how Citrine, the merchant's stone, attracts wealth, prosperity, and success. Learn about its properties, benefits, and how to use it for abundance.",
    images: ["/images/citrine.png"],
  },
}



export default function CitrinePage() {
  return (
    <CrystalDetailTemplate
      name="Citrine Crystal Meaning: How It Attracts Success & Wealth"
      category="Abundance"
      categoryPath="/crystal-properties/abundance"
      image="/images/citrine.png"
      description="The merchant's stone that attracts wealth, prosperity, and success"
      longDescription="Citrine is a transparent, yellow variety of Quartz, ranging in color from pale yellow to golden brown. It takes its name from the French word 'citron', meaning lemon. It's known as the 'merchant's stone' or 'success stone' for its ability to attract wealth, prosperity, and success.\n\nNatural Citrine is rare, and most commercial Citrine is heat-treated Amethyst or Smoky Quartz. The heat treatment gives the crystal a yellow to reddish-orange color, resembling the color of citrus fruits.\n\nCitrine carries the power of the sun and is one of the few crystals that never needs cleansing as it does not accumulate negative energy. Instead, it transmutes negative energy into positive energy. This makes it an excellent stone for personal and environmental protection."
      chakras={["Solar Plexus", "Sacral"]}
      elements={["Fire"]}
      zodiacSigns={["Aries", "Gemini", "Leo", "Libra"]}
      benefits={[
        "Attracts wealth, abundance, and prosperity",
        "Enhances creativity and manifestation abilities",
        "Boosts confidence and personal power",
        "Promotes generosity and sharing of wealth",
        "Brings optimism and positive energy",
        "Enhances mental clarity and decision-making",
        "Stimulates the imagination and creativity",
      ]}
      uses={[
        "Place in your wallet or cash register to attract money",
        "Keep in your workspace to enhance success and creativity",
        "Meditate with citrine while visualizing your abundance goals",
        "Wear as jewelry to maintain a prosperity mindset throughout the day",
        "Place in the wealth corner of your home (far left corner from the entrance)",
        "Combine with other abundance crystals to amplify manifestation power",
      ]}
      pairsWith={[
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
        { name: "Green Aventurine", path: "/crystal-healing-blog/green-aventurine-benefits", imageUrl: "/images/green-aventurine-bead.png" },
        { name: "Rose Quartz", path: "/crystal-healing-blog/what-is-rose-quartz-good-for", imageUrl: "/images/rose-quartz-bead.png" },
        { name: "Tiger's Eye", path: "/crystal-healing-blog/tigers-eye-benefits", imageUrl: "/images/tigers-eye-bead.png" },
      ]}
      price="$89.99"
      productLink="/shop/abundance-bracelet"
    />
  )
}
