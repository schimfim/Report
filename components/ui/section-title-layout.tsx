"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { VideoBackground } from "@/components/ui/video-background"
import type { VideoConfig } from "@/lib/types"
import * as Icons from "lucide-react"
import { ArrowRight } from "lucide-react"

// Update the props interface to include goToSlide function
interface SectionTitleLayoutProps {
  sectionNumber: number
  title: string
  subtitle: string
  icon: string
  videoConfig: VideoConfig
  fallbackGradient: string
  highlights: Array<{
    icon: string
    text: string
  }>
  goToSlide?: (row: number, col: number) => void
  nextSlidePosition?: [number, number]
}

// Add the button at the bottom of the component, just before the closing </VideoBackground> tag
// Inside the return statement, after the highlights div

export function SectionTitleLayout({
  sectionNumber,
  title,
  subtitle,
  icon,
  videoConfig,
  fallbackGradient,
  highlights,
  goToSlide,
  nextSlidePosition,
}: SectionTitleLayoutProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>

  return (
    <VideoBackground config={videoConfig} fallbackGradient={fallbackGradient}>
      <div className="mb-8">
        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 border border-white/30">
          {IconComponent && <IconComponent className="h-12 w-12 text-white" />}
        </div>
        <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full px-4 py-2 text-sm font-medium font-suisse">
          Section {sectionNumber}
        </Badge>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight font-suisse drop-shadow-2xl">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed font-suisse drop-shadow-lg">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {highlights.map((highlight, index) => {
          const HighlightIcon = Icons[highlight.icon as keyof typeof Icons] as React.ComponentType<{
            className?: string
          }>
          return (
            <div
              key={index}
              className="flex items-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
            >
              {HighlightIcon && <HighlightIcon className="h-6 w-6" />}
              <span className="text-lg font-suisse">{highlight.text}</span>
            </div>
          )
        })}
      </div>

      {/* Add Start Section Button */}
      {goToSlide && nextSlidePosition && (
        <div className="mt-12">
          <button
            onClick={() => goToSlide(nextSlidePosition[0], nextSlidePosition[1])}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium px-8 py-4 rounded-full border border-white/30 transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span className="font-suisse text-lg">Start Section</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </VideoBackground>
  )
}
