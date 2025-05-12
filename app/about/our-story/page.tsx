import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import "@/styles/globals.css"



export default function OurStoryPage() {
  return (
    <InfoPageLayout
      title="A Journey Between Worlds"
      subtitle="How ancient wisdom, modern healing, and one global path gave birth to Yumiere"
    >
      <div className="prose prose-lg max-w-none text-[#5c5c5c]">
        {/* Hero Image with Quote */}
        <div className="mb-16 relative h-96 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/crystal-bracelet-blue.png"
            alt="Yumiere founder working with crystals"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <p className="text-xl italic mb-1">
              "Crystals are more than adornment — they are anchors of light, healing, and choice."
            </p>
          </div>
        </div>

        {/* The Origin */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">Where It All Began</h2>
          <p>
          <strong><span className="green-text">Yumiere</span></strong>’s story began in 2025, during a transformative time in my life. Since the age of 18, I had traveled and lived across four continents — immersing myself in cultures that each held unique, sacred relationships with crystals and the earth’s natural energies. Whether it was the jade amulets of East Asia, the chakra practices of India, or the intuitive energy work found in the West, one thing became clear: healing is a global language.
          </p>
          <br />
          <p>
            These experiences shaped a vision — one that bridges ancient Eastern symbolism with the freedom and intention of modern Western healing. The name <strong><span className="green-text">Yumiere</span></strong> reflects this: <strong><span className="green-text">玉 (yu)</span></strong>, meaning jade or precious gem in Chinese, and <strong><span className="green-text">Lumière</span></strong>, the French word for light. It’s a name born of duality — earth and sky, tradition and innovation.
          </p>
          <br />
          <p>
            While completing my PhD, I realized I wanted to build more than a career — I wanted to build something meaningful. Yumiere was born at this intersection: a creative expression rooted in intellect, emotion, and a deep belief that healing is something we consciously choose. 
          </p>
          <br />
          <p>
            What started as a personal ritual — crafting bracelets for loved ones — became a brand grounded in purpose. Today, every piece we create carries that original spark: a blend of heritage, clarity, and intention.
          </p>
        </section>

        {/* Our Philosophy */}
        <section className="mb-16">
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">Our Philosophy</h2>
          <p>
            At <strong><span className="green-text">Yumiere</span></strong>, we believe healing doesn’t happen by chance — it’s a path you choose. Each crystal bracelet is designed to remind you of your own light and resilience, while honoring the wisdom traditions that guide us.
          </p>
          <br />
          <p>Our work is built on three core principles:</p>
          <br />
          <ul>
            <li>
            <strong><span className="green-text">Intention:</span></strong> Every design begins with meaning. We infuse our pieces with mindful purpose and energetic clarity.
            </li>
            <li>
            <strong><span className="green-text">Quality:</span></strong> We source only high-vibrational, ethically mined gemstones that retain the earth’s natural power.
            </li>
            <li>
            <strong><span className="green-text">Empowerment:</span></strong> You are your own healer. Our jewelry exists to support your journey — not to define it.
            </li>
          </ul>
        </section>

        {/* Looking Forward */}
        <section className="mb-20">
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">Looking Ahead</h2>
          <p>
            As <strong><span className="green-text">Yumiere</span></strong> continues to evolve, we remain devoted to sustainability, mindful creation, and deep respect for the energy each crystal holds. We’re expanding our collection, growing our community, and offering more tools to help people reconnect with themselves.
          </p>
          <br />
          <p>
            I’m endlessly grateful for every soul who has welcomed <strong><span className="green-text">Yumiere</span></strong> into their life. This is just the beginning — and I invite you to walk this luminous path with us.
          </p>
        </section>

        {/* Social CTA */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-md border border-[#e5e0d5] text-center">
          <h3 className="font-serif text-2xl font-light text-[#2c2c2c] mb-3">Join Our Journey</h3>
          <p className="text-[#5c5c5c] mb-4">
            Follow us on social media for new collections, crystal rituals, and moments of light.
          </p>
          <div className="flex justify-center space-x-4">
            {["IG", "FB", "PT", "TW"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c] font-bold"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </InfoPageLayout>
  )
}