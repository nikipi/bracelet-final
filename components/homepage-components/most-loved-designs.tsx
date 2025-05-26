"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { motion } from "@/components/motion";
import BuildYourOwnDesign from "./build-your-own-design";
import {
  getProductsInHomePage,
} from "@/lib/queries/productsQuery";

export default function MostLovedDesigns() {
  function cleanMetafieldArray(value: any) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed.map((item) => item.trim()) : [];
    } catch {
      return [];
    }
  }

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductsInHomePage();

      const cleaned = response.map(({ node }: any) => {
        const metafieldsObj: any = {};
        node.metafields.forEach(({ key, value }: any) => {
          if (["secondary_intentions", "crystals_included"].includes(key)) {
            metafieldsObj[key] = cleanMetafieldArray(value);
          } else {
            metafieldsObj[key] = value;
          }
        });

        return {
          id: node.id,
          title: node.title,
          handle: node.handle,
          price: node.priceRange.minVariantPrice.amount,
          image: node.images.edges[0]?.node.originalSrc ?? null,
          metafields: metafieldsObj,
          totalInventory: node.totalInventory,
          tags: node.tags,
        };
      });
      setAllProducts(cleaned);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  console.log(allProducts);

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2c2c2c] mb-4">
            Most-Loved <span className="font-normal italic">Designs</span>
          </h2>
          <p className="text-[#5c5c5c] max-wxl mx-auto">
            Discover our bestselling crystal jewelry, each piece carefully
            crafted to enhance specific energies and intentions.
          </p>
        </div>

        {/* Main content with products grid and build your own design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* First 4 products in 3 columns */}
          {allProducts.slice(0, 4).map((product: any, index) => (
            <motion.div
              key={product.id}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/product/${product.handle}`} key={product.id}>
               
              <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                <div className="relative h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 relative border-t-2 border-gray-200 flex flex-col" >
                  <h3 className="font-medium text-[#2c2c2c] mb-1">
                    {product.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.metafields.crystals_included.map(
                      (crystal: any, idx: any) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#f8f5f0] text-[#5c5c5c] rounded-full text-xs"
                        >
                          {crystal}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#c9a87c] font-medium ml-auto">
                      £{product.price}
                    </span>
                   
                  </div>
                </CardContent>
              </Card>
              </Link>
            </motion.div>
          ))}

          {/* Build Your Own Design - Right Side, spanning 2 rows and 1 column */}
          <div className="lg:col-span-2 lg:row-span-2 order-first lg:order-none mb-8 lg:mb-0 rounded-lg">
            <BuildYourOwnDesign variant="inline" />
          </div>

          {/* Remaining products */}
          {allProducts.slice(4).map((product: any) => (
            <motion.div
              key={product.id}
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/product/${product.handle}`} key={product.id}>
              <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                <div className="relative h-64">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-[#2c2c2c] mb-1">
                    {product.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.metafields.crystals_included.map(
                      (crystal: any, idx: any) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#f8f5f0] text-[#5c5c5c] rounded-full text-xs"
                        >
                          {crystal}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#c9a87c] font-medium ml-auto">
                      {product.price}
                    </span>
                    
                  </div>
                </CardContent>
              </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Shop All Button */}
        <div className="text-center mt-12">
          <Link href="/product">
            <Button
              variant="outline"
              className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0] px-8 py-3"
            >
              Shop All Designs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
