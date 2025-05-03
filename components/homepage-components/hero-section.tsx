'use client';

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/crystal-silk-harmony.png"
          alt="Crystal jewelry collection"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white" >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-light mb-6"
        >
          Wear The Energy <span className="font-normal italic">You Desire</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
           Craft your own crystals that channel positivity and vitality into your life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/shop">
            <Button className="bg-white text-[#2c2c2c] hover:bg-[#f0ebe2] px-8 py-6 text-lg">
              Transform Your Energy Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
