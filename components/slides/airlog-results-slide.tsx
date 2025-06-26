"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AirlogResultsSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-brand-green text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Performance Results
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 md:mb-8 tracking-tight font-suisse">
            Measured Results
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Average duration(ms) of "save tab" and "open tab" actions across{" "}
            <span className="underline font-medium">all tabs and regions</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Save Tab Chart */}
          <Card className="bg-gray-50 border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pt-8 pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-brand-blue font-suisse mb-4">
                SALOG - "Save tab"
              </CardTitle>
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  {[
                    { version: "4.23.8", value: 1.58, color: "bg-red-500", height: "100%" },
                    { version: "4.23.9", value: 1.37, color: "bg-orange-500", height: "87%" },
                    { version: "4.24.8", value: 0.871, color: "bg-yellow-500", height: "55%" },
                    { version: "4.25.8", value: 0.99, color: "bg-green-500", height: "63%" },
                  ].map((bar, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 mx-1">
                      <div className="text-xs font-bold text-gray-700 mb-2 font-suisse">{bar.value}</div>
                      <div
                        className={`w-full ${bar.color} rounded-t-lg transition-all duration-1000 delay-${index * 200} relative group`}
                        style={{ height: bar.height }}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-3 font-suisse text-center leading-tight">
                        {bar.version}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trendline */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="12.5,20 37.5,33 62.5,65 87.5,57"
                    fill="none"
                    stroke="#003369"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                    className="opacity-70"
                  />
                  <polyline
                    points="12.5,20 37.5,33 62.5,65 87.5,57"
                    fill="none"
                    stroke="#0099da"
                    strokeWidth="2"
                    className="opacity-80"
                  />
                </svg>

                {/* Improvement Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-green-500">
                    <span className="text-2xl md:text-3xl font-bold text-green-600 font-suisse">Better 45%</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Open Tab Chart */}
          <Card className="bg-gray-50 border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
            <CardHeader className="text-center pt-8 pb-6">
              <CardTitle className="text-2xl md:text-3xl font-bold text-brand-blue font-suisse mb-4">
                SALOG "Open tab"
              </CardTitle>
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-end justify-between px-4">
                  {[
                    { version: "4.23.8", value: 1.263, color: "bg-red-500", height: "100%" },
                    { version: "4.23.9", value: 1.157, color: "bg-orange-500", height: "92%" },
                    { version: "4.24.8", value: 0.826, color: "bg-yellow-500", height: "65%" },
                    { version: "4.25.8", value: 0.869, color: "bg-green-500", height: "69%" },
                    { version: "4.26.5", value: 0.757, color: "bg-blue-500", height: "60%" },
                  ].map((bar, index) => (
                    <div key={index} className="flex flex-col items-center flex-1 mx-1">
                      <div className="text-xs font-bold text-gray-700 mb-2 font-suisse">{bar.value}</div>
                      <div
                        className={`w-full ${bar.color} rounded-t-lg transition-all duration-1000 delay-${index * 200} relative group`}
                        style={{ height: bar.height }}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
                      </div>
                      <div className="text-xs text-gray-600 mt-3 font-suisse text-center leading-tight">
                        {bar.version}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trendline */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polyline
                    points="10,20 30,28 50,55 70,51 90,60"
                    fill="none"
                    stroke="#003369"
                    strokeWidth="0.8"
                    strokeDasharray="2,2"
                    className="opacity-70"
                  />
                  <polyline
                    points="10,20 30,28 50,55 70,51 90,60"
                    fill="none"
                    stroke="#0099da"
                    strokeWidth="2"
                    className="opacity-80"
                  />
                </svg>

                {/* Improvement Badge */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border-2 border-green-500">
                    <span className="text-2xl md:text-3xl font-bold text-green-600 font-suisse">Better 40%</span>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 font-suisse">45%</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Save Tab Improvement</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 font-suisse">40%</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Open Tab Improvement</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-2 font-suisse">5</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Release Versions</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
