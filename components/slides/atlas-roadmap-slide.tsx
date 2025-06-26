"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Calendar, AlertCircle } from "lucide-react"

export default function AtlasRoadmapSlide() {
  // Data structure for deployments
  const regions = [
    {
      name: "Roll Out - USA",
      deployments: [
        { code: "ORD", date: "13.01", status: "completed" },
        { code: "MSP", date: "12.02", status: "completed" },
        { code: "BHM", date: "07.03", status: "completed" },
        { code: "ATL", date: "31.03", status: "completed" },
        { code: "CLT", date: "16.04", status: "completed" },
        { code: "LAX", date: "02.06", status: "completed" },
        { code: "HOU", date: "25.06", status: "in-progress" },
        { code: "MIA", date: "14.07", status: "in-progress" },
      ],
    },
    {
      name: "Roll Out - Germany",
      deployments: [
        { code: "MUC", date: "17.02", status: "completed" },
        { code: "MHG", date: "19.05", status: "completed" },
        { code: "FRA", date: "23.06", status: "in-progress" },
      ],
    },
    {
      name: "Roll Out - Europe",
      deployments: [
        { code: "BUD", date: "13.01", status: "completed" },
        { code: "MIL", date: "10.02", status: "completed" },
        { code: "MAN", date: "17.03", status: "completed" },
        { code: "BCN", date: "08.04", status: "completed" },
        { code: "LHR", date: "12.05", status: "completed" },
        { code: "BRU", date: "19.05", status: "completed" },
      ],
    },
    {
      name: "Roll Out - MEA/SAP/TOR",
      deployments: [
        { code: "SYD", date: "28.01", status: "completed" },
        { code: "DXB", date: "17.02", status: "completed" },
        { code: "TOR", date: "17.03", status: "completed" },
        { code: "DEL", date: "14.04", status: "completed" },
        { code: "SIN", date: "24.03", status: "completed" },
        { code: "JNB", date: "09.05", status: "completed" },
      ],
    },
    {
      name: "Roll Out - New Warehouses (non THS)",
      deployments: [
        { code: "MKE", date: "30.04", status: "in-progress" },
        { code: "STR", date: "09.25", status: "upcoming" },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-white" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-white" />
      case "upcoming":
        return <Calendar className="h-5 w-5 text-white" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "in-progress":
        return "bg-amber-500"
      case "upcoming":
        return "bg-blue-500"
      default:
        return "bg-gray-300"
    }
  }

  // Remaining locations for THS sunset
  const remainingLocations = [
    { code: "HOU", date: "25.06" },
    { code: "MIA", date: "14.07" },
    { code: "FRA", date: "23.06" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 md:px-6">
      <div className="max-w-7xl w-full mx-auto space-y-8">
        {/* Deployment Status Cards Section */}
        <Card className="w-full bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
          <CardContent className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6 tracking-tight font-suisse">
                ATLAS Rollout Status
              </h2>

              {/* Status Legend */}
              <div className="flex items-center justify-center gap-6 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <span className="text-gray-700 font-suisse">Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                  <span className="text-gray-700 font-suisse">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 font-suisse">Upcoming</span>
                </div>
              </div>
            </div>

            {/* Regions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {regions.map((region, regionIndex) => (
                <div key={regionIndex} className={regionIndex === 4 ? "md:col-span-2" : ""}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 font-suisse">{region.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {region.deployments.map((deployment, deploymentIndex) => (
                      <div
                        key={deploymentIndex}
                        className={`${getStatusColor(
                          deployment.status,
                        )} text-white rounded-md px-4 py-2 flex items-center justify-between w-[140px]`}
                      >
                        <div className="font-bold text-lg font-suisse">{deployment.code}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-suisse">{deployment.date}</span>
                          {getStatusIcon(deployment.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* THS Sunset Banner */}
        <Card className="w-full border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-brand-navy to-brand-blue">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <AlertCircle className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight font-suisse">
                    THS Sunset Progress
                  </h3>
                  <p className="text-white/90 font-suisse text-lg">
                    Only <span className="font-bold text-xl">3</span> locations remaining to complete the THS sunset
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {remainingLocations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-sm text-white rounded-md px-4 py-3 flex flex-col items-center"
                  >
                    <div className="font-bold text-xl font-suisse">{location.code}</div>
                    <div className="text-sm font-suisse mt-1">Target: {location.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/90 font-suisse">Overall Progress</span>
                <span className="text-white font-bold font-suisse">88%</span>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full" style={{ width: "88%" }}></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/80 font-suisse">
                <span>0%</span>
                <span>Project Completion</span>
                <span>100%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
