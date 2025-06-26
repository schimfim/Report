"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface FlightLevelTitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function FlightLevelTitleSlide({ goToSlide }: FlightLevelTitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={2}
      title="Flight-Level Process"
      subtitle="End-to-end visibility and governance across business initiatives"
      icon="Target"
      videoConfig={VIDEO_CONFIG.levels}
      fallbackGradient="bg-gradient-to-br from-green-600 via-green-500 to-teal-400"
      highlights={[
        { icon: "GitBranch", text: "Operational Level" },
        { icon: "GitMerge", text: "Coordination Level" },
        { icon: "Target", text: "Strategic Level" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[3, 1]} // This points to the first content slide in this section
    />
  )
}
