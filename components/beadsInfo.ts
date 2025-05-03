// beadTypes.ts
// This file contains all bead type definitions and their properties

export const beadTypes = {
    RoseQuartz: {
      name: "Rose Quartz",
      image: "/images/rose-quartz-bead.png",
      description: "A gentle pink stone known for promoting love and healing.",
      energy: "love",
      element: "water",
      benefits: ["Self-love", "Emotional healing", "Compassion", "Heart chakra"],
      affinity: ["emotional", "relationships", "healing"],
    },
    Amethyst: {
      name: "Amethyst",
      image: "/images/amethyst-bead.png",
      description: "A purple variety of quartz known for its calming properties.",
      energy: "calm",
      element: "air",
      benefits: ["Stress relief", "Intuition", "Clarity", "Third eye chakra"],
      affinity: ["spiritual", "mental", "peace"],
    },
    BlackTourmaline: {
      name: "Black Tourmaline",
      image: "/images/black-tourmaline-bead.png",
      description: "A powerful protection stone that grounds negative energy.",
      energy: "protection",
      element: "earth",
      benefits: ["Protection", "Grounding", "EMF shielding", "Root chakra"],
      affinity: ["protection", "grounding", "negativity"],
    },
    Citrine: {
      name: "Citrine",
      image: "/images/citrine-bead.png",
      description: "A yellow crystal that promotes abundance and positivity.",
      energy: "abundance",
      element: "fire",
      benefits: ["Abundance", "Confidence", "Creativity", "Solar plexus chakra"],
      affinity: ["abundance", "creativity", "confidence"],
    },
    LapisLazuli: {
      name: "Lapis Lazuli",
      image: "/images/lapis-lazuli-bead.png",
      description: "A deep blue stone that enhances wisdom and truth.",
      energy: "wisdom",
      element: "water",
      benefits: ["Wisdom", "Truth", "Communication", "Throat chakra"],
      affinity: ["wisdom", "communication", "insight"],
    },
    ClearQuartz: {
      name: "Clear Quartz",
      image: "/images/clear-quartz-bead.png",
      description: "Known as the master healer, amplifies energy and thought.",
      energy: "amplification",
      element: "spirit",
      benefits: ["Amplification", "Clarity", "Energy", "Crown chakra"],
      affinity: ["amplification", "clarity", "energy"],
    },
    TigersEye: {
      name: "Tiger's Eye",
      image: "/images/tigers-eye-bead.png",
      description: "A golden-brown stone that promotes courage and confidence.",
      energy: "courage",
      element: "fire",
      benefits: ["Courage", "Confidence", "Willpower", "Solar plexus chakra"],
      affinity: ["courage", "strength", "focus"],
    },
    Moonstone: {
      name: "Moonstone",
      image: "/images/moonstone-bead.png",
      description: "A pearly stone connected to intuition and the moon cycles.",
      energy: "intuition",
      element: "water",
      benefits: ["Intuition", "New beginnings", "Feminine energy"],
      affinity: ["intuition", "cycles", "feminine"],
    },
    Jade: {
      name: "Jade",
      image: "/images/jade-bead.png",
      description: "A green stone symbolizing harmony and balance.",
      energy: "balance",
      element: "earth",
      benefits: ["Prosperity", "Harmony", "Balance", "Heart chakra"],
      affinity: ["abundance", "balance", "growth"],
    },

    Amazonite: {
      name: "Amazonite",
      image: "/images/amazonite-bead.png",
      description: "A blue-green stone known for its soothing and calming properties, often associated with enhancing communication.",
      energy: "calming",
      element: "water",
      benefits: ["Communication", "Emotional healing", "Creativity", "Self-expression"],
      affinity: ["emotional healing", "communication", "creativity"]
    },
    
    GreenAventurine: {
      name: "Green Aventurine",
      image: "/images/green-aventurine-bead.png",
      description: "A shimmering green stone associated with luck, prosperity, and opportunity.",
      energy: "luck",
      element: "earth",
      benefits: ["Abundance", "Wealth", "Leadership", "Emotional tranquility"],
      affinity: ["luck", "prosperity", "growth"]
    }
}

export type IBeadType =typeof beadTypes

export type BeadType = keyof IBeadType

export const ZodiacCrystalMap: Record<string, BeadType[]> = {
  "aries": ["ClearQuartz", "Citrine"],  // Aries are confident, energetic, and leaders. Citrine boosts confidence and creativity.
  "taurus": ["GreenAventurine", "RoseQuartz"],  // Taurus values prosperity and love. Green Aventurine for abundance, Rose Quartz for emotional healing.
  "gemini": ["Amazonite", "LapisLazuli"],  // Geminis are communicative and creative. Amazonite supports communication, Lapis Lazuli enhances wisdom.
  "cancer": ["Moonstone", "RoseQuartz"],  // Cancers are intuitive and nurturing. Moonstone for intuition and new beginnings, Rose Quartz for emotional healing.
  "leo": ["TigersEye", "Citrine"],  // Leos are strong, confident, and enthusiastic. Tiger's Eye for courage, Citrine for creativity and positivity.
  "virgo": ["Amethyst", "ClearQuartz"],  // Virgos are analytical and calm. Amethyst for stress relief, Clear Quartz for clarity and amplification.
  "libra": ["Jade", "Amazonite"],  // Libras value balance and harmony. Jade for balance and prosperity, Amazonite for emotional healing and communication.
  "scorpio": ["BlackTourmaline", "Amethyst"],  // Scorpios are passionate and intense. Black Tourmaline for protection, Amethyst for calm and intuition.
  "sagittarius": ["TigersEye", "Citrine"],  // Sagittarians are adventurous and optimistic. Tiger's Eye for courage and focus, Citrine for abundance and confidence.
  "capricorn": ["Moonstone", "ClearQuartz"],  // Capricorns are disciplined and focused. Moonstone for new beginnings, Clear Quartz for clarity and energy.
  "aquarius": ["LapisLazuli", "ClearQuartz"],  // Aquarians are innovative and intellectual. Lapis Lazuli for wisdom and insight, Clear Quartz for amplification.
  "pisces": ["Moonstone", "RoseQuartz"],  // Pisc
}
  // "Attracting love and deep connection": ["roseQuartz"],
  // "Emotional healing and inner peace": ["roseQuartz", "amethyst"],
  // "Confidence and personal power": ["Tigereye"],
  // "Clarity and mental focus": ["clearQuartz", "sodalite"],
  // "Intuition and spiritual growth": ["amethyst", "moonstone"],
  // "Abundance and prosperity": ["citrin", "Jade"],
  // "Grounding and stability": ["blackTourmaline"],
  // "Manifestation and goal-setting": ["clearQuartz", "citrin"],
  // "Letting go and moving forward": ["blackTourmaline", "roseQuartz"],
  // "Creativity and self-expression": ["blueLaceAgate", "carnelian", "aquamarine"],
  // "Energy cleansing and renewal": ["roseQuartz", "amethyst"],
