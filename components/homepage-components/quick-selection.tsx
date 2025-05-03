"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const intentions = [
  { id: "love", label: "Love & Relationships" },
  { id: "abundance", label: "Abundance & Prosperity" },
  { id: "healing", label: "Healing & Wellness" },
  { id: "protection", label: "Protection & Safety" },
  { id: "clarity", label: "Mental Clarity" },
]

export default function QuickSelection() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-4">Find Your Perfect Crystal</h2>
          <p className="text-[#5c5c5c] max-w-2xl mx-auto">
            Choose your primary intention to discover the crystal bracelet that will best support your energy needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {intentions.map((intention) => (
            <button
              key={intention.id}
              onClick={() => setSelected(intention.id)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selected === intention.id
                  ? "bg-[#c9a87c] border-[#c9a87c] text-white"
                  : "bg-white border-[#e5e0d5] text-[#5c5c5c] hover:border-[#c9a87c]"
              }`}
            >
              {intention.label}
            </button>
          ))}
        </div>

        {selected && (
          <div className="bg-white rounded-xl p-8 shadow-sm border border-[#e5e0d5]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl font-light text-[#2c2c2c] mb-2">Perfect Match Found</h3>
                <p className="text-[#5c5c5c] mb-4">Based on your intention, we recommend:</p>

                <div className="mb-6">
                  <h4 className="font-medium text-xl text-[#2c2c2c]">
                    {selected === "love" && "Rose Quartz Harmony Bracelet"}
                    {selected === "abundance" && "Citrine Prosperity Bracelet"}
                    {selected === "healing" && "Amethyst Healing Bracelet"}
                    {selected === "protection" && "Black Tourmaline Shield Bracelet"}
                    {selected === "clarity" && "Clear Quartz Focus Bracelet"}
                  </h4>
                  <div className="text-xl font-medium text-[#c9a87c] my-2">
                    {selected === "love" && "$89"}
                    {selected === "abundance" && "$95"}
                    {selected === "healing" && "$89"}
                    {selected === "protection" && "$79"}
                    {selected === "clarity" && "$85"}
                  </div>
                  <p className="text-[#5c5c5c]">
                    {selected === "love" && "Opens the heart chakra and attracts loving energy"}
                    {selected === "abundance" && "Manifests wealth and attracts opportunities"}
                    {selected === "healing" && "Balances energy and promotes physical wellbeing"}
                    {selected === "protection" && "Creates a shield against negative energies"}
                    {selected === "clarity" && "Enhances focus and mental clarity"}
                  </p>
                </div>

                <Button className="bg-[#c9a87c] hover:bg-[#b89b72] text-white">View Details</Button>
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={selected === "love" ? "/images/crystal-bracelet.png" : "/images/crystal-bracelet-blue.png"}
                  alt="Recommended bracelet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
