"use client";
import { CartContext } from "@/context/shopContext";
import ProductOptions from "../variant-options";
import { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Heart,
  ShoppingBag,
  Share2,
  Star,
  Gift,
  Truck,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { crystalColors, intentionColors } from "@/components/ui/colormapping";
import { getProductsInHomePage } from "@/lib/queries/productsQuery";
import Newsletter from "../newsletter";

// Dynamic imports for non-critical components
const Tabs = dynamic(
  () => import("@/components/ui/tabs").then((mod) => mod.Tabs),
  { ssr: true }
);

const TabsContent = dynamic(
  () => import("@/components/ui/tabs").then((mod) => mod.TabsContent),
  { ssr: true }
);

const TabsList = dynamic(
  () => import("@/components/ui/tabs").then((mod) => mod.TabsList),
  { ssr: true }
);

const TabsTrigger = dynamic(
  () => import("@/components/ui/tabs").then((mod) => mod.TabsTrigger),
  { ssr: true }
);

const RadioGroup = dynamic(
  () => import("@/components/ui/radio-group").then((mod) => mod.RadioGroup),
  { ssr: true }
);

const RadioGroupItem = dynamic(
  () => import("@/components/ui/radio-group").then((mod) => mod.RadioGroupItem),
  { ssr: true }
);

const Accordion = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.Accordion),
  { ssr: true }
);

const AccordionContent = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionContent),
  { ssr: true }
);

const AccordionItem = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionItem),
  { ssr: true }
);

const AccordionTrigger = dynamic(
  () => import("@/components/ui/accordion").then((mod) => mod.AccordionTrigger),
  { ssr: true }
);

const Label = dynamic(
  () => import("@/components/ui/label").then((mod) => mod.Label),
  { ssr: true }
);

const Button = dynamic(
  () => import("@/components/ui/button").then((mod) => mod.Button),
  { ssr: true }
);

interface ProductPageProps {
  product: any; // In a real app, you'd use a proper type here
}

const crystalDescriptions: any = {
  Amethyst:
    "Promotes calm and balance, helps with stress relief and emotional healing.",
  "Clear Quartz":
    "Amplifies energy and thought, aids concentration and memory.",
  "Rose Quartz": "Stone of unconditional love, promotes compassion and peace.",
  Citrine: "Known as the stone of wealth, it attracts abundance and success.",
  "Green Aventurine": "Brings luck, prosperity, and good fortune.",
  Pyrite:
    "A stone of protection and abundance, it enhances confidence and manifesting power.",
};

