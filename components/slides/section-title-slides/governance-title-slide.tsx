"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface GovernanceTitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function GovernanceTitleSlide({ goToSlide }: GovernanceTitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={7}
      title="IT Governance"
      subtitle="Challenges and solutions for post-split IT governance"
      icon="Shield"
      videoConfig={VIDEO_CONFIG.cops}
      fallbackGradient="bg-gradient-to-br from-purple-800 via-purple-700 to-purple-600"
      highlights={[
        { icon: "Users", text: "Clear Accountability" },
        { icon: "Target", text: "Strategic Alignment" },
        { icon: "Shield", text: "Risk Management" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[8, 1]} // This points to the first content slide in this section
    />
  )
}
