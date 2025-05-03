import CrystalDetailTemplate from "@/components/crystal-detail-template"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lapis Lazuli Meaning: Wisdom, Intuition & Ancient Power | Crystal Healing",
  description:
    "Explore Lapis Lazuli's deep connection to wisdom, intuition, and ancient power. Learn how this royal blue stone enhances intellectual ability and inner vision.",
  keywords:
    "lapis lazuli, lapis lazuli meaning, lapis lazuli benefits, wisdom stone, intuition crystal, third eye stone, throat chakra, crystal healing",
  openGraph: {
    title: "Lapis Lazuli Meaning: Wisdom, Intuition & Ancient Power",
    description:
      "Explore Lapis Lazuli's deep connection to wisdom, intuition, and ancient power. Learn how this royal blue stone enhances intellectual ability and inner vision.",
    images: [
      {
        url: "/images/lapis-lazuli.png",
        width: 1200,
        height: 630,
        alt: "Lapis Lazuli crystal - the deep blue stone of wisdom and ancient power",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lapis Lazuli Meaning: Wisdom, Intuition & Ancient Power",
    description:
      "Explore Lapis Lazuli's deep connection to wisdom, intuition, and ancient power. Learn how this royal blue stone enhances intellectual ability and inner vision.",
    images: ["/images/lapis-lazuli.png"],
  },
}





export default function LapisLazuliPage() {
  return (
    <CrystalDetailTemplate
      name="Lapis Lazuli Meaning: Wisdom, Intuition & Ancient Power"
      category="Wisdom"
      categoryPath="/crystal-properties/wisdom"
      image="/images/lapis-lazuli.png"
      description="A stone of truth and wisdom that enhances intellectual ability and inner vision"
      longDescription="Lapis Lazuli is a deep blue stone flecked with gold, treasured since ancient times by Egyptian pharaohs and medieval scholars. Known as a symbol of royalty and honor, it’s associated with wisdom, truth, and spiritual insight. It was once ground into powder for ultramarine pigment, the most precious blue used in Renaissance paintings. Lapis Lazuli opens the mind, enhances memory and intellect, and helps with truthful communication. It also encourages self-awareness and deep inner reflection."
      chakras={["Throat", "Third Eye"]}
      elements={["Water"]}
      zodiacSigns={["Sagittarius", "Libra", "Taurus"]}
      benefits={[
        "Enhances intellectual ability and critical thinking",
        "Promotes honest communication and expression",
        "Encourages spiritual growth and inner truth",
        "Supports emotional healing and self-acceptance",
        "Improves memory and learning capacity",
        "Relieves stress and brings deep inner peace",
      ]}
      uses={[
        "Meditate with it to deepen inner vision and wisdom",
        "Wear near the throat to aid in truthful expression",
        "Keep on your desk to support clarity in communication",
        "Use in rituals to enhance spiritual connection",
        "Place in study areas to improve concentration",
      ]}
      pairsWith={[
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
        { name: "Moonstone", path: "/crystal-healing-blog/moonstone-properties", imageUrl: "/images/moonstone-bead.png" },
        { name: "Amethyst", path: "/crystal-healing-blog/what-are-the-healing-properties-of-amethyst", imageUrl: "/images/amethyst-bead.png" },
        { name: "Tiger’s Eye", path: "/crystal-healing-blog/tigers-eye-benefits", imageUrl: "/images/tigers-eye-bead.png" },
      ]}
      price="$92.00"
      productLink="/shop/wisdom-bracelet"
    />
  )
}
