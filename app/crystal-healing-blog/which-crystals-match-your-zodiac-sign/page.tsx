import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Which Crystals Match Your Zodiac Sign? Find Out Now",
  description:
    "Discover the essential crystals that align with your zodiac sign. Learn how to use crystals to enhance your natural strengths and balance your challenges.",
  keywords:
    "zodiac crystals, zodiac crystals, zodiac crystals, zodiac crystals, zodiac crystals, zodiac crystals, zodiac crystals, zodiac crystals, zodiac crystals, zodiac crystals",
  openGraph: {
    title: "Which Crystals Match Your Zodiac Sign? Find Out Now",
    description:
      "Discover the essential crystals that align with your zodiac sign. Learn how to use crystals to enhance your natural strengths and balance your challenges.",
    images: [
      {
        url: "/images/zodiac.png",
        width: 1200,
        height: 630,
        alt: "Zodiac crystals - the essential crystals that align with your zodiac sign",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Which Crystals Match Your Zodiac Sign? Find Out Now",
    description:
      "Discover the essential crystals that align with your zodiac sign. Learn how to use crystals to enhance your natural strengths and balance your challenges.",
    images: ["/images/zodiac.png"],
  },
}

export default function ZodiacCrystalsPage() {
  return (
    <InfoPageLayout
      title="Which Crystals Match Your Zodiac Sign? Find Out Now"
      subtitle="Discover the essential crystals that align with your zodiac sign"
      className="prose prose-lg max-w-6xl text-[#5c5c5c]"
    >
      <div className="flex items-center gap-2 text-sm text-[#5c5c5c] mb-8">
        <span>January 18, 2024</span>
        <span>•</span>
        <span>Astrology</span>
        <span>•</span>
        <span>5 min read</span>
      </div>

      <div className="relative h-96 rounded-xl overflow-hidden mb-9">
        <Image src="/images/zodiac.png" alt="Zodiac crystals" fill className="object-cover" />
      </div>

      <p>
        Astrology and crystal healing are two ancient practices that have guided humanity for thousands of years. When
        combined, they create a powerful system for personal growth and spiritual development. Each zodiac sign resonates with 
        specific crystals that can enhance your natural strengths and help balance your challenges.
      </p>

      <p>
        In this guide, we'll explore the two essential crystal matches for each zodiac sign, helping you harness the 
        energies that align most harmoniously with your astrological profile.
      </p>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">
        The Connection Between Crystals and Zodiac Signs
      </h2>

      <p>
        Both crystals and zodiac signs are associated with specific energetic frequencies. When a crystal's energy
        resonates with your zodiac sign, it can amplify your natural strengths and help balance areas
        where you might face challenges.
      </p>

      <p>This connection works on multiple levels:</p>

      <ul className="list-disc pl-5 space-y-2 my-6">
        <li>
          <strong>Elemental Affinities:</strong> Each zodiac sign belongs to one of four elements (Fire, Earth, Air,
          Water), and crystals often have similar elemental associations.
        </li>
        <li>
          <strong>Planetary Rulers:</strong> Zodiac signs are ruled by specific planets, and many crystals resonate with
          the same planetary energies.
        </li>
      </ul>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">
        Fire Signs (Aries, Leo, Sagittarius)
      </h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Aries (March 21 - April 19)</h3>
          <p className="text-sm mb-4">
            Ruled by Mars with passion, courage, and pioneering energy. As the first sign of the zodiac, Aries embodies new beginnings.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Carnelian</h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Aries' natural courage and creativity while helping to temper impulsiveness.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Bloodstone</h4>
              <p className="text-sm text-[#5c5c5c]">
                Provides grounding energy to balance Aries' fiery nature and supports physical vitality.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Leo (July 23 - August 22)</h3>
          <p className="text-sm mb-4">
            Ruled by the Sun with confidence, creativity, and generosity. Leo shines with warmth and charisma.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/citrine" className="text-[#c9a87c] hover:underline">
                  Citrine
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Leo's natural confidence and creative expression while attracting abundance.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/tigers-eye" className="text-[#c9a87c] hover:underline">
                  Tiger's Eye
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Balances Leo's pride with practicality and helps them use their power wisely.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Sagittarius (Nov 22 - Dec 21)</h3>
          <p className="text-sm mb-4">
            Ruled by Jupiter with optimism, adventure, and philosophical thinking. Seeks expansion and new horizons.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/lapis-lazuli" className="text-[#c9a87c] hover:underline">
                  Lapis Lazuli
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Sagittarius' quest for wisdom and truth while promoting clear communication.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Turquoise</h4>
              <p className="text-sm text-[#5c5c5c]">
                Provides protection during Sagittarius' adventures and helps authentic self-expression.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">
        Earth Signs (Taurus, Virgo, Capricorn)
      </h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Taurus (April 20 - May 20)</h3>
          <p className="text-sm mb-4">
            Ruled by Venus with stability, sensuality, and determination. Values security and physical comfort.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/rose-quartz" className="text-[#c9a87c] hover:underline">
                  Rose Quartz
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Taurus' connection to love and beauty while softening their stubborn tendencies.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Emerald</h4>
              <p className="text-sm text-[#5c5c5c]">
                Supports Taurus' connection to abundance and helps manifest material goals.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Virgo (August 23 - September 22)</h3>
          <p className="text-sm mb-4">
            Ruled by Mercury with analytical thinking and attention to detail. Seeks perfection and practical solutions.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/amazonite" className="text-[#c9a87c] hover:underline">
                  Amazonite
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Soothes Virgo's tendency toward worry and helps them communicate with clarity and compassion.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/clear-quartz" className="text-[#c9a87c] hover:underline">
                  Clear Quartz
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Amplifies Virgo's mental clarity while helping them see the bigger picture beyond the details.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Capricorn (Dec 22 - Jan 19)</h3>
          <p className="text-sm mb-4">
            Ruled by Saturn with ambition, discipline, and practicality. Focused on achievement and building lasting structures.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/black-tourmaline" className="text-[#c9a87c] hover:underline">
                  Black Tourmaline
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Provides protection and grounding for Capricorn's ambitious pursuits while deflecting negative energy.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Garnet</h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Capricorn's natural perseverance and helps maintain vitality during intense work periods.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">
        Air Signs (Gemini, Libra, Aquarius)
      </h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Gemini (May 21 - June 20)</h3>
          <p className="text-sm mb-4">
            Ruled by Mercury with curiosity, adaptability, and communication skills. Thrives on variety and social connection.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Blue Lace Agate</h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Gemini's communication abilities while bringing a calming energy to their active minds.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Sodalite</h4>
              <p className="text-sm text-[#5c5c5c]">
                Supports logical thinking and helps Gemini express their thoughts with clarity and truth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Libra (September 23 - October 22)</h3>
          <p className="text-sm mb-4">
            Ruled by Venus with a love of harmony, beauty, and balance. Excels in relationships and diplomacy.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/rose-quartz" className="text-[#c9a87c] hover:underline">
                  Rose Quartz
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Libra's natural affinity for love and helps them maintain harmony in relationships.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                
                  Labradorite
               
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Supports Libra in making decisions and helps them maintain their own energy in relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Aquarius (Jan 20 - Feb 18)</h3>
          <p className="text-sm mb-4">
            Ruled by Uranus with innovation, independence, and humanitarian values. Thinks outside the box.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/amethyst" className="text-[#c9a87c] hover:underline">
                  Amethyst
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Aquarius' intuition and visionary thinking while providing spiritual protection.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Aquamarine</h4>
              <p className="text-sm text-[#5c5c5c]">
                Supports clear communication of innovative ideas and helps Aquarius connect with their emotions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">
        Water Signs (Cancer, Scorpio, Pisces)
      </h2>

      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Cancer (June 21 - July 22)</h3>
          <p className="text-sm mb-4">
            Ruled by the Moon with emotional sensitivity and strong intuition. Values security and emotional connection.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/moonstone" className="text-[#c9a87c] hover:underline">
                  Moonstone
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Cancer's natural intuition and emotional fluidity while providing nurturing energy.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                Selenite
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Cleanses Cancer's emotional field, helping them release old wounds and attachments.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Scorpio (October 23 - November 21)</h3>
          <p className="text-sm mb-4">
            Ruled by Pluto with intensity, passion, and transformative power. Delves deep beneath the surface.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
               
                  Obsidian
               
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Supports Scorpio's journey into the depths while providing protection and revealing truth.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Malachite</h4>
              <p className="text-sm text-[#5c5c5c]">
                Facilitates transformation and helps Scorpio release emotional patterns that no longer serve them.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Pisces (February 19 - March 20)</h3>
          <p className="text-sm mb-4">
            Ruled by Neptune with compassion, imagination, and spiritual connection. Highly receptive to subtle energies.
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">
                <Link href="/blog/amethyst" className="text-[#c9a87c] hover:underline">
                  Amethyst
                </Link>
              </h4>
              <p className="text-sm text-[#5c5c5c]">
                Enhances Pisces' spiritual awareness while providing protection for their sensitive energy field.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-medium text-[#2c2c2c] mb-1">Aquamarine</h4>
              <p className="text-sm text-[#5c5c5c]">
                Connects Pisces to the calming energy of water and helps them express their intuitive insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">How to Work with Your Zodiac Crystals</h2>

      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e0d5]">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Wearing Your Crystals</h3>
          <p className="mb-3">
            One of the most effective ways to work with your zodiac crystals is to wear them as jewelry. This keeps
            their energy close to your body throughout the day.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bracelets are particularly effective as they stay in contact with your pulse points</li>
            <li>Necklaces place crystals near your heart and throat chakras</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-[#e5e0d5]">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Meditation and Intention Setting</h3>
          <p className="mb-3">
            Working with your zodiac crystals during meditation can deepen your connection to their energy.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Hold your crystal in your hand during meditation</li>
            <li>Set intentions that align with the positive qualities of your sign</li>
          </ul>
        </div>
      </div>

      {/* <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] my-8">
        <h3 className="font-medium text-[#2c2c2c] mb-3">Zodiac Crystal Bracelet Collection</h3>
        <p className="mb-4">
          Discover our specially designed zodiac crystal bracelets, each created to enhance the natural strengths of
          your astrological sign while providing balance and support.
        </p>
        <Link href="/shop/zodiac-bracelets">
          <Button className="w-full bg-[#c9a87c] hover:bg-[#b89b72] text-white">
            Shop Zodiac Bracelets - Starting at $89.99
          </Button>
        </Link>
      </div> */}

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">Final Words</h2>

      <p>
        Working with crystals that align with your zodiac sign can be a powerful way to enhance your natural strengths
        and find balance in areas of challenge. By understanding the energetic connection between astrology and crystal
        healing, you can create a personalized approach to spiritual growth.
      </p>

      <p>
        Remember that while these associations provide a helpful framework, your intuition is your best guide. Pay
        attention to which crystals you feel naturally drawn to, as they may be offering exactly the energy you need.
      </p>

      <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#e5e0d5]">
        <Link href="/crystal-healing-blog">
          <Button variant="outline" className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <div className="flex space-x-4">
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            FB
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            TW
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            IG
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            PT
          </button>
        </div>
      </div>
    </InfoPageLayout>
  )
}