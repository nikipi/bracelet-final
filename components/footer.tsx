import Link from "next/link"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-[#4a4a4a] text-white py-12 mt-16">
      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Logo size="sm" />
              </Link>
              <p className="text-[#a0a0a0] text-sm">
                Handcrafted crystal jewelry designed to enhance your energy, promote healing, and manifest abundance in
                your life.
              </p>
            </div>
            <div>
              <Link href="/shop" className="font-medium mb-4">Shop</Link>
              <ul className="space-y-2 text-[#a0a0a0]">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Protection Collection
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Healing Collection
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Abundance Collection
                  </Link>
                </li>
                <li>
                  <Link href="/build-your-own-crystal-jewelry" className="hover:text-white transition-colors">
                    Make Your Own
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Link href="/about" className="font-medium mb-4">About</Link>
              <ul className="space-y-2 text-[#a0a0a0]">
                <li>
                  <Link href="/about/our-story" className="hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/crystal-properties" className="hover:text-white transition-colors">
                    Healing Intention
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="hover:text-white transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="/crystal-healing-blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
            <Link href="/contact" className="font-medium mb-4">Contact</Link>
              <ul className="space-y-2 text-[#a0a0a0]">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Email Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-white transition-colors">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms & Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#3c3c3c] mt-8 pt-8 text-center text-[#a0a0a0] text-sm">
            2025 YUMIERE. All rights reserved.
          </div>
        </div>
      </footer>
  )
}
