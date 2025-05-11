"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import CartButton from "./cart/cart-button";
import Logo from "@/components/logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#f8f5f0] border-b border-[#e5e0d5]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Side: Menu button and Links */}
          <div className="flex items-center space-x-8">
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
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/product"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Center: Logo */}
          {/* Center: Logo */}
          <div className="flex justify-center absolute left-0 right-0 pointer-events-none">
            <Link
              href="/"
              className="flex items-center justify-center pointer-events-auto"
            >
              <Logo size="sm" />
            </Link>
          </div>

          {/* Center: Logo */}
          {/* Right Side: Cart */}
          <div className="flex items-center">
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
                href="/product"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2 border-b border-[#e5e0d5]"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2 border-b border-[#e5e0d5]"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-[#5c5c5c] hover:text-[#2c2c2c] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
