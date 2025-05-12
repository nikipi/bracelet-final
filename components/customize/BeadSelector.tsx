import Image from 'next/image';
import { FC } from 'react';
import { BeadType } from '@/components/beadsInfo';
import { beadTypes } from '@/components/beadsInfo';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BeadSizesType } from '@/components/customize/SizeSelector';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BeadSelectorProps {
  selectedBeadIndex: number | null;
  bracelet: BeadType[];
  changeBeadType: (beadType: BeadType) => void;
  individualBeadSizes: BeadSizesType[];
  selectedBeadSize: string;
  beadSizes: Record<string, number>;
  setIndividualBeadSizes: (callback: (prev: BeadSizesType[]) => BeadSizesType[]) => void;
  setSelectedBeadIndex: (index: number | null) => void;
  handleBeadClick: (index: number) => void;
}

const BeadSelector: FC<BeadSelectorProps> = ({
  selectedBeadIndex,
  bracelet,
  changeBeadType,
  individualBeadSizes,
  selectedBeadSize,
  beadSizes,
  setIndividualBeadSizes,
  setSelectedBeadIndex,
  handleBeadClick
}) => {
  return (
    <Card className="w-full h-[400px] bg-white rounded-xl shadow-sm border border-[#e5e0d5]">
      <CardContent className="p-5">
        {selectedBeadIndex !== null && bracelet[selectedBeadIndex] ? (
          <>
            <h2 className="font-serif text-lg font-light text-[#2c2c2c] mb-3">
              Customize Bead {selectedBeadIndex + 1}
            </h2>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full shadow-md overflow-hidden flex-shrink-0">
                <Image
                  src={
                    beadTypes[bracelet[selectedBeadIndex]]?.image ||
                    "/placeholder.svg"
                  }
                  alt={beadTypes[bracelet[selectedBeadIndex]]?.name || "Crystal bead"}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-sm text-[#2c2c2c]">{beadTypes[bracelet[selectedBeadIndex]]?.name}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="bead-type" className="text-[#2c2c2c] text-xs">
                  Change Bead Material
                </Label>
                <Select
                  value={bracelet[selectedBeadIndex]}
                  onValueChange={(value) => changeBeadType(value as BeadType)}
                >
                  <SelectTrigger
                    id="bead-type"
                    className="border-[#e5e0d5] bg-[#f8f5f0] text-[#5c5c5c] focus:ring-[#c9a87c] h-8 text-xs"
                  >
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(beadTypes).map(([value, { name }]) => (
                      <SelectItem key={value} value={value} className="text-xs">
                        {name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="individual-bead-size" className="text-[#2c2c2c] text-xs">
                  Change Bead Size
                </Label>
                <Select
                  value={selectedBeadIndex !== null ? individualBeadSizes[selectedBeadIndex] || selectedBeadSize : selectedBeadSize}
                  onValueChange={(value) => {
                    if (selectedBeadIndex !== null) {
                      setIndividualBeadSizes(prev => {
                        const newSizes = [...prev]
                        newSizes[selectedBeadIndex] = value
                        return newSizes
                      })
                    }
                  }}
                >
                  <SelectTrigger 
                    id="individual-bead-size"
                    className="border-[#e5e0d5] bg-[#f8f5f0] text-[#5c5c5c] focus:ring-[#c9a87c] h-8 text-xs"
                  >
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(beadSizes).map((size) => (
                      <SelectItem key={size} value={size} className="text-xs">
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-1">
                <h3 className="text-[#2c2c2c] font-medium text-xs mb-1">Benefits:</h3>
                <div className="flex flex-wrap gap-1">
                  {beadTypes[bracelet[selectedBeadIndex]]?.benefits.slice(0, 3).map((benefit) => (
                    <span
                      key={benefit}
                      className="px-2 py-1 bg-[#f0ebe2] text-[#c9a87c] rounded-full text-xs"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end pt-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedBeadIndex(null)}
                  className="text-[#5c5c5c] border-[#e5e0d5] hover:bg-[#f0ebe2] hover:text-[#c9a87c] h-7 text-xs px-3"
                >
                  Done
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[350px] text-center">
            <h2 className="font-serif text-lg font-light text-[#2c2c2c] mb-2">Click on any bead to customize it</h2>
            <div className="w-12 h-12 rounded-full bg-[#f8f5f0] flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c9a87c]">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <p className="text-xs text-[#8c8c8c]">Customizations will appear here</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BeadSelector;