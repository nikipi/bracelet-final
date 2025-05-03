"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Filter, ShoppingBag, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { crystalColors, intentionColors } from "@/components/ui/colormapping";
import { getProductsInHomePage } from "@/lib/queries/productsQuery";

// This would typically come from a database or API
// const allProducts = [
//   {
//     id: "serenity-bracelet",
//     name: "Serenity Bracelet",
//     price: 89.99,
//     image: "/images/crystal-bracelet.png",
//     crystals: ["Amethyst", "Clear Quartz", "Rose Quartz"],
//     intention: "Healing",
//   },
//   {
//     id: "abundance-flow",
//     name: "Abundance Flow",
//     price: 99.99,
//     image: "/images/crystal-bracelet-blue.png",
//     crystals: ["Citrine", "Pyrite", "Green Aventurine"],
//     intention: "Abundance",
//   },
//   {
//     id: "protection-shield",
//     name: "Protection Shield",
//     price: 79.99,
//     image: "/crystal-silk-harmony.png",
//     crystals: ["Black Tourmaline", "Obsidian", "Hematite"],
//     intention: "Protection",
//   },
//   {
//     id: "self-love-embrace",
//     name: "Self-Love Embrace",
//     price: 94.99,
//     image: "/images/crystal-selection.png",
//     crystals: ["Rose Quartz", "Rhodonite", "Moonstone"],
//     intention: "Self-Love",
//   },
//   {
//     id: "clarity-vision",
//     name: "Clarity Vision",
//     price: 109.99,
//     image: "/images/crystal-bracelet.png",
//     crystals: ["Clear Quartz", "Amethyst", "Labradorite"],
//     intention: "Clarity",
//   },
//   {
//     id: "confidence-boost",
//     name: "Confidence Boost",
//     price: 84.99,
//     image: "/images/crystal-bracelet-blue.png",
//     crystals: ["Tiger's Eye", "Carnelian", "Citrine"],
//     intention: "Confidence",
//   },
//   {
//     id: "peaceful-sleep",
//     name: "Peaceful Sleep",
//     price: 89.99,
//     image: "/crystal-silk-harmony.png",
//     crystals: ["Amethyst", "Selenite", "Moonstone"],
//     intention: "Sleep",
//   },
//   {
//     id: "grounding-force",
//     name: "Grounding Force",
//     price: 79.99,
//     image: "/images/crystal-selection.png",
//     crystals: ["Smoky Quartz", "Hematite", "Red Jasper"],
//     intention: "Grounding",
//   },
// ];

