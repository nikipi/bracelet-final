import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// --- Define the types for keys only (for type safety) ---

export const braceletSizes = {
    "15cm": 130,
    "16cm": 140,
    "17cm": 150,
    "18cm": 160,
    "19cm": 170,
    "20cm": 180,
  }

  // Bead size options with corresponding pixel dimensions

export const beadSizes = {
    "4mm": 20,
    "6mm": 30,
    "8mm": 40,
    "10mm": 50,
    "12mm": 60,
  }

export  type BraceletSizesType=typeof braceletSizes;
export   type BeadSizesType=typeof beadSizes;

interface SizeSelectorProps {
  braceletSizes: BraceletSizesType;
  beadSizes: BeadSizesType;
  selectedBraceletSize: keyof BraceletSizesType;
  setSelectedBraceletSize: (size: keyof BraceletSizesType) => void;
  selectedBeadSize: keyof BeadSizesType;
  setSelectedBeadSize: (size: keyof BeadSizesType) => void;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  braceletSizes,
  beadSizes,
  selectedBraceletSize,
  setSelectedBraceletSize,
  selectedBeadSize,
  setSelectedBeadSize,
}) => {
  return (
    <div className="w-full max-w-md mx-auto mb-12">
      <div className="mb-4">
          <Label className="text-center block text-[#2c2c2c]">Bracelet Size</Label>
          <div className="grid grid-cols-3 gap-3">
            {Object.keys(braceletSizes).map((size) => (
              <Button
                key={size}
                variant={selectedBraceletSize === size ? "default" : "outline"}
                onClick={() => setSelectedBraceletSize(size as keyof BraceletSizesType)}
                className={`px-3 py-1 h-auto ${
                  selectedBraceletSize === size
                    ? "bg-[#c9a87c] hover:bg-[#b89b72] text-white"
                    : "border-[#e5e0d5] text-[#5c5c5c] hover:bg-[#f8f5f0]"
                }`}
                size="sm"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Bead Size Selector */}
        <div>
          <Label className="text-center block text-[#2c2c2c]">Bead Size</Label>
          <div className="grid grid-cols-3 gap-3">
            {Object.keys(beadSizes).map((size) => (
              <Button
                key={size}
                variant={selectedBeadSize === size ? "default" : "outline"}
                onClick={() => setSelectedBeadSize(size as keyof BeadSizesType)}
                className={`px-3 py-1 h-auto ${
                  selectedBeadSize === size
                    ? "bg-[#c9a87c] hover:bg-[#b89b72] text-white"
                    : "border-[#e5e0d5] text-[#5c5c5c] hover:bg-[#f8f5f0]"
                }`}
                size="sm"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      </div>

   
  );
};

export default SizeSelector
