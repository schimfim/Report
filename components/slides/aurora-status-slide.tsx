"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { ImageModal } from "@/components/ui/image-modal"

export default function AuroraStatusSlide() {
  const milestones = [
    {
      id: 1,
      title: "Same SALOG version runs on both Oracle and Aurora",
      activity: "Compatibility issues between Aurora and Oracle resolved",
      status: "DONE",
      statusColor: "bg-green-500",
      details: null,
    },
    {
      id: 2,
      title: "Up-to-date production data is available on both old and new production database",
      activity: "Production data loaded into Aurora DB and in sync with existing Oracle DB",
      status: "BLOCKED",
      statusColor: "bg-red-500",
      details: "Syncing is too slow to keep up with changes",
    },
    {
      id: 3,
      title: "Performance and stability have been validated under production conditions",
      activity: "Loadtest with production data and on production scale",
      status: "IN PROGRESS",
      statusColor: "bg-yellow-500",
      details: "Results expected 6 June",
    },
    {
      id: 4,
      title: "Database can be recovered from backup within the expected time frame",
      activity: "Implement and test backup/recovery concept",
      status: "DONE",
      statusColor: "bg-green-500",
      details: null,
    },
    {
      id: 5,
      title: "Tests have been performed on both Oracle and Aurora with the same SALOG version",
      activity: '"Dual mode" deployment and database sync running on test systems',
      status: "IN PROGRESS",
      statusColor: "bg-yellow-500",
      details: "High number of failing tests, issues with DBUpdater",
    },
    {
      id: 6,
      title: "Switchover and fallback work with minimum downtime and low risk",
      activity: "Switchover/fallback testing",
      status: "BLOCKED",
      statusColor: "bg-red-500",
      details: "Waiting for dual mode deployment",
    },
    {
      id: 7,
      title: "Devs can build and test against Aurora",
      activity: "Set up Aurora (resp. Postgres DB) on dev environments, build pipelines and ODDEs",
      status: "DONE",
      statusColor: "bg-green-500",
      details: null,
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "DONE":
        return <CheckCircle className="h-5 w-5 text-white" />
      case "IN PROGRESS":
        return <Clock className="h-5 w-5 text-white" />
      case "BLOCKED":
        return <AlertTriangle className="h-5 w-5 text-white" />
      default:
        return null
    }
  }

  const blockedMilestones = milestones.filter((item) => item.status === "BLOCKED" || item.status === "IN PROGRESS")

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-brand-blue text-white rounded-full px-4 md:px-6 py-2 md:py-3 text-sm md:text-base font-medium font-suisse">
            Current Status
          </Badge>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Aurora Migration Status
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Prerequisites for production readiness
          </p>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="p-8 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3 font-suisse">3</div>
            <div className="text-lg md:text-xl text-gray-600 font-suisse">Completed</div>
          </Card>
          <Card className="p-8 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-3 font-suisse">2</div>
            <div className="text-lg md:text-xl text-gray-600 font-suisse">In Progress</div>
          </Card>
          <Card className="p-8 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-red-600 mb-3 font-suisse">2</div>
            <div className="text-lg md:text-xl text-gray-600 font-suisse">Blocked</div>
          </Card>
        </div>

        {/* Milestones List */}
        <div className="max-w-6xl mx-auto space-y-6 mb-12">
          {milestones.map((milestone) => (
            <Card
              key={milestone.id}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-700 font-suisse">{milestone.id}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-brand-navy font-suisse mb-2 leading-tight">
                      {milestone.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 font-suisse mb-3 leading-relaxed">
                      {milestone.activity}
                    </p>
                    {milestone.details && (
                      <p className="text-sm md:text-base text-gray-500 font-suisse italic">{milestone.details}</p>
                    )}
                  </div>
                  <div className="flex-shrink-0">
                    <Badge className={`${milestone.statusColor} text-white flex items-center space-x-2 px-4 py-2`}>
                      {getStatusIcon(milestone.status)}
                      <span className="text-sm md:text-base font-medium font-suisse">{milestone.status}</span>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Risk Alert Card - Simplified and moved here */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardHeader className="pb-4 pt-6">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-white font-suisse">Migration Risk Alert</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-white/90 font-suisse text-lg text-center">
                4 critical milestones are currently at risk, potentially impacting the GoLive timeline
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contingency Planning Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            GoLive Contingency Planning
          </h3>

          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-6">
              <p className="text-gray-700 font-medium mb-6 font-suisse">
                Due to the identified risks, three planning scenarios have been developed to ensure flexibility in our
                approach:
              </p>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
                <ImageModal
                  src="/images/aurora-golive-scenarios.png"
                  alt="Aurora GoLive Planning Scenarios"
                  title="Aurora GoLive Planning Scenarios"
                  description="Three planning scenarios for the Aurora migration: Stick to Plan, Move to 4.28, and Keep 4.28"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-gray-50 border-0 shadow-sm rounded-xl overflow-hidden">
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-lg font-bold text-brand-navy font-suisse">Stick to Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <p className="text-sm text-gray-600 font-suisse">
                      Original timeline with fix and test phases leading to GoLive on July 6th / Backup: July 13th (cw
                      28)
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border-0 shadow-sm rounded-xl overflow-hidden">
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-lg font-bold text-brand-navy font-suisse">Move to 4.28</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <p className="text-sm text-gray-600 font-suisse">
                      Extended fix phase with testing continuing into August, GoLive with version 4.28 in mid-August
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50 border-0 shadow-sm rounded-xl overflow-hidden">
                  <CardHeader className="pb-2 pt-4">
                    <CardTitle className="text-lg font-bold text-brand-navy font-suisse">Keep 4.28</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <p className="text-sm text-gray-600 font-suisse">
                      Continue with version 4.28 for testing but delay GoLive, focusing on fixing critical issues first
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
