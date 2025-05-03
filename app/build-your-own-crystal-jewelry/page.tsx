import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sparkles, Wand2, Star, CreditCard, Gift, ShoppingBag } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CustomizePanel from "@/components/customize-panel"
import { motion } from "@/components/motion"

export default function CustomizePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f5f0] to-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden h-[65vh]">
            <Image
              src="/crystal-selection.png"
              alt="Customizable crystal bracelet background"
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f8f5f0]/70 to-[#f8f5f0]"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 pt-20 pb-32 md:pb-10 px-6 max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#c9a87c] mr-2" />
              <span className="text-sm font-medium text-[#5c5c5c]">Personalized Crystal Energy</span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl text-[#2c2c2c] font-light mb-6 leading-tight">
              You <span className="font-normal italic text-[#c9a87c]">Imagine</span> It. You{" "}
              <span className="font-normal italic text-[#c9a87c]">Design</span> It.
            </h1>
            <h1 className="font-serif text-4xl md:text-6xl text-[#2c2c2c] font-light mb-6 leading-tight">
              You <span className="font-normal italic text-[#c9a87c]">Wear</span> It.
            </h1>

            <p className="text-[#5c5c5c] text-lg md:text-xl max-w-2xl mx-auto font-light mb-10">
              Bring your vision to life — craft a bracelet that's as unique and powerful as your own energy.
            </p>
          </div>
        </section>

        {/* Customizer Panel */}
        <CustomizePanel />

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ShoppingBag,
                  title: "Free Shipping",
                  description: "On all orders over $50. International shipping available.",
                },
                {
                  icon: Gift,
                  title: "Gift Wrapping",
                  description: "Complimentary gift wrapping with a personalized card.",
                },
                {
                  icon: CreditCard,
                  title: "Secure Payment",
                  description: "100% secure payment with multiple options.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center text-center border border-[#e5e0d5]"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#f8f5f0] flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-[#c9a87c]" />
                    </div>
                    <h3 className="text-xl font-medium text-[#2c2c2c] mb-2">{feature.title}</h3>
                    <p className="text-[#5c5c5c] text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
