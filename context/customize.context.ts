import { createContext } from "react";
import { BeadType } from "@/components/beadsInfo";

type GiftType='yes'|'no'

export interface ICustomizeize {
  isGift?: GiftType;
  zodiacSign?: string;
  purposes?: any[];
  preferredCrystals?: BeadType[] ;
  setIsGift: (isGift: GiftType) => void;
  setZodiacSign: (zodiacSign: string) => void;
  setPurposes: (purposes: any[]) => void;
  setPreferredCrystals: (preferredCrystals: BeadType[]) => void;
}



export const CustomizeizeContext = createContext<ICustomizeize>(
  {
    preferredCrystals: undefined,
    setPreferredCrystals: (preferredCrystals: BeadType[]) => {},
    setIsGift(isGift) {

    },
    setPurposes(purposes) {

    },
    setZodiacSign(zodiacSign) {

    },
  }
)
