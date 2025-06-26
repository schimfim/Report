"use client"

import { SectionTitleLayout } from "@/components/ui/section-title-layout"
import { VIDEO_CONFIG } from "@/lib/constants"

interface TruckingTitleSlideProps {
  goToSlide?: (row: number, col: number) => void
}

export default function TruckingTitleSlide({ goToSlide }: TruckingTitleSlideProps) {
  return (
    <SectionTitleLayout
      sectionNumber={5}
      title="Trucking Operations"
      subtitle="Operational status and recent developments"
      icon="Truck"
      videoConfig={VIDEO_CONFIG.trucking}
      fallbackGradient="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600"
      highlights={[
        { icon: "MapPin", text: "Route Optimization" },
        { icon: "Package", text: "Shipment Metrics" },
      ]}
      goToSlide={goToSlide}
      nextSlidePosition={[6, 1]} // This points to the first content slide in this section
    />
  )
}
