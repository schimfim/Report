"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function AirlogDetailedSlide() {
  const performanceData = [
    { name: "Transport Documents", improvement: 35, before: 0.652, after: 0.419 },
    { name: "Routing Schedule", improvement: 49, before: 2.959, after: 1.49 },
    { name: "Invoice Entry Tab", improvement: 30, before: 1.593, after: 1.103 },
    { name: "Carrier Booking", improvement: 48, before: 1.25, after: 0.645 },
    { name: "Airfreight", improvement: 37, before: 1.984, after: 1.233 },
    { name: "Documentation", improvement: 38, before: 0.846, after: 0.519 },
    { name: "KN Services", improvement: 51, before: 1.858, after: 0.907 },
    { name: "Invoice Summary / History", improvement: 39, before: 0.849, after: 0.512 },
    { name: "Cargo Details", improvement: 58, before: 2.704, after: 1.135 },
    { name: "Main Transport Document", improvement: 40, before: 1.108, after: 0.655 },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-brand-blue text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Detailed Performance Analysis
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Performance by Function
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Average duration(ms) of "save tab" action across{" "}
            <span className="underline font-medium">all regions for specific tabs</span>
          </p>
        </div>

        {/* Performance Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto mb-8">
          {performanceData.map((func, funcIndex) => (
            <Card
              key={funcIndex}
              className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardHeader className="text-center pt-6 pb-4">
                <CardTitle className="text-sm md:text-base font-bold text-brand-navy font-suisse mb-4 h-12 flex items-center justify-center">
                  {func.name}
                </CardTitle>

                {/* Simple Before/After Chart */}
                <div className="relative h-32 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-end justify-center space-x-4 h-full">
                    {/* Before Bar */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs font-bold text-gray-700 mb-2 font-suisse">{func.before}</div>
                      <div
                        className="w-8 bg-red-500 rounded-t-lg transition-all duration-1000"
                        style={{ height: `${(func.before / Math.max(func.before, func.after)) * 80}px` }}
                      ></div>
                      <div className="text-xs text-gray-600 mt-2 font-suisse">Before</div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center pb-6">
                      <ArrowRight className="h-4 w-4 text-brand-blue" />
                    </div>

                    {/* After Bar */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs font-bold text-gray-700 mb-2 font-suisse">{func.after}</div>
                      <div
                        className="w-8 bg-green-500 rounded-t-lg transition-all duration-1000 delay-500"
                        style={{ height: `${(func.after / Math.max(func.before, func.after)) * 80}px` }}
                      ></div>
                      <div className="text-xs text-gray-600 mt-2 font-suisse">After</div>
                    </div>
                  </div>

                  {/* Improvement Badge */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2">
                    <div className="bg-green-500 text-white rounded-full px-3 py-1 text-xs font-bold font-suisse">
                      Better {func.improvement}%
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2 font-suisse">58%</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Best Improvement</div>
            <div className="text-xs text-gray-500 font-suisse mt-1">Cargo Details</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-2 font-suisse">42%</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Average Improvement</div>
            <div className="text-xs text-gray-500 font-suisse mt-1">Across All Functions</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-brand-green mb-2 font-suisse">10</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Functions Optimized</div>
            <div className="text-xs text-gray-500 font-suisse mt-1">Core Business Areas</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-brand-navy mb-2 font-suisse">0.8s</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Target Response</div>
            <div className="text-xs text-gray-500 font-suisse mt-1">Sub-second Performance</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
