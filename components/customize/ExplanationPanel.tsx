"use client";
import { CartContext } from "@/context/shopContext";
import Image from "next/image";
import { FC, useEffect, useState, useContext } from "react";
import { BeadType } from "../beadsInfo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { getCustomProduct } from "@/lib/queries/productsQuery";

export type LayoutExplanation = {
  overall: string;
  userProfile: any;
};

interface IProps {
  braceletDesign: any;
  layoutExplanation: LayoutExplanation | null;
  router: any;
  userProfile: any;
}

const ExplanationPanel: FC<IProps> = ({
  layoutExplanation,
  braceletDesign,
  router,
}) => {
  const [product, setProduct] = useState<any>(null);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedOptions, setSelectedOptions] = useState<any>({});

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getCustomProduct();
      setProduct(product);

      const allVariantOptions = product.variants.edges.map((variant: any) => {
        const options: any = {};
        variant.node.selectedOptions.forEach((opt: any) => {
          options[opt.name] = opt.value;
        });

        return {
          id: variant.node.id,
          title: product.title,
          handle: product.handle,
          image: variant.node.image?.src,
          options,
          variantTitle: variant.node.title,
          variantPrice: variant.node.price.amount,
          variantQuantity: 1,
        };
      });

      const defaultOptions: any = {};
      product.options.forEach((opt: any) => {
        defaultOptions[opt.name] = opt.values[0];
      });

      setSelectedOptions(defaultOptions);
      setSelectedVariant(allVariantOptions[0]);
    };

    fetchProduct();
  }, []);

  const setOptions = (name: string, value: string) => {
    const updated = { ...selectedOptions, [name]: value };
    setSelectedOptions(updated);

    const matchingVariant = product.variants.edges.find((variant: any) => {
      const variantOptions: any = {};
      variant.node.selectedOptions.forEach((opt: any) => {
        variantOptions[opt.name] = opt.value;
      });

      return JSON.stringify(variantOptions) === JSON.stringify(updated);
    });

    if (matchingVariant) {
      setSelectedVariant({
        ...matchingVariant.node,
        variantQuantity: 1,
      });
    }
  };

  const beadsSpecification = braceletDesign.join(", ");

  function extractBraceletNote(paragraph: any) {
    const zodiacMatch = paragraph?.match(
      /capricorn|aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|aquarius|pisces/i
    );
    const zodiac = zodiacMatch ? zodiacMatch[0] : "Custom";

    const totalBeadsMatch = paragraph?.match(
      /(\d+)\s+(carefully\s+selected\s+)?beads?/i
    );
    const totalBeads = totalBeadsMatch ? totalBeadsMatch[1] : "N/A";

    const purposeMatch = paragraph?.match(/for\s+(.*?)\./i);
    const purpose = purposeMatch ? purposeMatch[1] : "well-being";

    const beadCounts: any = {};
    const beadPattern: any =
      /(\d+)\s+(Clear Quartz|Moonstone|Citrine|Rose Quartz|Amethyst|Tiger(?:'s)? Eye|Amazonite|Lapis Lazuli|Green Aventurine|Jade|Black Tourmaline)/gi;

    let match;
    while ((match = beadPattern.exec(paragraph)) !== null) {
      beadCounts[match[2]] = parseInt(match[1], 10);
    }

    const layoutMatch = paragraph?.match(/layout.*?(suited|for)\s+(.*?)[\.\n]/i);
    const layoutPurpose = layoutMatch ? layoutMatch[2] : purpose;

    const beadsSummary = Object.entries(beadCounts)
      .map(([bead, count]) => `${count} ${bead}`)
      .join(", ");

    return `Zodiac: ${capitalize(
      zodiac
    )}. ${totalBeads} beads for ${layoutPurpose} — ${beadsSummary}. Custom pattern.`;
  }

  function capitalize(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const customOrderNote = extractBraceletNote(layoutExplanation?.overall);


  const { addToCart }: any = useContext(CartContext);

  if (!layoutExplanation) return null;

  return (
    <Card className="w-full bg-white rounded-xl shadow-sm border border-[#e5e0d5]">
      <CardContent className="p-8">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-6">
          Your Perfect Bracelet
        </h2>

        <div className="space-y-4">
          {layoutExplanation.overall.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-[#5c5c5c] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <Button
            variant="outline"
            onClick={() => router.push("/customize")}
            className="w-full border-[#e5e0d5] text-[#5c5c5c] hover:bg-[#f8f5f0]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Start Over
          </Button>

          <Button
            onClick={() => {
              addToCart(
                selectedVariant,
                1,
                customOrderNote,
                beadsSpecification
              );
            }}
            className="w-full py-6 bg-[#c9a87c] hover:bg-[#b89b72] text-white"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Bring this Energy with you - £25
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExplanationPanel;
