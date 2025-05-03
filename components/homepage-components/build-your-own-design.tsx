"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown, Wand2 } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import BeadPreview from "../customize/BeadPreview"
import { BeadType } from "@/components/beadsInfo"
import PatternPreview from "../customize/PatternPreview"
import { braceletSizes, BeadSizesType } from "@/components/customize/SizeSelector"
import { BraceletSizesType } from "@/components/customize/SizeSelector"
import { beadSizes } from "@/components/customize/SizeSelector"
import { beadTypes } from "@/components/beadsInfo"
import { generatePersonalizedLayout, getBeadPosition } from "@/app/build-your-own-crystal-jewelry/tool/tool"
import BeadSelector from "../customize/BeadSelector"

interface BuildYourOwnDesignProps {
  variant?: "fixed" | "inline"
  className?: string
}

export default function BuildYourOwnDesign({ variant = "fixed", className = "" }: BuildYourOwnDesignProps) {
  const [isMinimized, setIsMinimized] = useState(false)

  // Static Fixed Profile
  const fixedUserProfile = {
    zodiacSign: "Aries",
    preferredCrystals: ["Amethyst", "ClearQuartz"],
    isGift: false,
    purposes: ["Love", "Healing"],
  }

  const initPatternIndex = useRef(0)

  const [selectedBraceletSize, setSelectedBraceletSize] = useState<keyof BraceletSizesType>("17cm")
  const [selectedBeadSize, setSelectedBeadSize] = useState<keyof typeof beadSizes>("8mm")
  const [individualBeadSizes, setIndividualBeadSizes] = useState<BeadSizesType[]>([])
  const [selectedBeadIndex, setSelectedBeadIndex] = useState<number | null>(null)

  const beadCount = 20

  const initialBracelet = generatePersonalizedLayout({
    beadCount,
    userProfile: fixedUserProfile,
    patternIndex: initPatternIndex.current,
  }).layout

  const [bracelet, setBracelet] = useState<BeadType[]>(initialBracelet)

  // Handler for bead clicks
  const handleBeadClick = (index: number) => {
    setSelectedBeadIndex(index)
  }

  // Handler to change bead type
  const changeBeadType = (beadType: BeadType) => {
    if (selectedBeadIndex !== null) {
      const newBracelet = [...bracelet]
      newBracelet[selectedBeadIndex] = beadType
      setBracelet(newBracelet)
    }
  }

  // --- Render ---

  if (variant === "inline") {
    return (
      <div
        className={`bg-white rounded-lg shadow-lg p-6 border border-[#e5e0d5] h-full flex flex-col justify-between ${className}`}
      >
        <div>
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl font-light text-[#2c2c2c] mb-2">
              Build Your Own Design
            </h3>
            <p className="text-[#5c5c5c]">Create a custom piece that matches your unique energy needs</p>
          </div>

          {/* Bracelet Preview + Bead Selector */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
              {/* Bracelet Preview */}
              <div className="relative w-[350px] h-[400px]">
                {bracelet.map((beadType, index) => {
                  const { x, y } = getBeadPosition(index, beadCount, braceletSizes[selectedBraceletSize])
                  const isSelected = selectedBeadIndex === index
                  const bead = beadTypes[beadType]
                  const beadSize = individualBeadSizes[index] ?? selectedBeadSize
                  const size = beadSizes[beadSize]

                  return (
                    <BeadPreview
                      key={index}
                      left={x}
                      top={y}
                      isSelected={isSelected}
                      index={index}
                      bead={bead}
                      click={handleBeadClick}
                      size={size}
                    />
                  )
                })}

                {/* Center Circle */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgba(229,224,213,0.1)] border-dashed pointer-events-none"
                  style={{
                    width: `${braceletSizes[selectedBraceletSize] * 2}px`,
                    height: `${braceletSizes[selectedBraceletSize] * 2}px`,
                  }}
                ></div>
              </div>

              {/* Bead Selector */}
              <div className="w-full md:w-1/3">
                <BeadSelector
                  selectedBeadIndex={selectedBeadIndex}
                  bracelet={bracelet}
                  changeBeadType={changeBeadType}
                  individualBeadSizes={individualBeadSizes}
                  selectedBeadSize={selectedBeadSize}
                  beadSizes={beadSizes}
                  setIndividualBeadSizes={setIndividualBeadSizes}
                  setSelectedBeadIndex={setSelectedBeadIndex}
                  handleBeadClick={handleBeadClick}
                />
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4 mb-4">
            {["Discover your intentions and choose your desired energy", "Design your personalized bracelet", "Add your personal touches"].map((text, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-md bg-[#f8f5f0]">
                <div className="w-10 h-10 rounded-full bg-[#c9a87c] text-white flex items-center justify-center">{idx + 1}</div>
                <span className="text-[#5c5c5c]">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <Link href="/build-your-own-crystal-jewelry" className="mt-auto">
          <Button className="w-full bg-[#c9a87c] hover:bg-[#b89b72] text-white py-6 text-lg">
            <Wand2 className="mr-2 h-5 w-5" />
            Create Your Own
          </Button>
        </Link>
      </div>
    )
  }

  // Mobile Fixed Floating Button Variant
  return (
    <div className="fixed bottom-6 right-6 z-50 lg:hidden">
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-4 w-72 border border-[#e5e0d5]"
          >
            <div className="text-center mb-4">
              <h3 className="font-serif text-xl font-light text-[#2c2c2c]">
                Build Your Own <span className="font-normal italic">Design</span>
              </h3>
              <p className="text-sm text-[#5c5c5c]">Create a custom piece that matches your unique energy needs</p>
            </div>

            <div className="space-y-3 mb-4">
              {["Discover your intentions and choose your desired energy", "Build your personalized bracelet or jewelry", "Add your personal touches"].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 rounded-md bg-[#f8f5f0]">
                  <div className="w-8 h-8 rounded-full bg-[#c9a87c] text-white flex items-center justify-center">{idx + 1}</div>
                  <span className="text-sm text-[#5c5c5c]">{text}</span>
                </div>
              ))}
            </div>

            <Link href="/build-your-own-crystal-jewelry">
              <Button className="w-full bg-[#c9a87c] hover:bg-[#b89b72] text-white">
                <Wand2 className="mr-2 h-4 w-4" />
                Create Your Own
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className="mt-2 ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-[#c9a87c] text-white shadow-md hover:bg-[#b89b72] transition-all"
        aria-label={isMinimized ? "Expand custom design panel" : "Minimize custom design panel"}
      >
        {isMinimized ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </button>
    </div>
  )
}
