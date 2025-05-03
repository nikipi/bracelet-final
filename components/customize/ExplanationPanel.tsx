import Image from 'next/image';
import { FC } from 'react';
import { BeadType } from '../beadsInfo';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { beadTypes } from "../beadsInfo";

// Layout explanation type
// Layout explanation type
// Shared types for the bracelet customizer
export type LayoutExplanation = {
  overall: string;
  userProfile: any;
};

interface IProps {
  layoutExplanation: LayoutExplanation | null;
  router: any;
  userProfile: any;
}

const ExplanationPanel: FC<IProps> = ({ layoutExplanation, router }) => {
  if (!layoutExplanation) {
    return null;
  }
  
  return (
    <Card className="w-full bg-white rounded-xl shadow-sm border border-[#e5e0d5]">
      <CardContent className="p-8">
        <h2 className="font-serif text-2xl font-light text-[#2c2c2c] mb-6">Your Perfect Bracelet</h2>

        <div className="space-y-4">
          {layoutExplanation.overall.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-[#5c5c5c] leading-relaxed">{paragraph}</p>
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

          <Button className="w-full py-6 bg-[#c9a87c] hover:bg-[#b89b72] text-white">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Bring this Energy with you - £25
          </Button>
        </div>
      </CardContent>
    </Card>
   
  );
};

export default ExplanationPanel;