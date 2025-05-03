import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Creating a Crystal Grid for Protection | Crystal Healing",
  description:
    "Learn how to create a powerful crystal grid for protection and security. Step-by-step guide to creating a crystal grid for protection and security.",
  keywords:
    "crystal grid protection, crystal grid protection, crystal grid protection, crystal grid protection, crystal grid protection, crystal grid protection, crystal grid protection, crystal grid protection, crystal grid protection, crystal grid protection",
  openGraph: {
    title: "Creating a Crystal Grid for Protection",
    description:
      "Learn how to create a powerful crystal grid for protection and security. Step-by-step guide to creating a crystal grid for protection and security.",
    images: [
      {
        url: "/images/crystal-circle.png",
        width: 1200,
        height: 630,
        alt: "Crystal grid for protection - the step-by-step guide to creating a powerful crystal grid for protection and security",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creating a Crystal Grid for Protection",
    description:
      "Learn how to create a powerful crystal grid for protection and security. Step-by-step guide to creating a crystal grid for protection and security.",
    images: ["/images/crystal-circle.png"],
  },
}

export default function CrystalGridProtectionPage() {
  return (
    <InfoPageLayout
      title="Creating a Crystal Grid for Protection"
      subtitle="Step-by-step guide to creating a powerful crystal grid for protection and security"
      className="prose prose-lg max-w-none text-[#5c5c5c]"
    >
      <div className="flex items-center gap-2 text-sm text-[#5c5c5c] mb-8">
        <span>February 5, 2024</span>
        <span>•</span>
        <span>Tutorials</span>
        <span>•</span>
        <span>8 min read</span>
      </div>

      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <Image src="/images/crystal-circle.png" alt="Crystal grid for protection" fill className="object-cover" />
      </div>

      <p>
        Crystal grids harness the combined energy of multiple stones arranged in a sacred geometric pattern to amplify
        their power and create a specific energetic outcome. When it comes to protection, crystal grids can create a
        powerful energetic shield around your space, helping to deflect negative energies and maintain a sense of safety
        and security.
      </p>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">What is a Crystal Grid?</h2>

      <p>
        A crystal grid is an intentional arrangement of crystals that combines the energies of the stones with sacred
        geometry to manifest a specific intention. The geometric pattern amplifies the energy of the individual
        crystals, creating a synergistic effect that's greater than the sum of its parts.
      </p>

      <p>
        Crystal grids work through the principle of resonance – the idea that energies with similar frequencies amplify
        each other. By combining crystals with protective properties in a sacred geometric pattern, you create a
        powerful energetic field that resonates with the frequency of protection and security.
      </p>

      <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mt-8 mb-4">Best Crystals for Protection Grids</h2>

      <div className="grid md:grid-cols-2 gap-8 my-8">
        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Primary Protection Stones</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="/crystal-healing-blog/how-does-black-tourmaline-protect-your-energy" className="text-[#c9a87c] hover:underline">
                Black Tourmaline
              </Link>{" "}
              - Creates a protective shield against negative energy
            </li>

            <li>
              <Link href="/crystal-healing-blog/tigers-eye-benefits" className="text-[#c9a87c] hover:underline">
                Tiger's Eye
              </Link>{" "}
              - Protective and grounding, especially good for warding off ill intentions and boosting confidence.
            </li>


            <li>
              <Link href="/crystal-healing-blog/what-are-the-healing-properties-of-amethyst" className="text-[#c9a87c] hover:underline">
                Amethyst
              </Link>{" "}
              - Offers spiritual protection and transmutes negative energy into higher vibrations.
            </li>

          </ul>
        </div>
        <div className="bg-[#f0ebe2] p-6 rounded-lg">
          <h3 className="font-medium text-[#2c2c2c] mb-3">Supporting Stones</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <Link href="/crystal-healing-blog/clear-quartz-meaning" className="text-[#c9a87c] hover:underline">
                Clear Quartz
              </Link>{" "}
              - Amplifies the energy of other crystals
            </li>
            <li>
              <Link href="/crystal-healing-blog/what-are-the-benefits-of-amazonite-calm-communication-and-truth-explained" className="text-[#c9a87c] hover:underline">
                Amazonite
              </Link>{" "}
              - Protects against electromagnetic pollution and soothes emotional trauma.
            </li>
            <li>
              <Link href="/crystal-healing-blog/moonstone-properties" className="text-[#c9a87c] hover:underline">
                Moonstone
              </Link>{" "}
              - Offers emotional protection and helps stabilize sensitivity.
            </li>
            <li>
              <Link href="/crystal-healing-blog/what-is-rose-quartz-good-for" className="text-[#c9a87c] hover:underline">
              Rose Quartz
              </Link>{" "}
              - Gentle protection through love, compassion, and emotional healing.
            </li>
          </ul>
        </div>
      </div>

     
      {/* Sacred Geometry Section - More visual appeal */}
      <div className="my-16">
        <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-8">Sacred Geometry for Protection</h2>

        <p className="text-lg leading-relaxed mb-8">
          The geometric pattern you choose for your grid is just as important as the crystals themselves. Different sacred
          geometric patterns resonate with different energies and intentions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 my-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] hover:shadow-md transition-shadow">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-[#f8f5f0] flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-[#c9a87c] rounded-full flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-[#c9a87c] rounded-full"></div>
              </div>
            </div>
            <h3 className="font-medium text-[#2c2c2c] text-lg mb-3">Circle</h3>
            <p className="text-[#5c5c5c]">
              Represents wholeness, unity, and infinite protection. Ideal for creating a continuous shield of protective
              energy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] hover:shadow-md transition-shadow">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-[#f8f5f0] flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-[#c9a87c]"></div>
            </div>
            <h3 className="font-medium text-[#2c2c2c] text-lg mb-3">Square</h3>
            <p className="text-[#5c5c5c]">
              Represents stability, foundation, and grounding. Good for protection of physical spaces like homes and
              offices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] hover:shadow-md transition-shadow">
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-[#f8f5f0] flex items-center justify-center">
              <svg width="128" height="128" viewBox="0 0 100 100">
                <polygon 
                  points="50,0 100,25 100,75 50,100 0,75 0,25" 
                  fill="none" 
                  stroke="#c9a87c" 
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="font-medium text-[#2c2c2c] text-lg mb-3">Hexagon</h3>
            <p className="text-[#5c5c5c]">
              Represents harmony and balance. Excellent for creating a balanced protective field that filters out negative
              energy.
            </p>
          </div>
        </div>
      </div>

      {/* Step-by-Step Guide - Breaking up the dense content */}
      <div className="bg-[#f8f5f0] p-8 rounded-xl my-16">
        <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-8">
          Creating Your Protection Grid: Step-by-Step
        </h2>

        <div className="space-y-10">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-[#2c2c2c] text-xl mb-4">1. Gather Your Materials</h3>
            <p className="mb-4">You'll need:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A center stone (Clear Quartz or Black Tourmaline recommended)</li>
              <li>6-8 stones for the main grid points (protection stones from the list above)</li>
              <li>Supporting stones to place between grid points (optional)</li>
              <li>A grid cloth or piece of paper with your chosen geometric pattern (optional)</li>
              <li>A crystal wand or pointed Clear Quartz for activation (optional)</li>
              <li>A candle and/or sage for cleansing (optional)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-[#2c2c2c] text-xl mb-4">2. Cleanse Your Space and Crystals</h3>
            <p>
              Before creating your grid, cleanse your space and crystals to remove any unwanted energies. You can use
              sage, palo santo, sound, or visualization techniques for cleansing.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-[#2c2c2c] text-xl mb-4">3. Set Your Intention</h3>
            <p>
              Hold your center stone in your hands and clearly state your intention for protection. Be specific about what
              you're seeking protection from and what you want to protect.
            </p>
            <div className="bg-[#f0ebe2] p-4 rounded-lg mt-4 italic">
              "I create this grid to protect my home and all who dwell within from negative energies and harmful intentions."
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-[#2c2c2c] text-xl mb-4">4. Create Your Grid</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>Place your center stone in the middle of your grid cloth or surface</li>
              <li>
                Arrange your main protection stones in your chosen geometric pattern around the center stone (circle,
                square, hexagon, etc.)
              </li>
              <li>Add supporting stones between the main points if desired</li>
              <li>
                As you place each stone, hold it for a moment and connect with its energy, reaffirming your intention
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-[#2c2c2c] text-xl mb-4">5. Activate Your Grid</h3>
            <p>
              Using your crystal wand or pointed Clear Quartz, trace a line of energy connecting each crystal in the grid.
              Start from the center stone, move to one of the outer stones, and then trace a line to each subsequent
              stone, moving in a clockwise direction until you return to the center.
            </p>
            <p className="mt-4">
              As you do this, visualize light flowing through the lines, connecting all the crystals and activating the grid.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-medium text-[#2c2c2c] text-xl mb-4">6. Seal Your Grid</h3>
            <p>
              Once all crystals are connected, hold your hands over the grid and visualize a dome of protective light
              forming over it. State your intention once more and express gratitude for the protection the grid will
              provide.
            </p>
          </div>
        </div>
      </div>

      {/* Sample Layout - Made more prominent and visually separated */}
      <div className="bg-white p-8 rounded-xl shadow border border-[#e5e0d5] my-16">
        <h3 className="font-serif text-2xl font-light text-[#2c2c2c] mb-6">Sample Protection Grid Layout</h3>
        <div className="bg-[#f8f5f0] p-6 rounded-lg mb-6">
          <p className="text-center italic mb-4">A simple but powerful protection grid you can try:</p>
          <div className="relative h-64 mb-6">
            <Image src="/images/protection-grid.png" alt="Sample protection crystal grid layout" fill className="object-contain" />
          </div>
        </div>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <span className="font-medium">Center:</span> Clear Quartz point (pointing upward) to amplify the entire grid
          </li>
          <li>
            <span className="font-medium">Cardinal Points (North, South, East, West):</span> Black Tourmaline for strong protection
          </li>
          <li>
            <span className="font-medium">Diagonal Points:</span> Smoky Quartz to transmute negative energy
          </li>
          <li>
            <span className="font-medium">Outer Circle:</span> Small pieces of Selenite placed in a circle to purify energy
          </li>
        </ul>
      </div>

      {/* Conclusion - More spacious and elegant */}
      <div className="bg-[#f8f5f0] p-8 rounded-xl my-16">
        <h2 className="font-serif text-3xl font-light text-center text-[#2c2c2c] mb-8">Final Thoughts</h2>

        <p className="text-lg leading-relaxed mb-6">
          Creating a crystal grid for protection is a powerful way to harness the energy of multiple crystals to create a
          shield of positive energy around your space or person. By combining the right crystals with sacred geometry and
          clear intention, you can create a powerful energetic tool that works continuously to keep negative energies at
          bay.
        </p>

        <div className="bg-white p-6 rounded-lg italic text-center my-8">
          "The most important element in any crystal grid is your intention. 
          The clearer and more focused your intention, the more effective your grid will be."
        </div>

        <p className="text-lg leading-relaxed">
          Trust your intuition when creating your grid, and don't be afraid to experiment with different combinations of 
          crystals and geometric patterns until you find what works best for you.
        </p>
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center mt-16 pt-8 border-t border-[#e5e0d5]">
        <Link href="/crystal-healing-blog">
          <Button variant="outline" className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0] px-6 py-3">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </div>
    </InfoPageLayout>
  )
}