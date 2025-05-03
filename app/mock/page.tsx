import BraceletShowcase2 from "@/components/bracelet-showcase-2";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { getProduct } from "@/lib/queries/productsQuery";
import { CreditCard, Gift, ShoppingBag } from "lucide-react";

export default async function MockPage() {

  const product = await getProduct("crystaragem-bracelets")
  
  return (
    <>
      <div className="min-h-screen bg-[#f8f5f0]">
        <Header />

        <main>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="font-serif text-4xl md:text-6xl font-light text-[#2c2c2c] mb-6">
                  CrystaraGem{" "}
                  <span className="font-normal italic">Bracelets</span>
                </h1>
                <p className="text-[#5c5c5c] text-lg md:text-xl font-light max-w-2xl mx-auto">
                  Handcrafted crystal jewelry designed to enhance your energy,
                  promote healing, and manifest abundance in your life.
                </p>
              </div>

              <BraceletShowcase2 product= {product} />
            </div>
          </section>


          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e0d5] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#f8f5f0] flex items-center justify-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-[#c9a87c]" />
                </div>
                <h3 className="text-lg font-medium text-[#2c2c2c] mb-2">
                  Free Shipping
                </h3>
                <p className="text-[#5c5c5c] text-sm">
                  On all orders over $50. International shipping available.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e0d5] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#f8f5f0] flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-[#c9a87c]" />
                </div>
                <h3 className="text-lg font-medium text-[#2c2c2c] mb-2">
                  Gift Wrapping
                </h3>
                <p className="text-[#5c5c5c] text-sm">
                  Complimentary gift wrapping with personalized message card.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e0d5] flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-[#f8f5f0] flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-[#c9a87c]" />
                </div>
                <h3 className="text-lg font-medium text-[#2c2c2c] mb-2">
                  Secure Payment
                </h3>
                <p className="text-[#5c5c5c] text-sm">
                  100% secure payment with multiple payment options.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