export default function ProductPage({ product }: ProductPageProps) {
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


  function cleanMetafieldArray(value: any) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed.map((item) => item.trim()) : [];
    } catch {
      return [];
    }
  }

  function transformProduct(product: any) {
    const metafieldsObj: any = {};

    product.metafields.forEach(({ key, value }: any) => {
      if (["secondary_intentions", "crystals_included"].includes(key)) {
        metafieldsObj[key] = cleanMetafieldArray(value);
      } else {
        metafieldsObj[key] = value;
      }
    });

    return {
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      image: product.images.edges[0]?.node.originalSrc ?? null,
      metafields: metafieldsObj,
      price: product.priceRange.minVariantPrice.amount,
    };
  }
  const transformed = transformProduct(product);

  const { addToCart }: any = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allVariantOptions = product.variants.edges?.map((variant: any) => {
    const allOptions: any = {};

    variant.node.selectedOptions.map((item: any) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.src,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.price.amount,
      variantQuantity: quantity,
    };
  });

  const defaultValues: any = {};
  product.options.map((item: any) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name: any, value: any) {
    setSelectedOptions((prevState: any) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item: any) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  const recommendedProducts = allProducts.filter(
    (product: any) => product.id !== transformed.id
  );


  return (
    <div className="bg-[#f8f5f0] min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-[#5c5c5c] mb-6">
          <Link href="/" className="hover:text-[#c9a87c]">
            Home
          </Link>{" "}
          /
          <Link href="/shop" className="hover:text-[#c9a87c] mx-2">
            Product
          </Link>{" "}
          /<span className="text-[#2c2c2c]"> {transformed.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="flex flex-col  space-y-6">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <Image
                src={
                  product.images.edges[0]?.node.originalSrc ||
                  "/placeholder.svg"
                }
                alt={transformed.title}
                fill
                className="object-cover"
              />

              {product.images.edges.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/85 hover:bg-white rounded-full shadow-md border border-[#e9e2d8] text-[#2c2c2c] hover:text-[#c9a87c] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c9a87c]"
                    onClick={() =>
                      setActiveImageIndex((prevIndex) =>
                        prevIndex === 0
                          ? product.images.edges.length - 1
                          : prevIndex - 1
                      )
                    }
                  >
                    ‹
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/85 hover:bg-white rounded-full shadow-md border border-[#e9e2d8] text-[#2c2c2c] hover:text-[#c9a87c] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#c9a87c]"
                    onClick={() =>
                      setActiveImageIndex((prevIndex) =>
                        prevIndex === product.images.edges.length - 1
                          ? 0
                          : prevIndex + 1
                      )
                    }
                  >
                    ›
                  </button>
                </>
              )}

              <Badge
                className={`absolute top-4 left-4 ${
                  intentionColors[transformed.metafields.primary_intentions]
                }`}
              >
                {transformed.metafields.primary_intentions}
              </Badge>
            </div>

            <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
              <Image
                src="/crystal-selection.png"
                alt="Eco-friendly wrapping"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  Thoughtfully wrapped with eco-friendly materials
                </p>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-end h-full">
            <h1 className="text-3xl font-serif font-light text-[#2c2c2c] mb-2">
              {transformed.title}
            </h1>
            {/* Price */}
            <div className="mb-6">
              <span className="text-2xl font-medium text-[#2c2c2c]">
                £{transformed.price}
              </span>
              {/* {product.compareAtPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">
                  £{product.compareAtPrice}
                </span>
              )} */}
            </div>
            {/* Crystals included */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#5c5c5c] mb-2">
                Crystals Included:
              </h3>
              <div className="flex flex-wrap gap-2">
                {transformed.metafields.crystals_included.map(
                  (crystal: any) => (
                    <TooltipProvider key={crystal} delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="inline-flex items-center text-sm bg-white border border-gray-200 rounded-full px-3 py-1.5">
                            <img
                              src={`/images/${crystal
                                .toLowerCase()
                                .replace(/\s+/g, "-")}-bead.png`}
                              alt={crystal}
                              className="w-6 h-6 object-contain mr-2"
                            />
                            {crystal}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{crystalDescriptions[crystal]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )
                )}
              </div>
            </div>
            {/* Intentions */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#5c5c5c] mb-2">
                Intentions:
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  className={
                    intentionColors[transformed.metafields.primary_intentions]
                  }
                >
                  {transformed.metafields.primary_intentions} (Primary)
                </Badge>
                {transformed.metafields.secondary_intentions.map(
                  (intention: any) => (
                    <Badge
                      key={intention}
                      className={intentionColors[intention]}
                    >
                      {intention}
                    </Badge>
                  )
                )}
              </div>
            </div>
            {/* Description */}
            <div className="mb-6">
              <p className="text-[#5c5c5c] mt-2">
                This bracelet combines the{" "}
                {transformed.metafields.crystals_included.length === 3
                  ? `${transformed.metafields.crystals_included[0]}, ${transformed.metafields.crystals_included[1]}, and ${transformed.metafields.crystals_included[2]}`
                  : transformed.metafields.crystals_included.join(", ")}{" "}
                to create a powerful tool for{" "}
                {transformed.metafields.primary_intentions.toLowerCase()} and{" "}
                {transformed.metafields.secondary_intentions[0]?.toLowerCase()}.
              </p>
              <p className="text-[#5c5c5c] mt-2">
                Handcrafted with intention by our skilled artisans, each
                bracelet is made to order and infused with positive energy. The
                natural variations in the crystals ensure that your bracelet is
                one-of-a-kind, just like you.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#5c5c5c] mb-2">Size:</h3>
              {product.options.map(({ name, values }: any) => (
                <ProductOptions
                  key={`key-${name}`}
                  name={name}
                  values={values}
                  selectedOptions={selectedOptions}
                  setOptions={setOptions}
                />
              ))}
            </div>
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#5c5c5c] mb-2">
                Quantity:
              </h3>
              <div className="flex items-center">
                <button
                  className="w-10 h-10 border border-gray-200 rounded-l-md flex items-center justify-center bg-white"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="w-12 h-10 border-t border-b border-gray-200 flex items-center justify-center bg-white">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 border border-gray-200 rounded-r-md flex items-center justify-center bg-white"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => {
                  addToCart(selectedVariant, quantity, "", "");
                }}
                className="flex-1 bg-[#c9a87c] hover:bg-[#b89b72] text-white py-6"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
            </div>
            {/* Product Details */}
            <div className="mb-8">
              <div className="text-[#2c2c2c] font-semibold text-lg p-4 border-t-2 border-[#c9a87c]">
                Energy Profile for Included Crystals
              </div>
              <div className="p-6 bg-[#fafafa] rounded-b-lg shadow-md">
                <div className="space-y-6">
                  {transformed.metafields.crystals_included &&
                  transformed.metafields.crystals_included.length > 0 ? (
                    transformed.metafields.crystals_included.map(
                      (crystal: any) => (
                        <div
                          key={crystal}
                          className="bg-[#f8f5f0] p-4 rounded-lg shadow-sm"
                        >
                          <div className="flex items-center mb-2">
                            <img
                              src={`/images/${crystal
                                .toLowerCase()
                                .replace(/\s+/g, "-")}-bead.png`}
                              alt={crystal}
                              className="w-6 h-6 object-contain mr-2"
                            />
                            <h3 className="text-lg font-medium text-[#2c2c2c]">
                              {crystal}
                            </h3>
                          </div>
                          <p className="text-[#5c5c5c] mb-2">
                            {crystalDescriptions[crystal] ||
                              "No description available."}
                          </p>
                        </div>
                      )
                    )
                  ) : (
                    <p className="text-[#5c5c5c]">No crystals available.</p>
                  )}
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-serif font-light text-[#2c2c2c] mb-4">
                    How These Crystals Work Together
                  </h3>
                  <p className="text-[#5c5c5c]">
                    When these crystals are combined, they create a synergistic
                    effect that enhances their individual properties. Together,
                    they create a powerful tool for{" "}
                    {transformed.metafields.primary_intentions.toLowerCase()}{" "}
                    and inner balance.
                  </p>
                </div>
              </div>
            </div>
            {/* Shipping & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
                <Truck className="h-6 w-6 text-[#c9a87c] mb-2" />
                <h4 className="text-sm font-medium">Free Shipping</h4>
                <p className="text-xs text-[#5c5c5c]">On orders over $50</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
                <Gift className="h-6 w-6 text-[#c9a87c] mb-2" />
                <h4 className="text-sm font-medium"> Eco-Friendly Wrapping</h4>
                <p className="text-xs text-[#5c5c5c]">
                  Give with care for both your loved ones and the planet.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
                <RotateCcw className="h-6 w-6 text-[#c9a87c] mb-2" />
                <h4 className="text-sm font-medium">14-Day Returns</h4>
                <p className="text-xs text-[#5c5c5c]">Hassle-free process</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-light text-[#2c2c2c] mb-6">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-[#2c2c2c] hover:text-[#c9a87c]">
                  How do I know which size to choose?
                </AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c]">
                  We recommend measuring your wrist circumference and adding
                  0.5" for a comfortable fit. Our Small size (6.5") fits wrists
                  5.5-6", Medium (7") fits wrists 6-6.5", Large (7.5") fits
                  wrists 6.5-7", and X-Large (8") fits wrists 7-7.5".
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-[#2c2c2c] hover:text-[#c9a87c]">
                  How should I care for my crystal bracelet?
                </AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c]">
                  Store your bracelet in a cool, dry place away from direct
                  sunlight. Clean gently with a soft cloth. Avoid contact with
                  water, chemicals, and perfumes. To recharge your crystals,
                  place your bracelet under moonlight once a month.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-[#2c2c2c] hover:text-[#c9a87c]">
                  Can I customize this bracelet?
                </AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c]">
                  We don't offer customization for pre-designed bracelets, as
                  each is crafted for specific purposes. However, you can always
                  design a bracelet that aligns with your energy by using our
                  "Build Your Own" tool.
                  <a
                    href="/build-your-own-crystal-jewelry"
                    className="text-[#c9a87c] hover:underline"
                  >
                    {" "}
                    Click here to design your own.
                  </a>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger className="text-[#2c2c2c] hover:text-[#c9a87c]">
                  How long will it take to receive my bracelet?
                </AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c]">
                  Each bracelet is handcrafted to order and takes 3-5 business
                  days to create. After that, standard shipping takes an
                  additional 3-5 business days within the US. International
                  shipping times vary by location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-5">
                <AccordionTrigger className="text-[#2c2c2c] hover:text-[#c9a87c]">
                  Are the crystals real?
                </AccordionTrigger>
                <AccordionContent className="text-[#5c5c5c]">
                  Yes, we use 100% genuine, ethically sourced crystals in all
                  our jewelry.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-light text-[#2c2c2c] mb-8 text-center">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedProducts.map((relatedProduct: any) => (
              <Link
                href={`/product/${relatedProduct.handle}`}
                key={relatedProduct.handle}
              >
                <Card className="overflow-hidden hover:shadow-md transition-all h-full">
                  <div className="relative h-64">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      className={`absolute top-4 left-4 ${
                        intentionColors[
                          relatedProduct.metafields.primary_intentions
                        ]
                      }`}
                    >
                      {relatedProduct.metafields.primary_intentions}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1">
                      {relatedProduct.title}
                    </h3>
                    <div className="font-medium text-[#c9a87c]">
                      £{relatedProduct.price}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}
