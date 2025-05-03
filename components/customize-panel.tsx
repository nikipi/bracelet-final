"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CustomizeizeContext } from "@/context/customize.context"
import Image from "next/image"
import Link from "next/link"
import { useContext, useEffect, useMemo, useState } from "react"
import { beadTypes, BeadType } from "@/components/beadsInfo";
import { useRouter } from "next/navigation";
import { USERPORFILE_KEY } from "@/constant"


const CustomizePanel = () => {
  const router = useRouter();

  const {isGift, setIsGift, setPreferredCrystals, setZodiacSign, zodiacSign, setPurposes, preferredCrystals, purposes} = useContext(CustomizeizeContext);
  const [showValidationError, setShowValidationError] = useState(false);
  const [isRandomSelection, setIsRandomSelection] = useState(false);

  // Clear sessionStorage when user leaves the page
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.sessionStorage.removeItem(USERPORFILE_KEY);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  const isCrystalSelected = (id: string) => {
    return preferredCrystals?.includes(id)
  }

  // Check if the current selection was made using the "No preference" option


  // Function to get random items from an array
  const getRandomItems = (arr: string[], count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const toggleCrystal = (id: BeadType | "no-preference") => {
    let newCrystals = preferredCrystals.slice();

    if (id === "no-preference") {
      // When "no-preference" is selected, replace all selections with two random bead types
      const availableBeadTypes = Object.keys(beadTypes);
      const randomBeads = getRandomItems(availableBeadTypes, 2) as BeadType[];

      // Set only the random selections (no "no-preference" flag)
      newCrystals = randomBeads;

      // Store that this was a random selection in local state
      setIsRandomSelection(true);
    } else {
      // Clear the random selection flag when manually selecting crystals
      setIsRandomSelection(false);

      if (preferredCrystals.includes(id)) {
        newCrystals = newCrystals.filter((c) => c !== id);
      } else {
        newCrystals = [...newCrystals, id];
      }
    }

    setPreferredCrystals(newCrystals);
  };

  const togglePurpose = (purpose: string) => {
    let newPurposes = purposes!.slice()
    if (newPurposes.includes(purpose)) {
      newPurposes = newPurposes.filter(p => p !== purpose)
    } else {
      newPurposes = [...newPurposes, purpose]
    }
    setPurposes!(newPurposes)
  }

  // Effect to check if we need to track whether the current selection is random
 useEffect(() => {
    if (preferredCrystals&&preferredCrystals.length === 0 && isRandomSelection) {
      const availableBeadTypes = Object.keys(beadTypes);
      const randomBeads = getRandomItems(availableBeadTypes, 2) as BeadType[];
      setPreferredCrystals(randomBeads);
    }
  }, [preferredCrystals, isRandomSelection, setPreferredCrystals]);

  // const validateSelections = () => {
  //   return (
  //     isGift &&
  //     zodiacSign&&
  //     purposes&&purposes?.length >= 1 && // Updated to match the message requirement
  //     ((preferredCrystals&&preferredCrystals?.length >= 1) || isRandomSelection)
  //   );
  // };
const validateSelections=useMemo(()=>{
      return (
      isGift &&
      zodiacSign&&
      purposes&&purposes?.length >= 1 && // Updated to match the message requirement
      ((preferredCrystals&&preferredCrystals?.length >= 1) || isRandomSelection)
    );
},[isGift,zodiacSign,purposes,preferredCrystals,isRandomSelection])




  const handleButtonClick = () => {



    if (validateSelections) {
        try {
          window.sessionStorage.setItem(USERPORFILE_KEY,JSON.stringify({
            isGift,
            zodiacSign,
            purposes,
            preferredCrystals
          }))
        } catch (error) {
          console.error("存储userProfile失败:", error);
        }
        router.push(`/build-your-own-crystal-jewelry/customize-display?zodiac=${zodiacSign}`)
    } else {
      setShowValidationError(true);
    }
  };

  return (
    <section className="py-8 md:py-24 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-[#e5e0d5] overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="font-serif text-3xl font-light text-[#2c2c2c] mb-8">
              Create your Perfect Crystal Bracelet
            </h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-medium mb-3 text-[#2c2c2c]">Is this a gift?</h3>
                <RadioGroup value={isGift} onValueChange={setIsGift} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="gift-yes" />
                    <Label htmlFor="gift-yes" className="text-[#5c5c5c]">
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="gift-no" />
                    <Label htmlFor="gift-no" className="text-[#5c5c5c]">
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-[#2c2c2c]">Zodiac Sign</h3>
                <Select value={zodiacSign} onValueChange={setZodiacSign}>
                  <SelectTrigger className="w-full border-[#e5e0d5] bg-[#f8f5f0] text-[#5c5c5c]">
                    <SelectValue placeholder="Select your zodiac sign" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aries">♈ Aries</SelectItem>
                    <SelectItem value="taurus">♉ Taurus</SelectItem>
                    <SelectItem value="gemini">♊ Gemini</SelectItem>
                    <SelectItem value="cancer">♋ Cancer</SelectItem>
                    <SelectItem value="leo">♌ Leo</SelectItem>
                    <SelectItem value="virgo">♍ Virgo</SelectItem>
                    <SelectItem value="libra">♎ Libra</SelectItem>
                    <SelectItem value="scorpio">♏ Scorpio</SelectItem>
                    <SelectItem value="sagittarius">♐ Sagittarius</SelectItem>
                    <SelectItem value="capricorn">♑ Capricorn</SelectItem>
                    <SelectItem value="aquarius">♒ Aquarius</SelectItem>
                    <SelectItem value="pisces">♓ Pisces</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label className="text-lg font-medium mb-3 text-[#2c2c2c]">
                 What intention would you like this bracelet to carry for you? (Select three that resonate most deeply with you.)
                </Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {[
                    { symbol: "✨", text: "Protection from negative energy" },
                    { symbol: "💖", text: "Attracting love and deep connection" },
                    { symbol: "🌿", text: "Emotional healing and inner peace" },
                    { symbol: "🔥", text: "Confidence and personal power" },
                    { symbol: "🌈", text: "Clarity and mental focus" },
                    { symbol: "🌙", text: "Intuition and spiritual growth" },
                    { symbol: "💰", text: "Abundance and prosperity" },
                    { symbol: "🛡️", text: "Grounding and stability" },
                    { symbol: "💫", text: "Manifestation and goal-setting" },
                    { symbol: "🕊️", text: "Letting go and moving forward" },
                    { symbol: "🌊", text: "Creativity and self-expression" },
                    { symbol: "🌟", text: "Energy cleansing and renewal" },
                  ].map((purpose) => (
                    <div key={purpose.text} className="flex items-center space-x-2">
                      <Checkbox
                        id={`purpose-${purpose.text.toLowerCase().replace(/\s+/g, "-")}`}
                        checked={purposes?.includes(purpose.text)}
                        onCheckedChange={() => togglePurpose(purpose.text)}
                        className="border-[#d4c9b9] text-[#c9a87c]"
                      />
                      <Label
                        htmlFor={`purpose-${purpose.text.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-[#5c5c5c] flex items-center"
                      >
                        <span className="mr-1">{purpose.symbol}</span> {purpose.text}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 text-[#2c2c2c]">
                 Are there any crystals you feel drawn to?
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.keys(beadTypes).map((key) => {
                  const bead = beadTypes[key as BeadType];
                  // Highlight if specifically selected or included in random selection with no-preference
                  const isSelected = isCrystalSelected(key);
                  return (
                    <div
                      key={key}
                      className={`cursor-pointer rounded-lg border p-3 transition-all ${
                        isSelected ? "border-[#c9a87c] bg-[#fcf9f5] shadow-md" : "border-[#e5e0d5] hover:border-[#d4c9b9] hover:shadow-sm"
                      }`}
                      onClick={() => toggleCrystal(key as BeadType)}
                    >
                      <div className="flex items-center mb-1">
                        <div className="w-10 h-10 mr-2 relative">
                          <Image src={bead.image} alt={bead.name} fill className="object-contain" />
                        </div>
                        <span className="font-medium text-[#2c2c2c]">{bead.name}</span>
                      </div>
                      <p className="text-xs text-[#5c5c5c]">{bead.benefits.join(", ")}</p>
                    </div>
                  );
                })}

                  {/* No preference */}
                  <div
                    className={`cursor-pointer rounded-lg border p-3 transition-all border-[#e5e0d5] hover:border-[#d4c9b9] hover:shadow-sm`}
                    onClick={() => toggleCrystal("no-preference")}
                  >
                    <div className="flex items-center mb-1">
                      <div className="w-10 h-10 mr-2 relative flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-[#e5e5e5] flex items-center justify-center text-[#999] text-lg">
                          ?
                        </div>
                      </div>
                      <span className="font-medium text-[#2c2c2c]">No preference</span>
                    </div>
                    <p className="text-xs text-[#5c5c5c]">
                      {isRandomSelection
                        ? "We've selected randomly for you"
                        : "I'd like you to choose for me"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
            <Button
                  className="w-full py-6 text-lg bg-[#c9a87c] hover:bg-[#b89b72] text-white"
                  onClick={handleButtonClick}
                >
                  Create My Bracelet
                </Button>

              {showValidationError &&!validateSelections&& (
              <div className="bg-[#fee2e2] text-[#b91c1c] p-4 rounded-lg mt-6">
                <p>Make all selections before proceeding to ensure your bracelet can serve for your purposes</p>
              </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomizePanel
