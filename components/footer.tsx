"use client";
import Link from "next/link";
import Logo from "@/components/logo";

import { useState } from "react";

import { ShopifyData } from "@/lib/shopify";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setSuccess(false);
      return;
    }

    setError(null);

    const mutation = `
        mutation {
          customerCreate(input: {
            email: "${email}",
            password: "demo1234",
            acceptsMarketing: true
          }) {
            customerUserErrors {
              message
            }
            customer {
              email
            }
          }
        }
      `;

    const response = await ShopifyData(mutation);
    const errors = response?.data?.customerCreate?.customerUserErrors;

    if (errors && errors.length > 0) {
      setError(errors[0].message);
      setSuccess(false);
    } else {
      setSuccess(true);
      setEmail("");
    }
  };
  return (
    <footer className="bg-[#4a4a4a] text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-[#a0a0a0] text-sm">
              Handcrafted crystal jewelry designed to enhance your energy,
              promote healing, and manifest abundance in your life.
            </p>


            <form onSubmit={handleSubmit} className="mt-6">
            <h6 className="text-base font-semibold mb-3">Subscribe & Get 10% Off</h6>

                  <p className="text-sm text-[#a0a0a0] mb-4">
          Join our crystal-loving community and receive energy tips, new arrivals & special offers straight to your inbox.
        </p>
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0 mt-2">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg  "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full text-sm font-medium text-center bg-[#c9a87c] hover:bg-[#b89b72] text-white rounded-lg border cursor-pointer sm:rounded-none sm:rounded-r-lg "
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              {error && (
                <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
              )}
              {success && (
                <p className="text-sm text-green-600 mt-2 text-center">
                  Subscription successful!
                </p>
              )}
            </form>
          </div>
          <div>


            <Link href="/product" className="font-medium mb-4">
              Products
            </Link>
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
                <Link
                  href="/build-your-own-crystal-jewelry"
                  className="hover:text-white transition-colors"
                >
                  Make Your Own
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/about" className="font-medium mb-4">
              About
            </Link>
            <ul className="space-y-2 text-[#a0a0a0]">
              <li>
                <Link
                  href="/about/our-story"
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/crystal-properties"
                  className="hover:text-white transition-colors"
                >
                  Healing Intention
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/crystal-healing-blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/contact" className="font-medium mb-4">
              Contact
            </Link>
            <ul className="space-y-2 text-[#a0a0a0]">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Email Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
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
  );
}
