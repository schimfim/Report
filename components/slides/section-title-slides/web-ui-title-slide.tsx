"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface WebUITitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function WebUITitleSlide({ goToSlide }: WebUITitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={3}
      title="Web UI"
      subtitle="Staffing status and migration progress"
      icon="LayoutDashboard"
      videoConfig={VIDEO_CONFIG.webui}
      fallbackGradient="bg-gradient-to-br from-red-700 via-red-600 to-red-500"
      highlights={[
        { icon: "Users", text: "Team Composition" },
        { icon: "Code", text: "Component Status" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[4, 1]} // This points to the first content slide in this section
    />
  )
}
