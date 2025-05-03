import CrystalDetailTemplate from "@/components/crystal-detail-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "What Is Rose Quartz Good For? Benefits & Meaning | Crystal Healing",
  description:
    "Discover the healing properties of Rose Quartz crystal for love, self-love, and emotional well-being. Learn how this gentle pink stone nurtures the heart chakra and supports emotional healing.",
  keywords:
    "rose quartz good for, rose quartz benefits, rose quartz crystal, love stone, self-love, emotional healing, heart chakra, crystal healing",
  openGraph: {
    title: "What Is Rose Quartz Good For? Benefits & Meaning",
    description:
      "Discover the healing properties of Rose Quartz crystal for love, self-love, and emotional well-being. Learn how this gentle pink stone nurtures the heart chakra and supports emotional healing.",
    images: [
      {
        url: "/images/rose-quartz.png",
        width: 1200,
        height: 630,
        alt: "Rose Quartz crystal - the stone of unconditional love and emotional healing",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is Rose Quartz Good For? Benefits & Meaning",
    description:
      "Discover the healing properties of Rose Quartz crystal for love, self-love, and emotional well-being. Learn how this gentle pink stone nurtures the heart chakra and supports emotional healing.",
    images: ["/images/rose-quartz.png"],
  },
}

export default function RoseQuartzPage() {
  return (
    <CrystalDetailTemplate
      name="What Is Rose Quartz Good For? Benefits & Meaning"
      category="Healing"
      categoryPath="/crystal-properties/healing"
      image="/images/rose-quartz.png"
      description="The stone of unconditional love that opens the heart chakra"
      longDescription="Rose Quartz is the stone of universal love. It restores trust and harmony in relationships, encouraging unconditional love. Rose Quartz purifies and opens the heart at all levels to promote love, self-love, friendship, deep inner healing and feelings of peace.Believed to be the stone of the heart and the embodiment of love, Rose Quartz has been used as a love token since 600 BC. It was used in ancient times to balance emotions and bring peace and harmony. The ancient Egyptians believed that the stone could prevent aging.\n\nRose Quartz is a gentle pink stone that nurtures the heart chakra and encourages the dissolution of anger and resentment, replacing them with loving energy. It helps to heal emotional wounds and traumas, bringing comfort and calm during times of grief."
      chakras={["Heart"]}
      elements={["Water"]}
      zodiacSigns={["Taurus", "Libra"]}
      benefits={[
        "Promotes self-love and acceptance",
        "Heals emotional wounds and past traumas",
        "Attracts loving relationships and deepens existing ones",
        "Enhances compassion and empathy",
        "Soothes grief and helps with emotional healing",
        "Reduces stress and tension in the body",
        "Encourages forgiveness and letting go of resentment",
      ]}
      uses={[
        "Place near your bed to promote peaceful sleep and loving dreams",
        "Hold during meditation to open your heart chakra",
        "Wear as jewelry to attract and maintain loving relationships",
        "Place in the relationship corner of your home (far right corner from the entrance)",
        "Use in bath rituals for self-love practices",
        "Gift to loved ones to strengthen your bond",
      ]}
      pairsWith={[
        { name: "Amethyst", path: "/crystal-healing-blog/what-are-the-healing-properties-of-amethyst", imageUrl: "/images/amethyst-bead.png" },
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
        { name: "Green Aventurine", path: "/crystal-healing-blog/green-aventurine-benefits", imageUrl: "/images/green-aventurine-bead.png" },
        { name: "Black Tourmaline", path: "/crystal-healing-blog/how-does-black-tourmaline-protect-your-energy", imageUrl: "/images/black-tourmaline-bead.png" },
      ]}
      price="$79.99"
      productLink="/shop/love-bracelet"
    />
  )
}
