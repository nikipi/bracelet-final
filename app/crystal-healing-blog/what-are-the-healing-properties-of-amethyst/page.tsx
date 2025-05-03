import CrystalDetailTemplate from "@/components/crystal-detail-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Are the Healing Properties of Amethyst? | Crystal Healing",
  description:
    "Discover the powerful healing properties of Amethyst crystal for calm, balance, and spiritual growth. Learn how this purple stone can enhance your meditation and sleep.",
  keywords:
    "amethyst healing properties, amethyst benefits, amethyst crystal, purple crystal, spiritual stone, third eye chakra, crown chakra, crystal healing",
  openGraph: {
    title: "What Are the Healing Properties of Amethyst?",
    description:
      "Discover the powerful healing properties of Amethyst crystal for calm, balance, and spiritual growth. Learn how this purple stone can enhance your meditation and sleep.",
    images: [
      {
        url: "/images/amethyst.png",
        width: 1200,
        height: 630,
        alt: "Amethyst crystal - the purple stone of spiritual healing and calm",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Are the Healing Properties of Amethyst?",
    description:
      "Discover the powerful healing properties of Amethyst crystal for calm, balance, and spiritual growth. Learn how this purple stone can enhance your meditation and sleep.",
    images: ["/images/amethyst.png"],
  },
}

export default function AmethystPage() {
  return (
    <CrystalDetailTemplate
      name="What Are the Healing Properties of Amethyst?"
      category="Healing"
      categoryPath="/crystal-properties/healing"
      image="/images/amethyst.png"
      description="A powerful healing stone that promotes calm, balance, and peace"
      longDescription="Amethyst is a purple variety of quartz that has been highly esteemed throughout the ages for its stunning beauty and legendary powers to stimulate, and soothe, the mind and emotions.The name Amethyst derives from the ancient Greek word 'amethystos', meaning 'not intoxicated', as it was believed to protect its owner from drunkenness. Ancient Greeks and Romans would wear amethyst and make drinking vessels from it in the belief that it would prevent intoxication.Amethyst is a meditative and calming stone that works in the emotional, spiritual, and physical planes to promote calm, balance, and peace. It is also used to eliminate impatience and balance highs and lows. It has strong healing and cleansing powers and enhances spiritual awareness."
      chakras={["Third Eye", "Crown"]}
      elements={["Air", "Water"]}
      zodiacSigns={["Virgo", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]}
      benefits={[
        "Calms the mind and reduces stress and anxiety",
        "Enhances intuition and spiritual awareness",
        "Promotes restful sleep and helps with insomnia",
        "Supports sobriety and overcoming addictions",
        "Balances mood swings and emotional extremes",
        "Enhances memory and improves motivation",
        "Helps with decision-making and clear thinking",
      ]}
      uses={[
        "Place under your pillow or on your bedside table to improve sleep quality",
        "Meditate with amethyst to enhance spiritual connection",
        "Wear as jewelry to maintain calm throughout the day",
        "Place in your workspace to enhance focus and reduce stress",
        "Use during yoga or meditation to deepen your practice",
        "Place in the home to create a peaceful atmosphere",
      ]}
      pairsWith={[
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
        { name: "Rose Quartz", path: "/crystal-healing-blog/what-is-rose-quartz-good-for", imageUrl: "/images/rose-quartz-bead.png" },
        { name: "Citrine", path: "/crystal-healing-blog/citrine-crystal-meaning", imageUrl: "/images/citrine-bead.png" },
        { name: "Black Tourmaline", path: "/crystal-healing-blog/how-does-black-tourmaline-protect-your-energy", imageUrl: "/images/black-tourmaline-bead.png" },
      ]}
      price="$89.99"
      productLink="/shop/healing-bracelet"
    />
  )
}
