"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CartButton from "./cart/cart-button";
import Logo from "@/components/logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#f8f5f0] border-b border-[#e5e0d5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center h-20 relative">
          {/* Left Side: Menu button and nav links */}
          <div className="flex items-center space-x-1">
            <button
              className="md:hidden mr-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[#2c2c2c]" />
              ) : (
                <Menu className="h-6 w-6 text-[#2c2c2c]" />
              )}
            </button>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm whitespace-nowrap font-medium">
            <Link href="/product" className="text-[#5c5c5c] hover:text-[#2c2c2c]">
              Shop
            </Link>
            <Link href="/build-your-own-crystal-jewelry" className="text-[#5c5c5c] hover:text-[#2c2c2c]">
              Build Your Own
            </Link>
            <Link href="/about" className="text-[#5c5c5c] hover:text-[#2c2c2c]">
              About
            </Link>
            <Link href="/crystal-properties" className="text-[#5c5c5c] hover:text-[#2c2c2c]">
              Crystals & Energy
            </Link>
            <Link href="/crystal-healing-blog" className="text-[#5c5c5c] hover:text-[#2c2c2c]">
              Blogs
            </Link>
          </nav>


          </div>

          {/* Center: Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center justify-center">
              <Logo size="sm" />
            </Link>
          </div>

          {/* Right Side: Cart */}
          <div className="flex justify-end items-center">
            <CartButton />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e5e0d5]">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/shop"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2 border-b border-[#e5e0d5]"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/build-your-own-crystal-jewelry"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2 border-b border-[#e5e0d5]"
                onClick={() => setIsMenuOpen(false)}
              >
                Build Your Own
              </Link>
              <Link
                href="/about"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2 border-b border-[#e5e0d5]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/crystal-properties"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2 border-b border-[#e5e0d5]"
                onClick={() => setIsMenuOpen(false)}
              >
                Crystals & Energy
              </Link>
              <Link
                href="/crystal-healing-blog"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}