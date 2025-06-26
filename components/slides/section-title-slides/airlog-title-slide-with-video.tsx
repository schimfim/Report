"use client"

import { Badge } from "@/components/ui/badge"
import { Cloud, BarChart3, Zap } from "lucide-react"

export default function AirlogTitleSlideWithVideo() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/cloud-computing-background.mp4" type="video/mp4" />
        {/* Fallback gradient background */}
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full text-center px-4 md:px-6">
        <div className="mb-8">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8">
            <Cloud className="h-12 w-12 text-white" />
          </div>
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full px-4 py-2 text-sm font-medium font-suisse">
            Section 1
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight font-suisse drop-shadow-lg">
            AirLOG in the Cloud
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed font-suisse drop-shadow-md">
            Performance optimization and cloud migration journey
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="flex items-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <BarChart3 className="h-6 w-6" />
            <span className="text-lg font-suisse">Performance Metrics</span>
          </div>
          <div className="flex items-center space-x-3 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Zap className="h-6 w-6" />
            <span className="text-lg font-suisse">Aurora Migration</span>
          </div>
        </div>
      </div>
    </div>
  )
}
