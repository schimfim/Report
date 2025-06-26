"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface MasterDataTitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function MasterDataTitleSlide({ goToSlide }: MasterDataTitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={4}
      title="Master Data Customer Groups"
      subtitle="Business Partner Grouping implementation and roadmap"
      icon="Users"
      videoConfig={VIDEO_CONFIG.groups}
      fallbackGradient="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500"
      highlights={[
        { icon: "Database", text: "Data Integration" },
        { icon: "Layers", text: "Hierarchy Structure" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[5, 1]} // This points to the first content slide in this section
    />
  )
}
