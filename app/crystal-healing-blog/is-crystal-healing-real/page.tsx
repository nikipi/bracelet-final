import InfoPageLayout from "@/components/info-page-layout"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Facebook, Twitter, Instagram, Share2 } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Science Behind Crystal Healing | Crystal Healing",
  description:
    "Explore the scientific perspective on crystal energy and wellbeing. Learn how crystals might influence our wellbeing and the role of the placebo effect in crystal healing.",
  keywords:
    "crystal healing science, crystal healing benefits, crystal healing properties, crystal healing meaning, crystal healing history, crystal healing history, crystal healing history, crystal healing history, crystal healing history, crystal healing history",
  openGraph: {
    title: "The Science Behind Crystal Healing",
    description:
      "Explore the scientific perspective on crystal energy and wellbeing. Learn how crystals might influence our wellbeing and the role of the placebo effect in crystal healing.",
    images: [
      {
        url: "/images/crystal-science.png",
        width: 1200,
        height: 630,
        alt: "Crystal science - the science behind crystal healing",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Science Behind Crystal Healing",
    description:
      "Explore the scientific perspective on crystal energy and wellbeing. Learn how crystals might influence our wellbeing and the role of the placebo effect in crystal healing.",
    images: ["/images/crystal-science.png"],
  },
}


export default function ScienceBehindCrystalHealingPage() {
  return (
    <InfoPageLayout
      title="The Science Behind Crystal Healing"
      subtitle="Understanding the scientific perspective on crystal energy and wellbeing"
      className="prose prose-lg max-w-6xl mx-auto text-[#5c5c5c]"
    >
      {/* Article metadata */}
      <div className="flex items-center gap-3 text-sm text-[#5c5c5c] mb-6">
        <span>February 5, 2024</span>
        <span>•</span>
        <span>10 min read</span>
      </div>

      {/* Featured image */}
      <div className="relative h-96 rounded-lg overflow-hidden mb-6">
        <Image src="/images/crystal-science.png" alt="Crystal science" fill className="object-cover" />
      </div>

      {/* Introduction */}
      <p className="text-lg mb-8">
        Crystal healing has been practiced for thousands of years across numerous cultures. 
        But what does modern science have to say about it? Let's explore the scientific 
        perspective on crystal healing and how these beautiful stones might influence our wellbeing.
      </p>

      {/* Table of Contents */}
      <div className="bg-[#f8f5f0] p-4 rounded-lg mb-8">
        <h3 className="font-medium text-[#2c2c2c] mb-2">Quick Navigation</h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <a href="#crystal-structure" className="text-[#c9a87c] hover:text-[#a88a5f] no-underline">Crystal Structure</a>
          <a href="#placebo" className="text-[#c9a87c] hover:text-[#a88a5f] no-underline">Placebo Effect</a>
          <a href="#quantum" className="text-[#c9a87c] hover:text-[#a88a5f] no-underline">Quantum Physics</a>
          <a href="#conclusion" className="text-[#c9a87c] hover:text-[#a88a5f] no-underline">Conclusion</a>
        </div>
      </div>

      {/* Crystal Structure */}
      <section id="crystal-structure" className="mb-10">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4 border-b border-[#e5e0d5] pb-2">
          The Crystal Structure
        </h2>

        <p>
          Crystals have highly ordered, repeating geometric arrangements of atoms, giving them 
          distinctive shapes, colors, and properties. This ordered structure allows crystals to 
          interact with energy in unique ways.
        </p>

        {/* Key information in callout */}
        <div className="bg-[#f0ebe2] p-4 rounded-lg my-6">
          <h3 className="font-medium text-[#2c2c2c] mb-2">The Piezoelectric Effect</h3>
          <p className="mb-0">
            When pressure is applied to crystals like quartz, they generate a small electrical charge. 
            This property is used in watches, microphones, and computer chips, demonstrating that 
            crystals can indeed interact with energy in measurable ways.
          </p>
        </div>

        {/* Two column comparison */}
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e5e0d5]">
            <h3 className="font-medium text-[#2c2c2c] mb-2">Scientifically Verified</h3>
            <ul className="list-disc pl-5 mb-0">
              <li>Piezoelectric properties</li>
              <li>Consistent vibration frequencies</li>
              <li>Electromagnetic field interaction</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e5e0d5]">
            <h3 className="font-medium text-[#2c2c2c] mb-2">Needs More Research</h3>
            <ul className="list-disc pl-5 mb-0">
              <li>Effects on human biofield</li>
              <li>Specific healing properties</li>
              <li>Energy exchange with humans</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Placebo Effect */}
      <section id="placebo" className="mb-10">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4 border-b border-[#e5e0d5] pb-2">
          The Placebo Effect and Mind-Body Connection
        </h2>

        <p>
          The placebo effect is a well-documented phenomenon where belief in a treatment's effectiveness 
          creates real physiological improvements. Research shows placebos can trigger endorphin release, 
          reduce stress hormones, and activate areas of the brain associated with healing.
        </p>

        <p>
          In crystal healing, the belief in a crystal's properties, combined with mindful practices, 
          may activate these same beneficial neurological responses. This doesn't diminish the value of 
          crystal healing but highlights the remarkable power of our minds to influence wellbeing.
        </p>
      </section>

      {/* Quantum Physics */}
      <section id="quantum" className="mb-10">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4 border-b border-[#e5e0d5] pb-2">
          Quantum Physics and Vibrational Medicine
        </h2>

        <p>
          Quantum physics reveals that at the subatomic level, particles behave in ways that challenge 
          our understanding of reality. Crystals, with their ordered atomic structures, exhibit quantum 
          properties that some suggest might influence our energy fields.
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e5e0d5]">
            <div className="w-10 h-10 rounded-full bg-[#f0ebe2] flex items-center justify-center mx-auto mb-3 text-[#c9a87c]">
              1
            </div>
            <h4 className="font-medium text-[#2c2c2c] mb-1 text-center">Frequency</h4>
            <p className="text-[#5c5c5c] text-sm mb-0">
              Crystals maintain stable vibrational frequencies due to their ordered structure.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e5e0d5]">
            <div className="w-10 h-10 rounded-full bg-[#f0ebe2] flex items-center justify-center mx-auto mb-3 text-[#c9a87c]">
              2
            </div>
            <h4 className="font-medium text-[#2c2c2c] mb-1 text-center">Resonance</h4>
            <p className="text-[#5c5c5c] text-sm mb-0">
              Everything vibrates at specific frequencies, including our bodies' cells.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-[#e5e0d5]">
            <div className="w-10 h-10 rounded-full bg-[#f0ebe2] flex items-center justify-center mx-auto mb-3 text-[#c9a87c]">
              3
            </div>
            <h4 className="font-medium text-[#2c2c2c] mb-1 text-center">Entrainment</h4>
            <p className="text-[#5c5c5c] text-sm mb-0">
              Stronger vibrations may help stabilize disrupted frequencies in the body.
            </p>
          </div>
        </div>
      </section>

      {/* Holistic Approach */}
      <div className="bg-white p-5 rounded-lg shadow-sm border border-[#e5e0d5] my-8">
        <h3 className="font-medium text-[#2c2c2c] mb-2">Our Holistic Approach</h3>
        <p className="mb-0">
          At YUMIERE, we honor both ancient wisdom and modern science. We view crystal healing 
          as a complementary practice that works best alongside conventional approaches to wellbeing, 
          healthy lifestyle choices, and emotional self-care practices.
        </p>
      </div>

      {/* Conclusion */}
      <section id="conclusion" className="mb-10">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4 border-b border-[#e5e0d5] pb-2">
          Conclusion
        </h2>

        <p>
          The science behind crystal healing represents an evolving field where ancient practices meet 
          modern understanding. While some aspects can be explained by established scientific principles, 
          others remain in the realm of emerging science.
        </p>

        <p>
          What's clear is that many people experience genuine benefits from working with crystals, 
          whether through the crystals' intrinsic properties, the power of belief, or a combination 
          of factors. Crystal healing remains a fascinating intersection of ancient wisdom and 
          scientific exploration.
        </p>
      </section>

      {/* Navigation and social sharing */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#e5e0d5]">
        <Link href="/crystal-healing-blog">
          <Button variant="outline" className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
        <div className="flex space-x-3">
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            <Facebook size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            <Twitter size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            <Instagram size={16} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#f0ebe2] flex items-center justify-center text-[#c9a87c]">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </InfoPageLayout>
  )
}