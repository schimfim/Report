"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface AirlogTitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function AirlogTitleSlide({ goToSlide }: AirlogTitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={1}
      title="AirLOG in the Cloud"
      subtitle="Performance optimization and cloud migration journey"
      icon="Cloud"
      videoConfig={VIDEO_CONFIG.cloud}
      fallbackGradient="bg-gradient-to-br from-brand-navy via-brand-blue to-brand-green"
      highlights={[
        { icon: "BarChart3", text: "Performance Metrics" },
        { icon: "Zap", text: "Aurora Migration" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[2, 1]} // This points to the first content slide in this section
    />
  )
}
