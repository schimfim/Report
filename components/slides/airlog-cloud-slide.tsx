"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, CheckCircle, Clock } from "lucide-react"

export default function AirlogCloudSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-brand-blue text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            AirLOG in the Cloud
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 md:mb-8 tracking-tight font-suisse">
            Key activities to enhance SALOG performance
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed font-suisse italic">
            Series of improvements to make the system faster, more stable and more reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* December Release */}
          <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pt-8 pb-6">
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Cloud className="h-8 w-8 text-brand-blue" />
              </div>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-brand-blue font-semibold text-sm font-suisse">December release (R4.24)</span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold text-brand-navy font-suisse">
                Laying the foundation
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <p className="text-gray-700 font-medium mb-4 font-suisse">
                The first set of optimizations focused on stability and immediate performance boosts.
              </p>
              <ul className="space-y-2 text-gray-600 font-suisse">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>New processor type (Instance type M6a*)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Server-side smart scaling</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* February Release */}
          <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pt-8 pb-6">
              <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <div className="relative">
                  <Cloud className="h-8 w-8 text-brand-blue" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="h-5 w-5 text-brand-green mr-2" />
                <span className="text-brand-blue font-semibold text-sm font-suisse">February release (R4.25)</span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold text-brand-navy font-suisse">
                Expanding the impact
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <p className="text-gray-700 font-medium mb-4 font-suisse">
                Building on the December improvements, we're taking the next step toward a more connected and responsive
                system.
              </p>
              <ul className="space-y-2 text-gray-600 font-suisse text-sm">
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Optimized network encryption technology (completed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Conducted global performance survey to identify hotspots (completed)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Pilot rollout of SDWAN (Software-Defined Wide Area Network)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-blue mr-2">•</span>
                  <span>Newest processor type with increased memory bandwidth (Instance type R7a**)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* April Release */}
          <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pt-8 pb-6">
              <div className="mx-auto w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-yellow-500"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-yellow-500"></div>
                  <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-0.5 bg-yellow-500"></div>
                  <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-0.5 bg-yellow-500"></div>
                </div>
              </div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 text-yellow-600 mr-2" />
                <span className="text-yellow-600 font-semibold text-sm font-suisse">April release (R4.26)</span>
              </div>
              <CardTitle className="text-xl md:text-2xl font-bold text-brand-navy font-suisse">
                Network & performance boost
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <p className="text-gray-700 font-medium mb-4 font-suisse">Finalizing global network optimization</p>
              <ul className="space-y-2 text-gray-600 font-suisse">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Global rollout of a new network setup (SDWAN)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Optimize top functions identified in survey</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footnotes */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="text-xs text-gray-500 space-y-1 font-suisse">
              <p>
                <span className="font-medium">*</span> Good balance of CPU, memory and networking capabilities.
              </p>
              <p>
                <span className="font-medium">**</span> Designed for memory-intensive workloads, ideal for applications
                that require quick access to large amount of data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
