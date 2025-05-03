import CrystalDetailTemplate from "@/components/crystal-detail-template"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Amazonite Benefits: Calm Communication & Truth | Crystal Healing",
  description:
    "Discover how Amazonite crystal enhances communication, creativity, and inner peace. Learn about its calming properties and how to use it effectively.",
  keywords:
    "amazonite, amazonite benefits, communication crystal, throat chakra stone, calming crystal, creativity stone, crystal healing",
  openGraph: {
    title: "Amazonite Benefits: Calm Communication & Truth",
    description:
      "Discover how Amazonite crystal enhances communication, creativity, and inner peace. Learn about its calming properties and how to use it effectively.",
    images: [
      {
        url: "/images/amazonite.png",
        width: 1200,
        height: 630,
        alt: "Amazonite crystal - the turquoise-green stone of calm communication and truth",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazonite Benefits: Calm Communication & Truth",
    description:
      "Discover how Amazonite crystal enhances communication, creativity, and inner peace. Learn about its calming properties and how to use it effectively.",
    images: ["/images/amazonite.png"],
  },
}

export default function AmazonitePage() {
  return (
    <CrystalDetailTemplate
      name="Amazonite Benefits: Calm Communication & Truth"
      category="Communication"
      categoryPath="/crystal-properties/communication"
      image="/images/amazonite.png"
      description="A calming stone that enhances communication, creativity, and inner peace"
      longDescription="Amazonite is a beautiful turquoise-green stone known for its ability to calm the mind and soothe emotional turmoil. Named after the Amazon River, this stone has been used for centuries to balance the energies of the heart and throat chakras, facilitating clear and honest communication. Amazonite encourages self-expression and creativity, while also promoting a peaceful and balanced emotional state. It helps with stress, anxiety, and fear, creating a gentle space for healing and growth. Whether in conversations or creative pursuits, Amazonite supports your ability to communicate with clarity and compassion."
      chakras={["Throat", "Heart"]}
      elements={["Water", "Air"]}
      zodiacSigns={["Virgo", "Aquarius", "Leo"]}
      benefits={[
        "Enhances clear, honest communication",
        "Promotes creativity and self-expression",
        "Soothes stress and alleviates anxiety",
        "Helps with emotional healing and balance",
        "Encourages personal growth and empowerment",
        "Fosters peace and calm in relationships",
      ]}
      uses={[
        "Keep in your workspace to inspire creativity and focus",
        "Wear near the throat to improve communication and expression",
        "Place under your pillow or in your bedroom for peaceful sleep",
        "Use in meditation to clear energetic blockages",
        "Carry with you to reduce anxiety and promote calm",
      ]}
      pairsWith={[
        { name: "Clear Quartz", path: "/crystal-healing-blog/clear-quartz-meaning", imageUrl: "/images/clear-quartz-bead.png" },
        { name: "Jade", path: "/crystal-healing-blog/what-are-the-benefits-of-jade-harmony-and-abundance-explained", imageUrl: "/images/jade-bead.png" },
        { name: "Rose Quartz", path: "/crystal-healing-blog/what-is-rose-quartz-good-for", imageUrl: "/images/rose-quartz-bead.png" },
        { name: "Amethyst", path: "/crystal-healing-blog/what-are-the-healing-properties-of-amethyst", imageUrl: "/images/amethyst-bead.png" },
      ]}
      price="$75.00"
      productLink="/shop/communication-bracelet"
    />
  )
}
