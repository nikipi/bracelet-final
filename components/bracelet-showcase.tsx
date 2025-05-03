"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Define the slides data
const slides = [
  {
    id: 1,
    image: "/images/crystal-bracelet.png",
    title: "Harmony & Balance Bracelet",
    description:
      "Our handcrafted crystal bracelets combine the healing properties of carefully selected gemstones to create powerful energy tools that support your intentions and enhance your well-being.",
    crystals: [
      {
        name: "Amethyst",
        description: "Enhances spiritual awareness, promotes calm and balance, and protects against negative energy.",
      },
      {
        name: "Rose Quartz",
        description:
          "The stone of unconditional love, opening the heart to all forms of love: self-love, family love, platonic love, and romantic love.",
      },
      {
        name: "Moonstone",
        description:
          "Balances emotional states, enhances intuition, and promotes inspiration, success, and good fortune.",
      },
    ],
  },
  {
    id: 2,
    image: "/images/crystal-bracelet-blue.png",
    title: "Winter Serenity Bracelet",
    description:
      "Experience the calming energy of our Winter Serenity Bracelet, designed to bring clarity, peace, and protection during life's challenges.",
    crystals: [
      {
        name: "Aquamarine",
        description: "Calms the mind, reduces stress, and helps you connect with your higher self.",
      },
      {
        name: "Blue Topaz",
        description: "Promotes honesty, clarity of feelings, and helps express yourself with confidence.",
      },
      {
        name: "Clear Quartz",
        description: "Amplifies energy and thought, as well as the effect of other crystals. Provides clarity of mind.",
      },
    ],
  },
]

export default function BraceletShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Handle visibility animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Handle automatic slide changing
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentSlide, isPaused])

  const nextSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const slide = slides[currentSlide]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-[#2c2c2c]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-[#2c2c2c]" />
          </button>

          {/* Slides */}
          {slides.map((s, index) => (
            <div
              key={s.id}
              className={cn(
                "absolute inset-0 transition-all duration-1000 transform overflow-hidden",
                index === currentSlide
                  ? "opacity-100 translate-x-0 relative"
                  : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full",
              )}
            >
              <div className="aspect-square relative">
                <Image src={s.image || "/placeholder.svg"} alt={s.title} fill className="object-cover" />
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentSlide ? "bg-white w-6" : "bg-white/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
          )}
        >
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-3">{slide.title}</h2>
          <p className="text-[#5c5c5c] mb-8 leading-relaxed">{slide.description}</p>

          <div className="space-y-6 mb-8">
            {slide.crystals.map((crystal) => (
              <div key={crystal.name} className="border-b border-[#e5e0d5] pb-4">
                <h3 className="font-medium text-[#2c2c2c] mb-1">{crystal.name}</h3>
                <p className="text-sm text-[#5c5c5c]">{crystal.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#c9a87c] hover:bg-[#b89b72] text-white px-8 py-6">Add to Cart</Button>
            <Button variant="outline" className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0] px-8 py-6">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
