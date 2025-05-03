import CrystalDetailTemplate from "@/components/crystal-detail-template"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tiger's Eye Benefits: Courage, Confidence & Focus | Crystal Healing",
  description:
    "Discover how Tiger's Eye crystal boosts courage, confidence, and personal power. Learn about its grounding properties, benefits, and practical uses.",
  keywords:
    "tiger's eye, tiger eye crystal, tiger's eye benefits, courage crystal, confidence stone, personal power, grounding stone, crystal healing",
  openGraph: {
    title: "Tiger's Eye Benefits: Courage, Confidence & Focus",
    description:
      "Discover how Tiger's Eye crystal boosts courage, confidence, and personal power. Learn about its grounding properties, benefits, and practical uses.",
    images: [
      {
        url: "/images/tigers-eye.png",
        width: 1200,
        height: 630,
        alt: "Tiger's Eye crystal - the golden-brown stone of courage and confidence",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiger's Eye Benefits: Courage, Confidence & Focus",
    description:
      "Discover how Tiger's Eye crystal boosts courage, confidence, and personal power. Learn about its grounding properties, benefits, and practical uses.",
    images: ["/images/tigers-eye.png"],
  },
}

export default function TigersEyePage() {
  return (
    <CrystalDetailTemplate
      name="Tiger's Eye Benefits: Courage, Confidence & Focus"
      category="Confidence"
      categoryPath="/crystal-properties/confidence"
      image="/images/tigers-eye.png"
      description="A grounding stone that boosts courage, confidence, and personal power"
      longDescription="Tiger’s Eye is a captivating golden-brown stone known for its silky luster and shifting light. Used throughout history as a talisman against ill wishes and curses, it combines the energy of the earth and the sun to create a high-vibrational state that is grounded yet inspiring. It is a stone of willpower, motivation, and balanced strength. Tiger’s Eye encourages decisiveness, sharpens the mind, and enhances personal power. It's often used to help achieve goals and remain centered under pressure."
      chakras={["Solar Plexus", "Root"]}
      elements={["Earth", "Fire"]}
      zodiacSigns={["Leo", "Capricorn", "Gemini"]}
      benefits={[
        "Boosts confidence and inner strength",
        "Aids in decision-making and mental clarity",
        "Promotes courage and resilience",
        "Balances emotional extremes",
        "Grounds energy and wards off negativity",
        "Enhances willpower and motivation",
      ]}
      uses={[
        "Wear during public speaking or interviews for confidence",
        "Keep on your desk to stay focused on goals",
        "Use in manifestation rituals for courage and success",
        "Carry in your pocket to stay grounded and brave",
        "Place near the front door to protect your home",
      ]}
      pairsWith={[
        { name: "Rose Quartz", path: "/crystal-healing-blog/what-is-rose-quartz-good-for", imageUrl: "/images/rose-quartz-bead.png" },
        { name: "Citrine", path: "/crystal-healing-blog/citrine-crystal-meaning", imageUrl: "/images/citrine-bead.png" },
        { name: "Black Tourmaline", path: "/crystal-healing-blog/how-does-black-tourmaline-protect-your-energy", imageUrl: "/images/black-tourmaline-bead.png" },
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
      ]}
      price="$74.99"
      productLink="/shop/confidence-bracelet"
    />
  )
}
