"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const promotions = [
  { id: 1, text: "Buy 2 Get  25% Off | Buy 3 Get 40% Off" },
  { id: 2, text: "Free Shipping on Orders Over $75" },
]

export default function PromotionalBanner() {
  const [currentPromotion, setCurrentPromotion] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#c9a87c] text-white py-3 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center h-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={promotions[currentPromotion].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center font-medium"
            >
              {promotions[currentPromotion].text}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
