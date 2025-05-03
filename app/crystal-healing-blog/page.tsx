import InfoPageLayout from "@/components/info-page-layout";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

// SEO metadata for this page
export const metadata = {
  title: "Crystal Healing Blog | Everything You want to know about Crystal Healing",
  description:
    "Explore crystal meanings, healing properties, and care tips with Yumiere's expert blog articles. From Amethyst to Tiger’s Eye, find your energy match.",
};

const blogPosts = [
  {
    id: 1,
    title: "What Are the Healing Properties of Amethyst?",
    excerpt: "Amethyst is a powerful healing crystal known for its ability to promote deep emotional healing, alleviate stress, and enhance spiritual awareness. Discover its transformative properties.",
    image: "/images/amethyst.png",
    date: "April 15, 2024",
    category: "Crystal Properties",
    slug: "what-are-the-healing-properties-of-amethyst",
  },
  {
    id: 2,
    title: "What Is Rose Quartz Good For? Benefits & Meaning",
    excerpt: "Rose Quartz is renowned for its gentle, loving energy. Learn how this pink crystal can open your heart, promote self-love, and heal emotional wounds.",
    image: "/images/rose-quartz.png",
    date: "April 10, 2024",
    category: "Crystal Properties",
    slug: "what-is-rose-quartz-good-for",
  },
  {
    id: 3,
    title: "Citrine Crystal Meaning: How It Attracts Success & Wealth",
    excerpt: "Citrine is the stone of abundance and prosperity. Explore how this vibrant yellow crystal can attract wealth, success, and positive energy into your life.",
    image: "/images/citrine.png",
    date: "April 5, 2024",
    category: "Crystal Properties",
    slug: "citrine-crystal-meaning",
  },
  {
    id: 4,
    title: "How Does Black Tourmaline Protect Your Energy?",
    excerpt: "Black Tourmaline is a powerful protective stone that shields you from negative energies and electromagnetic radiation. Learn how to use it to safeguard your energy field.",
    image: "/images/black-tourmaline.png",
    date: "March 30, 2024",
    category: "Crystal Properties",
    slug: "how-does-black-tourmaline-protect-your-energy",
  },
  {
    id: 5,
    title: "Clear Quartz Meaning: The Master Healer’s Benefits",
    excerpt: "Clear Quartz is known as the Master Healer crystal. Discover its ability to amplify energy, clear blockages, and support healing on all levels.",
    image: "/images/clear-quartz.png",
    date: "March 25, 2024",
    category: "Crystal Properties",
    slug: "clear-quartz-meaning",
  },
  {
    id: 6,
    title: "How to Cleanse and Charge Your Crystal Bracelet",
    excerpt: "Learn how to properly cleanse and charge your crystal bracelet to maintain its energy and healing properties. Keep your jewelry energetically clear and powerful.",
    image: "/images/crystal-ensemble.png",
    date: "March 28, 2024",
    category: "Crystal Care",
    slug: "how-to-cleanse-and-charge-your-crystal-bracelet",
  },
  {
    id: 7,
    title: "Is Crystal Healing Real? Exploring the Science Behind It",
    excerpt: "Is crystal healing just a trend, or is there scientific evidence supporting its benefits? Dive into the science of how crystals may influence your energy and wellbeing.",
    image: "/images/crystal-science.png",
    date: "February 22, 2024",
    category: "Education",
    slug: "is-crystal-healing-real",
  },
  {
    id: 8,
    title: "How to Create a Crystal Grid for Protection?",
    excerpt: "Creating a crystal grid can amplify the protective energy of your stones. Follow this step-by-step guide to build a powerful grid for protection and security.",
    image: "/images/crystal-circle.png",
    date: "February 5, 2024",
    category: "Tutorials",
    slug: "how-to-create-a-crystal-grid-for-protection",
  },
  {
    id: 9,
    title: "Which Crystals Match Your Zodiac Sign? Find Out Now",
    excerpt: "Find the perfect crystal for your zodiac sign! Discover which stones align with your astrological traits and how they can enhance your personal growth and spiritual journey.",
    image: "/images/zodiac.png",
    date: "January 18, 2024",
    category: "Astrology",
    slug: "which-crystals-match-your-zodiac-sign",
  },
  {
    id: 10,
    title: "Lapis Lazuli Meaning: Wisdom, Intuition & Ancient Power",
    excerpt: "Lapis Lazuli is known as the stone of wisdom and intuition. Uncover the secrets of this ancient crystal and learn how it can awaken your inner vision and enhance mental clarity.",
    image: "/images/lapis-lazuli.png",
    date: "March 28, 2024",
    category: "Crystal Properties",
    slug: "lapis-lazuli-meaning"
  },
  {
    id: 11,
    title: "Tiger’s Eye Benefits: Courage, Confidence & Focus",
    excerpt: "Tiger’s Eye is a powerful stone for grounding and confidence. Explore how this crystal can help you build courage, focus, and inner strength.",
    image: "/images/tigers-eye.png",
    date: "April 1, 2024",
    category: "Crystal Properties",
    slug: "tigers-eye-benefits"
  },
  {
    id: 12,
    title: "Moonstone Properties: Intuition & Emotional Balance",
    excerpt: "Moonstone enhances intuition and emotional balance. Discover how this mystical crystal can support your spiritual growth and promote harmony in your life.",
    image: "/images/moonstone.png",
    date: "April 4, 2024",
    category: "Crystal Properties",
    slug: "moonstone-properties"
  },
  {
    id: 13,
    title: "What Are the Benefits of Jade? Harmony & Abundance Explained",
    excerpt: "Jade is a crystal known for bringing balance and harmony. Learn about its healing benefits, from promoting abundance to restoring peace and emotional stability.",
    image: "/images/jade.png",
    date: "April 7, 2024",
    category: "Crystal Properties",
    slug: "what-are-the-benefits-of-jade-harmony-and-abundance-explained"
  },
  {
    id: 14,
    title: "What Are the Benefits of Amazonite? Calm Communication & Truth Explained",
    excerpt: "Amazonite promotes clear communication and inner truth. Learn how this soothing crystal can help you express yourself more authentically and bring calmness into your life.",
    image: "/images/amazonite.png",
    date: "April 10, 2024",
    category: "Crystal Properties",
    slug: "what-are-the-benefits-of-amazonite-calm-communication-and-truth-explained"
  },
  {
    id: 15,
    title: "Green Aventurine Benefits: Luck, Growth & Prosperity",
    excerpt: "Green Aventurine is known as the stone of luck and growth. Discover how this crystal can attract prosperity, open doors to new opportunities, and promote overall well-being.",
    image: "/images/green-aventurine.png",
    date: "April 13, 2024",
    category: "Crystal Properties",
    slug: "green-aventurine-benefits"
  }
]


