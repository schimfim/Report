"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface AtlasTitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function AtlasTitleSlide({ goToSlide }: AtlasTitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={6}
      title="ATLAS Roadmap"
      subtitle="Global rollout schedule and key milestones for 2025"
      icon="Map"
      videoConfig={VIDEO_CONFIG.atlas}
      fallbackGradient="bg-gradient-to-br from-green-700 via-green-600 to-green-500"
      highlights={[
        { icon: "Globe", text: "Regional Deployments" },
        { icon: "CheckCircle", text: "THS Sunset Progress" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[7, 1]} // This points to the first content slide in this section
    />
  )
}