export default function ProductPage() {
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

  //   const allProducts = await getProductsInHomePage();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductsInHomePage();
      console.log(response, "dobo sov");

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

  console.log(allProducts, "dfsdhvjsvjfjjjjjjjjjjjjjjjjjj");

  //   const cleanedProducts = allProducts.map(({ node }: any) => {
  //     const metafieldsObj: any = {};

  //     node.metafields.forEach(({ key, value }: any) => {
  //       if (["secondary_intentions", "crystals_included"].includes(key)) {
  //         metafieldsObj[key] = cleanMetafieldArray(value);
  //       } else {
  //         metafieldsObj[key] = value;
  //       }
  //     });

  //     return {
  //       id: node.id,
  //       title: node.title,
  //       handle: node.handle,
  //       price: node.priceRange.minVariantPrice.amount,
  //       image: node.images.edges[0]?.node.originalSrc ?? null,
  //       metafields: metafieldsObj,
  //       totalInventory: node.totalInventory,
  //       tags: node.tags,
  //     };
  //   });

  //   console.log(cleanedProducts);

  //   // State for filters
  //   const [selectedIntentions, setSelectedIntentions] = useState<string[]>([])
  //   const [selectedCrystals, setSelectedCrystals] = useState<string[]>([])
  //   const [priceRange, setPriceRange] = useState<string[]>([])
  //   const [sortOption, setSortOption] = useState<string>("featured")
  //   const [filteredProducts, setFilteredProducts] = useState(allProducts)
  //   const [isSheetOpen, setIsSheetOpen] = useState(false)

  //   // Apply filters and sorting
  //   useEffect(() => {
  //     let result = [...allProducts]

  //     // Filter by intention
  //     if (selectedIntentions.length > 0) {
  //       result = result.filter((product) => selectedIntentions.includes(product.intention))
  //     }

  //     // Filter by crystal
  //     if (selectedCrystals.length > 0) {
  //       result = result.filter((product) => product.crystals.some((crystal) => selectedCrystals.includes(crystal)))
  //     }

  //     // Filter by price
  //     if (priceRange.length > 0) {
  //       result = result.filter((product) => {
  //         if (priceRange.includes("under-80") && product.price < 80) return true
  //         if (priceRange.includes("80-100") && product.price >= 80 && product.price <= 100) return true
  //         if (priceRange.includes("over-100") && product.price > 100) return true
  //         return false
  //       })
  //     }

  //     // Apply sorting
  //     switch (sortOption) {
  //       case "price-low":
  //         result.sort((a, b) => a.price - b.price)
  //         break
  //       case "price-high":
  //         result.sort((a, b) => b.price - a.price)
  //         break
  //       case "newest":
  //         // In a real app, you'd sort by date added
  //         // Here we'll just reverse the order as a placeholder
  //         result.reverse()
  //         break
  //       default:
  //         // 'featured' - no specific sorting
  //         break
  //     }

  //     setFilteredProducts(result)
  //   }, [selectedIntentions, selectedCrystals, priceRange, sortOption])

  //   // Toggle intention filter
  //   const toggleIntention = (intention: string) => {
  //     setSelectedIntentions((prev) =>
  //       prev.includes(intention) ? prev.filter((i) => i !== intention) : [...prev, intention],
  //     )
  //   }

  //   // Toggle crystal filter
  //   const toggleCrystal = (crystal: string) => {
  //     setSelectedCrystals((prev) => (prev.includes(crystal) ? prev.filter((c) => c !== crystal) : [...prev, crystal]))
  //   }

  //   // Toggle price range filter
  //   const togglePriceRange = (range: string) => {
  //     setPriceRange((prev) => (prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]))
  //   }

  //   // Clear all filters
  //   const clearFilters = () => {
  //     setSelectedIntentions([])
  //     setSelectedCrystals([])
  //     setPriceRange([])
  //   }

  //   // Get all unique intentions from products
  //   const allIntentions = Array.from(new Set(allProducts.map((product) => product.intention)))

  //   // Get all unique crystals from products
  //   const allCrystals = Array.from(new Set(allProducts.flatMap((product) => product.crystals))).sort()

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-light text-[#2c2c2c] mb-4">
            Shop Our Collection
          </h1>
          <p className="text-[#5c5c5c] max-w-2xl mx-auto">
            Discover our handcrafted crystal bracelets, each designed with
            intention to support your journey.
          </p>
        </div>

        {/*  Active Filters Display
        {(selectedIntentions.length > 0 || selectedCrystals.length > 0 || priceRange.length > 0) && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Active Filters:</span>

              {selectedIntentions.map((intention) => (
                <Badge
                  key={intention}
                  variant="outline"
                  className="flex items-center gap-1 px-2 py-1"
                  onClick={() => toggleIntention(intention)}
                >
                  {intention}
                  <span className="cursor-pointer">×</span>
                </Badge>
              ))}

              {selectedCrystals.map((crystal) => (
                <Badge
                  key={crystal}
                  variant="outline"
                  className="flex items-center gap-1 px-2 py-1"
                  onClick={() => toggleCrystal(crystal)}
                >
                  <span className={`w-2 h-2 rounded-full ${crystalColors[crystal]}`}></span>
                  {crystal}
                  <span className="cursor-pointer">×</span>
                </Badge>
              ))}

              {priceRange.map((range) => (
                <Badge
                  key={range}
                  variant="outline"
                  className="flex items-center gap-1 px-2 py-1"
                  onClick={() => togglePriceRange(range)}
                >
                  {range === "under-80" ? "Under $80" : range === "80-100" ? "$80 - $100" : "Over $100"}
                  <span className="cursor-pointer">×</span>
                </Badge>
              ))}

              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm text-gray-500">
                Clear All
              </Button>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
                {(selectedIntentions.length > 0 || selectedCrystals.length > 0 || priceRange.length > 0) && (
                  <Badge className="ml-1 bg-[#c9a87c]">
                    {selectedIntentions.length + selectedCrystals.length + priceRange.length}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>Narrow down your search with these filters.</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <h3 className="text-sm font-medium mb-2">Intention</h3>
                <div className="space-y-2">
                  {allIntentions.map((intention) => (
                    <div key={intention} className="flex items-center space-x-2">
                      <Checkbox
                        id={`intention-${intention}`}
                        checked={selectedIntentions.includes(intention)}
                        onCheckedChange={() => toggleIntention(intention)}
                      />
                      <Label htmlFor={`intention-${intention}`} className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${intentionColors[intention].split(" ")[0]}`}></div>
                        {intention}
                      </Label>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <h3 className="text-sm font-medium mb-2">Crystal Type</h3>
                <div className="space-y-2 max-h-[200px] overflow-y-auto">
                  {allCrystals.map((crystal) => (
                    <div key={crystal} className="flex items-center space-x-2">
                      <Checkbox
                        id={`crystal-${crystal}`}
                        checked={selectedCrystals.includes(crystal)}
                        onCheckedChange={() => toggleCrystal(crystal)}
                      />
                      <div className={`w-3 h-3 rounded-full ${crystalColors[crystal]}`}></div>
                      <Label htmlFor={`crystal-${crystal}`}>{crystal}</Label>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="price-under-80"
                      checked={priceRange.includes("under-80")}
                      onCheckedChange={() => togglePriceRange("under-80")}
                    />
                    <Label htmlFor="price-under-80">Under $80</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="price-80-100"
                      checked={priceRange.includes("80-100")}
                      onCheckedChange={() => togglePriceRange("80-100")}
                    />
                    <Label htmlFor="price-80-100">$80 - $100</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="price-over-100"
                      checked={priceRange.includes("over-100")}
                      onCheckedChange={() => togglePriceRange("over-100")}
                    />
                    <Label htmlFor="price-over-100">Over $100</Label>
                  </div>
                </div>

                <div className="mt-6 flex justify-between">
                  <Button variant="outline" onClick={clearFilters}>
                    Clear All
                  </Button>
                  <Button onClick={() => setIsSheetOpen(false)}>Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="text-sm">Sort by:</span>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-6 text-[#5c5c5c]">
          Showing {filteredProducts.length} of {allProducts.length} products
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card key={product.id} className="overflow-hidden hover:shadow-md transition-all h-full">
                  <div className="relative h-64">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    <Badge className={`absolute top-4 left-4 ${intentionColors[product.intention]}`}>
                      {product.intention}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.crystals.map((crystal) => (
                        <div
                          key={crystal}
                          className="inline-flex items-center text-xs bg-white border border-gray-200 rounded-full px-2 py-1"
                        >
                          <span className={`w-2 h-2 rounded-full mr-1 ${crystalColors[crystal]}`}></span>
                          {crystal}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-[#c9a87c]">${product.price}</div>
                      <Button size="sm" className="bg-[#c9a87c] hover:bg-[#b89b72] text-white">
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">No products match your filters.</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.length > 0 ? (
            allProducts.map((product: any) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <Card
                  key={product.id}
                  className="overflow-hidden hover:shadow-md transition-all h-full"
                >
                  <div className="relative h-64">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${
                        intentionColors[product.metafields.primary_intentions]
                      }`}
                    >
                      {product.metafields.primary_intentions}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1">
                      {product.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.metafields.crystals_included.map(
                        (crystal: any) => (
                          <div
                            key={crystal}
                            className="inline-flex items-center text-xs bg-white border border-gray-200 rounded-full px-2 py-1"
                          >
                            <span
                              className={`w-2 h-2 rounded-full mr-1 ${crystalColors[crystal]}`}
                            ></span>
                            {crystal}
                          </div>
                        )
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="font-medium text-[#c9a87c]">
                        ${product.price}
                      </div>
                      <Button
                        size="sm"
                        className="bg-[#c9a87c] hover:bg-[#b89b72] text-white"
                      >
                        <ShoppingBag className="h-4 w-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">
                No products match your filters.
              </p>
              {/* <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button> */}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
