import { lazy, Suspense } from "react"

// Lazy load slide components
const HeroSlide = lazy(() => import("@/components/slides/hero-slide"))
const AgendaSlide = lazy(() => import("@/components/slides/agenda-slide"))

// Section title slides
const AirlogTitleSlide = lazy(() => import("@/components/slides/section-title-slides/airlog-title-slide"))
const FlightLevelTitleSlide = lazy(() => import("@/components/slides/section-title-slides/flight-level-title-slide"))
const WebUITitleSlide = lazy(() => import("@/components/slides/section-title-slides/web-ui-title-slide"))
const MasterDataTitleSlide = lazy(() => import("@/components/slides/section-title-slides/master-data-title-slide"))
const TruckingTitleSlide = lazy(() => import("@/components/slides/section-title-slides/trucking-title-slide"))
const AtlasTitleSlide = lazy(() => import("@/components/slides/section-title-slides/atlas-title-slide"))
const GovernanceTitleSlide = lazy(() => import("@/components/slides/section-title-slides/governance-title-slide"))

// Content slides
const AirlogCloudSlide = lazy(() => import("@/components/slides/airlog-cloud-slide"))
const AirlogResultsSlide = lazy(() => import("@/components/slides/airlog-results-slide"))
const AirlogDetailedSlide = lazy(() => import("@/components/slides/airlog-detailed-slide"))
const AuroraMigrationSlide = lazy(() => import("@/components/slides/aurora-migration-slide"))
const GoLiveSlide = lazy(() => import("@/components/slides/golive-slide"))
const AuroraStatusSlide = lazy(() => import("@/components/slides/aurora-status-slide"))
const FlightLevelProcessSlide = lazy(() => import("@/components/slides/flight-level-process-slide"))
const WebUISlide = lazy(() => import("@/components/slides/web-ui-slide"))
const BusinessPartnerGroupingSlide = lazy(() => import("@/components/slides/business-partner-grouping-slide"))
const TruckingGoalsSlide = lazy(() => import("@/components/slides/trucking-goals-slide"))
const AtlasRoadmapSlide = lazy(() => import("@/components/slides/atlas-roadmap-slide"))
const GovernanceProblemSlide = lazy(() => import("@/components/slides/governance-problem-slide"))

// Add imports for the AI section slides
const AIPrototypingTitleSlide = lazy(
  () => import("@/components/slides/section-title-slides/ai-prototyping-title-slide"),
)
const AIWorkshopSlide = lazy(() => import("@/components/slides/ai-workshop-slide"))

interface SlideRendererProps {
  currentSlideIndex: number
  goToSlide: (row: number, col: number) => void
}

export function SlideRenderer({ currentSlideIndex, goToSlide }: SlideRendererProps) {
  // Update the slideComponents array to include the new slides
  const slideComponents = [
    <HeroSlide key="hero" goToSlide={goToSlide} />,
    <AgendaSlide key="agenda" goToSlide={goToSlide} />,
    <AirlogTitleSlide key="airlog-title" goToSlide={goToSlide} />,
    <AirlogCloudSlide key="airlog-cloud" />,
    <AirlogResultsSlide key="airlog-results" />,
    <AirlogDetailedSlide key="airlog-detailed" />,
    <AuroraMigrationSlide key="aurora-migration" />,
    <GoLiveSlide key="golive" />,
    <AuroraStatusSlide key="aurora-status" />,
    <FlightLevelTitleSlide key="flight-level-title" goToSlide={goToSlide} />,
    <FlightLevelProcessSlide key="flight-level-process" />,
    <WebUITitleSlide key="web-ui-title" goToSlide={goToSlide} />,
    <WebUISlide key="web-ui" />,
    <MasterDataTitleSlide key="master-data-title" goToSlide={goToSlide} />,
    <BusinessPartnerGroupingSlide key="business-partner-grouping" />,
    <TruckingTitleSlide key="trucking-title" goToSlide={goToSlide} />,
    <TruckingGoalsSlide key="trucking-goals" />,
    <AtlasTitleSlide key="atlas-title" goToSlide={goToSlide} />,
    <AtlasRoadmapSlide key="atlas-roadmap" />,
    <GovernanceTitleSlide key="governance-title" goToSlide={goToSlide} />,
    <GovernanceProblemSlide key="governance-problem" />,
    <AIPrototypingTitleSlide key="ai-prototyping-title" goToSlide={goToSlide} />,
    <AIWorkshopSlide key="ai-workshop" />,
  ]

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-brand-navy border-t-transparent"></div>
        </div>
      }
    >
      {slideComponents[currentSlideIndex]}
    </Suspense>
  )
}
