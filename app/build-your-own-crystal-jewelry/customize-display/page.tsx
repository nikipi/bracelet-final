"use client"

import { beadTypes, ZodiacCrystalMap, type BeadType } from "@/components/beadsInfo"
import BeadPreview from "@/components/customize/BeadPreview"
import BeadSelector from "@/components/customize/BeadSelector"
import ExplanationPanel, { LayoutExplanation } from "@/components/customize/ExplanationPanel"
import PatternPreview from "@/components/customize/PatternPreview"
import SizeSelector, { beadSizes, BeadSizesType, braceletSizes, BraceletSizesType } from "@/components/customize/SizeSelector"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { CustomizeizeContext, ICustomizeize } from "@/context/customize.context"
import { useRouter } from "next/navigation"
import { useContext, useEffect, useMemo, useRef, useState } from "react"
import { generatePersonalizedLayout, getBeadPosition, calculateBeadCount } from "@/app/build-your-own-crystal-jewelry/tool/tool"
import { layoutPatternOptions } from "@/components/customize/LayoutPattern"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { USERPORFILE_KEY } from "@/constant"
import ScrollXBox from "@/components/ScrollXBox"
import { generateLayoutExplanation } from "@/app/build-your-own-crystal-jewelry/tool/tool";






export default function BraceletCustomizer() {
  const router = useRouter()

  // Calculate number of beads based on bracelet circumference and bead size


  // State for selected sizes (as strings with units)
  const [selectedBraceletSize, setSelectedBraceletSize] = useState<keyof BraceletSizesType>("18cm")
  const [selectedBeadSize, setSelectedBeadSize] = useState<keyof typeof beadSizes>("8mm")
  const [individualBeadSizes, setIndividualBeadSizes] = useState<BeadSizesType[]>([])
  const [loaded,setLoaded]=useState(false);
  const initPatternIndex = useRef(2)

  
  // Dynamically calculate bead count based on current selections
  const beadCount = useMemo(() => {
    return calculateBeadCount(selectedBraceletSize, selectedBeadSize)
  }, [selectedBraceletSize, selectedBeadSize])

  // Initialize bracelet with empty beads
  const [bracelet, setBracelet] = useState<BeadType[]>(Array(beadCount).fill(""))

  // State for layout explanation
  const [layoutExplanation, setLayoutExplanation] = useState<LayoutExplanation | null>(null)

  // Initialize bead sizes when bracelet changes
  useEffect(() => {
    setIndividualBeadSizes(Array(beadCount).fill(selectedBeadSize))
  }, [beadCount, selectedBeadSize])

  // Currently selected bead index
  const [selectedBeadIndex, setSelectedBeadIndex] = useState<number | null>(null)

  // UI states
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("result")



  const userProfile = useContext(CustomizeizeContext)

  // Handler for bead clicks
  const handleBeadClick = (index: number) => {
    setSelectedBeadIndex(index)
  }

  // Handler to change bead type
  const changeBeadType = (beadType: BeadType) => {
    if (selectedBeadIndex !== null) {
      const newBracelet = [...bracelet]
      newBracelet[selectedBeadIndex] = beadType
      setBracelet(newBracelet)
    }
  }

  useEffect(() => {

    if (!userProfile.zodiacSign) return; 

    if(!loaded){
      const {zodiacSign,preferredCrystals}=userProfile;
      const newPreferredCrystals=[...preferredCrystals!]

      const defaultCrystal=ZodiacCrystalMap[zodiacSign!]
      // const defaultCrystal=purposeCrystalMap[zodiacSign]
      defaultCrystal.forEach(cry=>{
        if(!newPreferredCrystals.includes(cry)){
          newPreferredCrystals.push(cry)
        }
      })
      userProfile.setPreferredCrystals(newPreferredCrystals)
      setLoaded(true);
    }else{
          // Generate the bracelet on page load
    const generateInitialBracelet = async () => {
      setIsGenerating(true)
      console.log('beadCount->', beadCount, userProfile);

      try {
        const result = generatePersonalizedLayout({
          beadCount,
          userProfile:userProfile,
          patternIndex: initPatternIndex.current,
          callback(patternIndex) {
            initPatternIndex.current = patternIndex
          },
        })

        setBracelet(result.layout)
        setLayoutExplanation(result.explanation)
        // setPatternName(result.patternName)
      } catch (error) {
        console.error("Error generating personalized layout:", error)
      } finally {
        setIsGenerating(false)
      }
    }
      generateInitialBracelet()
    }
  }, [beadCount, userProfile,loaded])

  // Update bracelet when size changes
  useEffect(() => {
    // Resize the bracelet when bracelet size or bead size changes
    setBracelet((prev) => {
      const newBracelet = Array(beadCount).fill("")
      // Copy over existing bead types where possible
      for (let i = 0; i < Math.min(prev.length, beadCount); i++) {
        newBracelet[i] = prev[i]
      }
      return newBracelet
    })
  }, [selectedBraceletSize, selectedBeadSize, beadCount])

  //初始化userProfile 解决刷新userProfile丢失
  useEffect(() => {
    if (!userProfile.isGift || !userProfile.zodiacSign) {
      const localUserProfile = window.sessionStorage.getItem(USERPORFILE_KEY);
      if (localUserProfile) {
        const json = JSON.parse(localUserProfile) as ICustomizeize;
        userProfile.setIsGift(json.isGift!)
        userProfile.setZodiacSign(json.zodiacSign!)
        userProfile.setPurposes!(json.purposes!)
        userProfile.setPreferredCrystals!(json.preferredCrystals!)
      }
    }
  }, [])


  // const handlePatternChange = (value: string) => {
  //   const patternIndex = parseInt(value)
  //   generatePersonalizedLayout(patternIndex)
  // }

  const changeLayout = (patternIndex: number) => {
    initPatternIndex.current = patternIndex
    const { layout, explanation } = generatePersonalizedLayout({ beadCount, userProfile, patternIndex })
    setBracelet(layout)
    setLayoutExplanation(explanation)
  }

  useEffect(() => {
    // Only update explanation if user has already interacted or initial load is done
    if (loaded) {
      const explanation = generateLayoutExplanation(
        bracelet,
        userProfile,
        layoutPatternOptions[initPatternIndex.current].name
      )
      setLayoutExplanation(explanation)
    }
  }, [bracelet])


  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-[#2c2c2c] mb-6">
              Your Perfect <span className="font-normal italic">Bracelet</span>
            </h1>
            {/* <p className="text-[#5c5c5c] text-lg md:text-xl font-light max-w-2xl mx-auto">
              We've created a custom crystal bracelet based on your preferences. You can further customize it below.
            </p> */}
          </div>


          {activeTab === "result" && (
            <div className="w-full max-w-5xl mx-auto">
              {/* Main content area with SizeSelector, BeadPreview, and BeadSelector in three columns */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                {/* SizeSelector on the left */}
                <div className="mb-4">

                  <SizeSelector
                    braceletSizes={braceletSizes}
                    beadSizes={beadSizes}
                    selectedBraceletSize={selectedBraceletSize}
                    setSelectedBraceletSize={setSelectedBraceletSize}
                    selectedBeadSize={selectedBeadSize}
                    setSelectedBeadSize={setSelectedBeadSize}
                  />

                </div>

                {/* BeadPreview in the center */}
                <div className="md:w-2/4 flex justify-center">
                  <div className="relative w-[350px] h-[400px] mx-auto">
                    {bracelet.map((beadType, index) => {
                      const { x, y } = getBeadPosition(index, beadCount, braceletSizes[selectedBraceletSize])
                      const isSelected = selectedBeadIndex === index
                      const bead = beadTypes[beadType]
                      const size = beadSizes[individualBeadSizes[index] || selectedBeadSize]
                      return (
                        <BeadPreview
                          key={index}
                          left={x}
                          top={y}
                          isSelected={isSelected}
                          index={index}
                          bead={bead}
                          click={handleBeadClick}
                          size={size}
                        />
                      )
                    })}

                    {/* Center of the bracelet */}
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[rgba(229,224,213,0.1)] border-dashed pointer-events-none"
                      style={{
                        width: `${braceletSizes[selectedBraceletSize] * 2}px`,
                        height: `${braceletSizes[selectedBraceletSize] * 2}px`,
                      }}


                    >
                      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-[0.7] origin-center">
  <Logo size="sm" showCircle={true} />
</div> */}

                    </div>
                  </div>
                </div>


                {/* BeadSelector to the right */}
                <div className="md:w-1/4">
                  <BeadSelector
                    selectedBeadIndex={selectedBeadIndex}
                    bracelet={bracelet}
                    changeBeadType={changeBeadType}
                    individualBeadSizes={individualBeadSizes}
                    selectedBeadSize={selectedBeadSize}
                    beadSizes={beadSizes}
                    setIndividualBeadSizes={setIndividualBeadSizes}
                    setSelectedBeadIndex={setSelectedBeadIndex}
                    handleBeadClick={handleBeadClick}
                  />
                </div>
              </div>

              {/* Layout pattern options */}

              <div className="text-center mb-16">
                <p className="text-gray-600 text-base mb-3">
                  Click on any bead in the bracelet to customize it, or try a different layout pattern below:
                </p>
                <Card className="w-4/5 mx-auto bg-white rounded-xl shadow-sm border border-[#e5e0d5]">
                  <CardContent className="p-4">


                    {/* Scrollable container with visible overflow and custom scrollbar */}
                    <div className="relative">
                      {/* Inner flex container with consistent spacing */}
                      <ScrollXBox>
                        {layoutPatternOptions.slice(0, 7).map((p, index) => {
                          if (index !== initPatternIndex.current) {
                            const { layout } = generatePersonalizedLayout({
                              beadCount,
                              userProfile,
                              patternIndex: index,
                            });
                            return (
                              <div key={index} className="flex-shrink-0 snap-center">
                                <PatternPreview
                                  click={() => changeLayout(index)}
                                  data={layout}
                                  beadCount={beadCount}
                                  radius={braceletSizes[selectedBraceletSize]}
                                  size={beadSizes[individualBeadSizes[index] || selectedBeadSize]}
                                />
                              </div>
                            );
                          }
                          return null;
                        })}
                      </ScrollXBox>

                      {/* Optional scroll indicators */}
                      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white pointer-events-none" />
                      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white pointer-events-none" />
                    </div>

                    {/* Optional scroll hint */}
                    <p className="text-gray-400 text-xs mt-2">
                      ← Scroll to see more patterns →
                    </p>
                  </CardContent>
                </Card>
              </div>


              {/* <div className="text-center mb-2">
                <p className="text-sm text-[#5c5c5c]">
                  {beadCount} beads • {selectedBeadSize} bead size • {selectedBraceletSize} bracelet size
                </p>
              </div> */}

              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/* Explanation panel */}
                <ExplanationPanel
                  layoutExplanation={layoutExplanation}
                  router={router}
                  userProfile={userProfile}
                />

              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}