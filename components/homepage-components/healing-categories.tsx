"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "@/components/motion"

const categories = [
  {
    title: "Inner Peace",
    description: "Find tranquility and calm",
    image: "/inner-peace-crystals.png",
    link: "crystal-properties?category=inner-peace",
  },
  {
    title: "Abundance",
    description: "Attract prosperity and growth",
    image: "/abundance-crystals.png",
    link: "crystal-properties?category=abundance",
  },
  {
    title: "Protection",
    description: "Shield your energy and space",
    image: "/protection-crystals.png",
    link: "crystal-properties?category=protection",
  },
  {
    title: "Self-Love",
    description: "Nurture your heart and spirit",
    image: "/self-love-crystals.png",
    link: "crystal-properties?category=self-love",
  },
]

export default function HealingCategories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-4">Healing Intentions</h2>
          <p className="text-[#5c5c5c] max-w-2xl mx-auto">
            Discover crystals curated for specific healing journeys and intentions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={category.link}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <div className="relative h-64">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="font-serif text-xl mb-1">{category.title}</h3>
                      <p className="text-white/80 text-sm">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
