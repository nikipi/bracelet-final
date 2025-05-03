import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f8f5f0] to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-6 leading-relaxed">
              Our <span className="italic">Journey</span> to Healing Through Crystals
            </h2>

            <p className="text-[#5c5c5c] mb-6 leading-relaxed">
              Founded by artisans with a passion for holistic wellness, Crystal Energy began as a small workshop
              dedicated to creating mindful jewelry that connects with the wearer's energy.
            </p>

            <p className="text-[#5c5c5c] mb-8 leading-relaxed">
              Each piece we create is handcrafted with intention, combining ancient wisdom with modern design to bring
              the healing properties of crystals into your everyday life.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/about/our-story">
                <Button className="bg-[#c9a87c] hover:bg-[#b89768] text-white border-none">Our Story</Button>
              </Link>

              <div className="flex items-center gap-4">
                <div className="h-[1px] w-10 bg-[#c9a87c]"></div>
                <span className="text-[#5c5c5c] italic font-serif">Crafted with intention</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/crystal-artisan.png"
                alt="Crystal artisan crafting jewelry"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg hidden md:block">
              <Image src="/crystal-closeup.png" alt="Crystal closeup" fill className="object-cover" />
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg hidden md:block">
              <Image src="/healing-hands.png" alt="Healing hands" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
