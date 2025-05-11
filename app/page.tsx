import Header from "@/components/header";
import Footer from "@/components/footer";
import PromotionalBanner from "@/components/homepage-components/promotional-banner";
import HeroSection from "@/components/homepage-components/hero-section";
import MostLovedDesigns from "@/components/homepage-components/most-loved-designs";

import HealingCategories from "@/components/homepage-components/healing-categories";
import AboutUsSection from "@/components/homepage-components/about-us-section";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <PromotionalBanner />

      {/* Add a div wrapper around all content sections with consistent spacing */}
      <div className="flex flex-col space-y-2 pb-20">
        <HeroSection />
        <HealingCategories />
        <MostLovedDesigns />
        <AboutUsSection />
      </div>

      <Footer />
    </main>
  );
}
