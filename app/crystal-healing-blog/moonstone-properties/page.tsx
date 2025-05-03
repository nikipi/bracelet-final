import CrystalDetailTemplate from "@/components/crystal-detail-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Moonstone Properties: Intuition & Emotional Balance | Crystal Healing",
  description:
    "Discover the benefits of Moonstone crystal for intuition, emotional balance, and divine feminine energy. Learn how this mystical stone supports emotional healing and self-discovery.",
  keywords:
    "moonstone properties, moonstone benefits, moonstone crystal, intuition stone, emotional balance, divine feminine, crystal healing",
  openGraph: {
    title: "Moonstone Properties: Intuition & Emotional Balance",
    description:
      "Discover the benefits of Moonstone crystal for intuition, emotional balance, and divine feminine energy. Learn how this mystical stone supports emotional healing and self-discovery.",
    images: [
      {
        url: "/images/moonstone.png",
        width: 1200,
        height: 630,
        alt: "Moonstone crystal - the mystical stone of intuition and emotional balance",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonstone Properties: Intuition & Emotional Balance",
    description:
      "Discover the benefits of Moonstone crystal for intuition, emotional balance, and divine feminine energy. Learn how this mystical stone supports emotional healing and self-discovery.",
    images: ["/images/moonstone.png"],
  },
}


export default function MoonstonePage() {
  return (
    <CrystalDetailTemplate
      name="Moonstone Properties: Intuition & Emotional Balance"
      category="Intuition"
      categoryPath="/crystal-properties/intuition"
      image="/images/moonstone.png"
      description="A mystical stone that enhances intuition, emotional balance, and divine feminine energy"
      longDescription="Moonstone is a luminous stone with an ethereal glow, long associated with lunar energy, the divine feminine, and cycles of change. Revered in ancient cultures for its connection to the moon and intuition, it's believed to be a powerful aid in new beginnings and emotional healing. Moonstone calms the mind, promotes emotional balance, and supports inner growth. It's also associated with fertility, creativity, and gentle nurturing energy, making it ideal for meditation and reflection."
      chakras={["Crown", "Third Eye", "Sacral"]}
      elements={["Water"]}
      zodiacSigns={["Cancer", "Libra", "Scorpio"]}
      benefits={[
        "Supports emotional healing and self-discovery",
        "Promotes intuition and inner guidance",
        "Helps with hormonal balance and cycles",
        "Calms emotional reactivity and stress",
        "Encourages reflection and personal growth",
        "Aids restful sleep and dream work",
      ]}
      uses={[
        "Wear during meditation to connect with intuition",
        "Place under your pillow to enhance dream recall",
        "Keep near you during moon rituals or full moon ceremonies",
        "Carry when starting a new chapter in life",
        "Use in fertility or nurturing practices",
      ]}
      pairsWith={[
        { name: "Black Tourmaline", path: "/crystal-healing-blog/how-does-black-tourmaline-protect-your-energy", imageUrl: "/images/black-tourmaline-bead.png" },
        { name: "Rose Quartz", path: "/crystal-healing-blog/what-is-rose-quartz-good-for", imageUrl: "/images/rose-quartz-bead.png" },
        { name: "Amethyst", path: "/crystal-healing-blog/what-are-the-healing-properties-of-amethyst", imageUrl: "/images/amethyst-bead.png" },
        { name: "Lapis Lazuli", path: "/crystal-healing-blog/lapis-lazuli-meaning", imageUrl: "/images/lapis-lazuli-bead.png" },
      ]}
      price="$84.50"
      productLink="/shop/intuition-bracelet"
    />
  )
}
