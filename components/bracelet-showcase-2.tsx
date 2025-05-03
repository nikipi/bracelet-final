"use client";

import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/shopContext";
import ProductOptions from "./variant-options";
// Define the slides data
// const slides = [
//   {
//     id: 1,
//     image: "/images/crystal-bracelet.png",
//     title: "Harmony & Balance Bracelet",
//     description:
//       "Our handcrafted crystal bracelets combine the healing properties of carefully selected gemstones to create powerful energy tools that support your intentions and enhance your well-being.",
//   },
//   {
//     id: 2,
//     image: "/images/crystal-bracelet-blue.png",
//     title: "Winter Serenity Bracelet",
//     description:
//       "Experience the calming energy of our Winter Serenity Bracelet, designed to bring clarity, peace, and protection during life's challenges.",
//   },
// ];

export default function BraceletShowcase2(product: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const { addToCart }: any = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  // Handle visibility animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle automatic slide changing
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        setCurrentSlide(
          (prev) => (prev + 1) % product.product.variants.edges.length
        );
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, isPaused]);

  const nextSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlide(
      (prev) => (prev + 1) % product.product.variants.edges.length
    );
  };

  const prevSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlide((prev) =>
      prev === 0 ? product.product.variants.edges.length - 1 : prev - 1
    );
  };

  const slide = product.product.variants.edges[currentSlide];

  const allVariantOptions = product.product.variants.edges?.map(
    (variant: any) => {
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
    }
  );

  const defaultValues: any = {};
  product.product.options.map((item: any) => {
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

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-[#2c2c2c]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-[#2c2c2c]" />
          </button>

          {/* Slides */}
          {product.product.variants.edges.map((s: any, index: any) => (
            <div
              key={s.node.id}
              className={cn(
                "absolute inset-0 transition-all duration-1000 transform overflow-hidden",
                index === currentSlide
                  ? "opacity-100 translate-x-0 relative"
                  : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              )}
            >
              <div className="aspect-square relative">
                <Image
                  src={s.node.image.src || "/placeholder.svg"}
                  alt={s.node.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {product.product.variants.edges.map((_: any, index: any) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === currentSlide ? "bg-white w-6" : "bg-white/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 delay-300 transform",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-3">
            {slide.title}
          </h2>
          <p className="text-[#5c5c5c] mb-8 leading-relaxed">
            {slide.description}
          </p>

          {/* <div className="space-y-6 mb-8">
            {slide.crystals.map((crystal) => (
              <div key={crystal.name} className="border-b border-[#e5e0d5] pb-4">
                <h3 className="font-medium text-[#2c2c2c] mb-1">{crystal.name}</h3>
                <p className="text-sm text-[#5c5c5c]">{crystal.description}</p>
              </div>
            ))}
          </div> */}
          {product.product.options.map(({ name, values }: any) => (
            <ProductOptions
              key={`key-${name}`}
              name={name}
              values={values}
              selectedOptions={selectedOptions}
              setOptions={setOptions}
            />
          ))}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#c9a87c] hover:bg-[#b89b72] text-white px-8 py-6"
              onClick={() => {
                addToCart(selectedVariant, quantity);
              }}
            >
              Add to Cart
            </Button>
            <Button
              variant="outline"
              className="border-[#c9a87c] text-[#c9a87c] hover:bg-[#f8f5f0] px-8 py-6"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
