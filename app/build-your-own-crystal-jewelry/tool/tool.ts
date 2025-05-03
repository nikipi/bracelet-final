import { BeadType, beadTypes } from "@/components/beadsInfo";
import { LayoutExplanation } from "@/components/customize/ExplanationPanel";
import { layoutPatterns } from "@/components/customize/LayoutPattern";
import { braceletSizes, BraceletSizesType } from "@/components/customize/SizeSelector";
import { ICustomizeize } from "@/context/customize.context";

export const getBeadPosition = (index: number, beadCount: number, radius: number) => {
  // const radius = braceletSizes[selectedBraceletSize]; // Dynamic radius based on selected size
  const angle = (index / beadCount) * 2 * Math.PI
  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)
  return { x, y }
}

export const calculateBeadCount = (braceletSizeStr: string, beadSizeStr: string): number => {
  // Extract numeric values
  const braceletSizeCm = Number.parseInt(braceletSizeStr)
  const beadSizeMm = Number.parseInt(beadSizeStr)

  // Convert bracelet size to mm
  const braceletSizeMm = braceletSizeCm * 10

  // Calculate circumference, accounting for minimal spacing between beads
  // Reduced spacing from 0.5mm to 0.2mm per bead for a tighter fit
  const spacing = -1
  const totalBeads = Math.floor(braceletSizeMm / (beadSizeMm + spacing))

  // Ensure a minimum of 8 beads and maximum of 36 beads
  return Math.max(8, Math.min(36, totalBeads))
}

type ParamsType={
  beadCount: number
  userProfile: ICustomizeize
  patternIndex?: number
  callback?:(patternIndex:number)=>void
}

export const  generatePersonalizedLayout=({
  beadCount,
  userProfile,
  patternIndex = -1, // -1 means select a pattern automatically
  callback
}: ParamsType) =>{
  // Simulate API call delay
  // await new Promise((resolve) => setTimeout(resolve, 1500))

  // Get preferred beads from user profile
  const preferredBeads = userProfile.preferredCrystals

  const purposes = userProfile.purposes!

  // Select a pattern based on user profile or use the specified pattern
  let selectedPatternIndex = patternIndex

  if (selectedPatternIndex === -1) {
    // Auto-select a pattern based on user profile
    if (purposes.includes("Balance & Harmony")) {
      // Mirrored Symmetry or Alternating Pattern for balance
      selectedPatternIndex = Math.random() < 0.5 ? 0 : 5
    } else if (purposes.includes("Focus & Clarity")) {
      // Focal Centerpiece for focus
      selectedPatternIndex = 1
    } else if (purposes.includes("Spiritual Growth")) {
      // Gradient/Flow for spiritual growth
      selectedPatternIndex = 2
    } else if (purposes.length === 1) {
      // Cluster Center for a single strong intention
      selectedPatternIndex = 3
    } else if (purposes.includes("Peace & Calm")) {
      // Accent Pop for subtle energy
      selectedPatternIndex = 4
    } else if (purposes.length > 2) {
      // Intent Stacking for multiple intentions
      selectedPatternIndex = 6
    } else {
      // Random pattern if no specific match
      selectedPatternIndex = Math.floor(Math.random() * layoutPatterns.length)
    }
  }

  // Ensure the pattern index is valid
  selectedPatternIndex = Math.max(0, Math.min(layoutPatterns.length - 1, selectedPatternIndex))
  callback?.(selectedPatternIndex)
  // Get the selected pattern
  const selectedPattern = layoutPatterns[selectedPatternIndex]

  // Generate the layout using the selected pattern
  const layout = selectedPattern.generatePattern(beadCount, preferredBeads!);

  return {layout,selectedPatternIndex}
}
  // Aggregate bead counts by type
export const generateLayoutExplanation = (
    bracelet: BeadType[],
    userProfile: ICustomizeize,
    patternName: string
  ): LayoutExplanation => {
    const beadCount = bracelet.length;
  
    const beadCountByType: Record<string, number> = {};
    bracelet.forEach((bead) => {
      const type = typeof bead === "string" ? bead : bead.type;
      if (!type) return;
      beadCountByType[type] = (beadCountByType[type] || 0) + 1;
    });
  
    const purposes = userProfile.purposes ?? [];
  
    const explanation: LayoutExplanation = {
      overall: `🍀 Congratulations on your one-of-a-kind bracelet!
  
  This piece was thoughtfully designed just for ${
        userProfile.isGift === "yes" ? "your gift recipient" : "you"
      }${
        userProfile.zodiacSign
          ? `, inspired by the unique qualities of the ${userProfile.zodiacSign} zodiac sign`
          : ""
      }.
  
  

      
  🍀 Your bracelet features ${beadCount} carefully selected beads, arranged in a ${patternName} pattern — a layout especially well-suited for ${purposes.join(", ") || "intention and harmony"}.
  

  🍀 It includes${formatBeadList(beadCountByType)}.
  

  🍀 Each bead was chosen with intention to support ${purposes.length > 0 ? purposes.join(", ") : "your overall well-being"}.
  
  We hope this bracelet brings positivity and connection every time it’s worn.`,
      userProfile,
    };
  
    return explanation;
  
    function formatBeadList(beadCounts: Record<string, number>): string {
      const entries = Object.entries(beadCounts).map(([beadType, count]) => {
        const name = beadTypes[beadType as BeadType]?.name || beadType;
        const label = count === 1 ? "one" : count;
        return `${label} ${name}`;
      });
  
      if (entries.length === 1) return ` ${entries[0]}`;
      const last = entries.pop();
      return ` ${entries.join(", ")}, and ${last}`;
    }
  };
  