export default function BlogPage() {
  return (
    <InfoPageLayout
      title="Crystal Healing Blog & Guides"
      subtitle="Discover the meaning, properties, and care tips for your favorite healing crystals."
    >
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="px-4 py-2 rounded-full bg-[#c9a87c] text-white">All</button>
          <button className="px-4 py-2 rounded-full bg-[#f0ebe2] text-[#5c5c5c] hover:bg-[#e5e0d5]">
            Crystal Properties
          </button>
          <button className="px-4 py-2 rounded-full bg-[#f0ebe2] text-[#5c5c5c] hover:bg-[#e5e0d5]">
            Crystal Care
          </button>
          <button className="px-4 py-2 rounded-full bg-[#f0ebe2] text-[#5c5c5c] hover:bg-[#e5e0d5]">
            Manifestation
          </button>
          <button className="px-4 py-2 rounded-full bg-[#f0ebe2] text-[#5c5c5c] hover:bg-[#e5e0d5]">
            Tutorials
          </button>
          <button className="px-4 py-2 rounded-full bg-[#f0ebe2] text-[#5c5c5c] hover:bg-[#e5e0d5]">
            Astrology
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post) => (
          <Link href={`/crystal-healing-blog/${post.slug}`} key={post.id}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#c9a87c] text-white text-xs px-2 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-[#5c5c5c] text-sm mb-2">{post.date}</p>
                <h3 className="font-serif text-xl font-light text-[#2c2c2c] mb-2">{post.title}</h3>
                <p className="text-[#5c5c5c] text-sm">{post.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <button className="border border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0] px-8 py-3 rounded-full">
          Load More Articles
        </button>
      </div>
    </InfoPageLayout>
  );
}
