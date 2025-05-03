import InfoPageLayout from "@/components/info-page-layout";
import Image from "next/image";
import { Leaf, Recycle, Heart, Globe } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <InfoPageLayout
      title="Sustainability"
      subtitle="Our commitment to ethical sourcing, environmental responsibility, and social impact"
    >
      <div className="mb-16 text-center"> {/* Increased margin-bottom */}
        <p className="text-[#5c5c5c] max-w-3xl mx-auto">
          At Yumiere, sustainability is a core value that guides every aspect of our business. We believe in creating products that promote wellbeing while being mindful of our planet and the communities we work with.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16"> {/* Increased margin-bottom */}
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image
            src="/images/crystal-bracelet-blue.png"
            alt="Ethically sourced crystals"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-4">Ethical Sourcing</h2>
          <p className="text-[#5c5c5c] mb-4 leading-relaxed">
            We collaborate with suppliers who share our commitment to responsible mining, fair labor practices, and environmental stewardship.
          </p>
          <p className="text-[#5c5c5c] mb-4 leading-relaxed">
            Transparency is key, and each crystal in our collection is traceable to its source, ensuring that our supply chain aligns with our values.
          </p>
          <p className="text-[#5c5c5c] leading-relaxed">
            We prioritize working with suppliers who are committed to minimizing environmental impact and promoting sustainable practices.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"> {/* Reduced margin-bottom */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] text-center">
          <div className="w-12 h-12 rounded-full bg-[#f0ebe2] flex items-center justify-center mx-auto mb-4">
            <Leaf className="h-6 w-6 text-[#c9a87c]" />
          </div>
          <h3 className="font-medium text-[#2c2c2c] mb-2">Eco-Friendly Packaging</h3>
          <p className="text-[#5c5c5c] text-sm">
            We use packaging that is plastic-free, recyclable, and made from sustainable materials to reduce waste.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] text-center">
          <div className="w-12 h-12 rounded-full bg-[#f0ebe2] flex items-center justify-center mx-auto mb-4">
            <Recycle className="h-6 w-6 text-[#c9a87c]" />
          </div>
          <h3 className="font-medium text-[#2c2c2c] mb-2">Zero Waste Practices</h3>
          <p className="text-[#5c5c5c] text-sm">
            We strive to minimize waste in our studio, repurposing materials whenever possible.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] text-center">
          <div className="w-12 h-12 rounded-full bg-[#f0ebe2] flex items-center justify-center mx-auto mb-4">
            <Heart className="h-6 w-6 text-[#c9a87c]" />
          </div>
          <h3 className="font-medium text-[#2c2c2c] mb-2">Community Engagement</h3>
          <p className="text-[#5c5c5c] text-sm">
            We are dedicated to supporting the communities and artisans who help bring our products to life.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#e5e0d5] text-center">
          <div className="w-12 h-12 rounded-full bg-[#f0ebe2] flex items-center justify-center mx-auto mb-4">
            <Globe className="h-6 w-6 text-[#c9a87c]" />
          </div>
          <h3 className="font-medium text-[#2c2c2c] mb-2">Carbon Neutral</h3>
          <p className="text-[#5c5c5c] text-sm">
            We take steps to offset our carbon footprint by investing in initiatives that support environmental sustainability.
          </p>
        </div>
      </div>
    </InfoPageLayout>
  );
}
