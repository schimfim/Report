"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface AIPrototypingTitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function AIPrototypingTitleSlide({ goToSlide }: AIPrototypingTitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={8}
      title="AI Rapid Prototyping Sprint"
      subtitle="Accelerating innovation through AI-powered solution development"
      icon="Sparkles"
      videoConfig={VIDEO_CONFIG.ai}
      fallbackGradient="bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500"
      highlights={[
        { icon: "Lightbulb", text: "Innovation Acceleration" },
        { icon: "Cpu", text: "AI Integration" },
        { icon: "Rocket", text: "Rapid Development" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[9, 1]} // This points to the first content slide in this section
    />
  )
}
