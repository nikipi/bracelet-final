import { BeadType } from "@/components/beadsInfo"

export type LayoutPattern = {
  name: string
  icon: string
  description: string
  bestFor: string
  example: string
  generatePattern: (beadCount: number, preferredBeads: BeadType[]) => BeadType[]
}

export const layoutPatternOptions = [
    { value: "0", label: "🔁 Alternating Pattern" },
    { value: "1", label: "🧿 Focal Centerpiece" },
    { value: "2", label: "🌊 Gradient / Flow" },
    { value: "3", label: "🌀 Cluster Center" },
    { value: "4", label: "🌙 Accent Pop" },
    { value: "5", label: "🔄 Mirrored Symmetry" },
    { value: "6", label: "🧘‍♀️ Intent Stacking" },
    { value: "7", label: "🎲 Random Distribution" },
  ]



// Define layout patterns
export const layoutPatterns: LayoutPattern[] = [
  {
    name: "Alternating Pattern",
    icon: "🔁",
    description: "A-B-A-B-A-B: Use two bead types in an alternating sequence.",
    bestFor: "Balance, dual intentions (e.g., love & protection)",
    example: "Rose Quartz – Black Tourmaline – Rose Quartz – Black Tourmaline",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      // Need at least 2 bead types
      if (preferredBeads.length < 2) return Array(beadCount).fill(preferredBeads[0])

      const pattern: BeadType[] = []
      for (let i = 0; i < beadCount; i++) {
        pattern.push(preferredBeads[i % 2])
      }
      return pattern
    },
  },
  {
    name: "Focal Centerpiece",
    icon: "🧿",
    description: "A-A-A-B-A-A-A: One bead type (B) is featured in the center, surrounded by another bead type (A).",
    bestFor: "Highlighting a primary intention",
    example: "Amethyst – Amethyst – Rose Quartz – Moonstone – Rose Quartz – Amethyst – Amethyst",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      if (preferredBeads.length < 2) return Array(beadCount).fill(preferredBeads[0])
  
      const pattern: BeadType[] = []
      const accentIndex1 = Math.floor(beadCount / 2) - 1
      const accentIndex2 = Math.ceil(beadCount / 2) + 1
  
      for (let i = 0; i < beadCount; i++) {
        if (i === accentIndex1 || i === accentIndex2) {
          pattern.push(preferredBeads[1]) // Accent beads
        } else {
          pattern.push(preferredBeads[0]) // Main beads
        }
      }
      return pattern
    },
  },
  {
    name: "Gradient / Flow",
    icon: "🌊",
    description: "A-B-C-B-A: Creates a symmetrical flow from one type of crystal to another.",
    bestFor: "Spiritual growth, clarity, peace",
    example: "Citrine – Clear Quartz – Moonstone – Clear Quartz – Citrine",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      // Need at least 3 bead types for a proper gradient
      if (preferredBeads.length < 3) {
        if (preferredBeads.length === 2) {
          // Create a simple A-B-A pattern with 2 bead types
          const pattern: BeadType[] = []
          const centerIndex = Math.floor(beadCount / 2)

          for (let i = 0; i < beadCount; i++) {
            if (i === centerIndex) {
              pattern.push(preferredBeads[1])
            } else {
              pattern.push(preferredBeads[0])
            }
          }
          return pattern
        }
        return Array(beadCount).fill(preferredBeads[0])
      }

      const pattern: BeadType[] = []
      const centerIndex = Math.floor(beadCount / 2)
      const maxDistance = Math.max(centerIndex, beadCount - centerIndex - 1)

      for (let i = 0; i < beadCount; i++) {
        const distanceFromCenter = Math.abs(i - centerIndex)
        const normalizedDistance = distanceFromCenter / maxDistance
        const beadIndex = Math.min(Math.floor(normalizedDistance * preferredBeads.length), preferredBeads.length - 1)
        pattern.push(preferredBeads[beadIndex])
      }
      return pattern
    },
  },
  {
    name: "Cluster Center",
    icon: "🌀",
    description: "A-A-B-B-B-A-A: A central cluster of the primary crystal surrounded by accent beads.",
    bestFor: "A strong focus or manifestation of one specific energy",
    example:
      "Tiger's Eye – Rose Quartz – Black Tourmaline – Black Tourmaline – Black Tourmaline – Rose Quartz – Tiger's Eye",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      // Need at least 2 bead types
      if (preferredBeads.length < 2) return Array(beadCount).fill(preferredBeads[0])

      const pattern: BeadType[] = []
      const centerIndex = Math.floor(beadCount / 2)
      const clusterSize = Math.max(1, Math.floor(beadCount / 3))
      const clusterStart = centerIndex - Math.floor(clusterSize / 2)
      const clusterEnd = clusterStart + clusterSize

      for (let i = 0; i < beadCount; i++) {
        if (i >= clusterStart && i < clusterEnd) {
          pattern.push(preferredBeads[1]) // Cluster beads
        } else {
          pattern.push(preferredBeads[0]) // Surrounding beads
        }
      }
      return pattern
    },
  },
  {
    name: "Accent Pop",
    icon: "🌙",
    description: "A-A-A-B-A-A-A: A mostly monochrome design with one standout accent.",
    bestFor: "Subtle intentions, minimalist designs",
    example: "Jade – Jade – Jade – Citrine – Jade – Jade – Jade",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      // Need at least 2 bead types
      if (preferredBeads.length < 2) return Array(beadCount).fill(preferredBeads[0])

      const pattern: BeadType[] = []
      const accentIndex = Math.floor(beadCount / 2)

      for (let i = 0; i < beadCount; i++) {
        if (i === accentIndex) {
          pattern.push(preferredBeads[1]) // Accent bead
        } else {
          pattern.push(preferredBeads[0]) // Main beads
        }
      }
      return pattern
    },
  },
  {
    name: "Mirrored Symmetry",
    icon: "🔄",
    description: "A-B-C-D-C-B-A: Each side of the bracelet mirrors the other.",
    bestFor: "Balance & Harmony themes",
    example: "Amethyst – Rose Quartz – Clear Quartz – Moonstone – Clear Quartz – Rose Quartz – Amethyst",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      // Need at least 2 bead types
      if (preferredBeads.length < 2) return Array(beadCount).fill(preferredBeads[0])

      const pattern: BeadType[] = []
      const centerIndex = Math.floor(beadCount / 2)

      for (let i = 0; i < beadCount; i++) {
        const distanceFromCenter = Math.abs(i - centerIndex)
        const beadIndex = Math.min(distanceFromCenter, preferredBeads.length - 1)
        pattern.push(preferredBeads[beadIndex])
      }
      return pattern
    },
  },
  {
    name: "Intent Stacking",
    icon: "🧘‍♀️",
    description: "A-A-B-B-C-C: Group each intention's crystal together in blocks.",
    bestFor: "Multi-intention bracelets",
    example:
      "(Love) Rose Quartz – Rose Quartz, (Protection) Black Tourmaline – Black Tourmaline, (Clarity) Clear Quartz – Clear Quartz",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      // Need at least 2 bead types
      if (preferredBeads.length < 2) return Array(beadCount).fill(preferredBeads[0])

      const pattern: BeadType[] = []
      const beadsPerType = Math.max(1, Math.floor(beadCount / preferredBeads.length))

      let currentIndex = 0
      for (let type = 0; type < preferredBeads.length && currentIndex < beadCount; type++) {
        for (let i = 0; i < beadsPerType && currentIndex < beadCount; i++) {
          pattern.push(preferredBeads[type])
          currentIndex++
        }
      }

      // Fill any remaining spots with the last bead type
      while (currentIndex < beadCount) {
        pattern.push(preferredBeads[preferredBeads.length - 1])
        currentIndex++
      }

      return pattern
    },
  },
  {
    name: "Random Distribution",
    icon: "🎲",
    description: "Random arrangement of crystals for a natural, organic look.",
    bestFor: "General energy work, versatility",
    example: "A mix of various crystals in a random arrangement",
    generatePattern: (beadCount: number, preferredBeads: BeadType[]): BeadType[] => {
      // Create a layout based on user preferences
      const layout: BeadType[] = []

      // Fill the bracelet with preferred beads
      for (let i = 0; i < beadCount; i++) {
        const randomIndex = Math.floor(Math.random() * preferredBeads.length)
        layout.push(preferredBeads[randomIndex])
      }

      return layout
    },
  },
]
