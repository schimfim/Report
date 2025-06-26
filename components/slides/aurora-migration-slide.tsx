"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Server, RefreshCw, CheckCircle, Clock } from "lucide-react"
import { ImageModal } from "@/components/ui/image-modal"

export default function AuroraMigrationSlide() {
  const steps = [
    {
      title: "Data Migration",
      description: "Migrate data from Oracle to Aurora using AWS Database Migration Service (DMS)",
      icon: <Database className="h-6 w-6 text-brand-blue" />,
      status: "completed",
    },
    {
      title: "Infrastructure Setup",
      description: "Configure Aurora clusters, networking, security groups, and monitoring",
      icon: <Server className="h-6 w-6 text-brand-navy" />,
      status: "completed",
    },
    {
      title: "Synchronization",
      description: "Establish ongoing replication between Oracle and Aurora databases",
      icon: <RefreshCw className="h-6 w-6 text-purple-600" />,
      status: "in-progress",
    },
    {
      title: "Testing & Validation",
      description: "Comprehensive testing of application functionality with Aurora",
      icon: <CheckCircle className="h-6 w-6 text-brand-green" />,
      status: "in-progress",
    },
    {
      title: "Cutover Planning",
      description: "Detailed planning for the production switchover with minimal downtime",
      icon: <Clock className="h-6 w-6 text-yellow-600" />,
      status: "upcoming",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500 text-white">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-yellow-500 text-white">In Progress</Badge>
      case "upcoming":
        return <Badge className="bg-blue-500 text-white">Upcoming</Badge>
      default:
        return <Badge className="bg-gray-500 text-white">Planned</Badge>
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-brand-blue text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Database Migration
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Timeline for Aurora Db Migration
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Following best practices from cloud move
          </p>
        </div>

        {/* Timeline Image */}
        <div className="mb-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <ImageModal
              src="/images/aurora-timeline.png"
              alt="Aurora Database Migration Timeline"
              title="Aurora Database Migration Timeline"
              description="Detailed timeline showing the migration phases from Oracle to Aurora database"
            />
          </div>
        </div>

        {/* Key Milestones */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-brand-blue mb-2 font-suisse">Q2 2025</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Testing Phase</div>
            <div className="text-xs text-gray-500 font-suisse mt-1">Parallel Oracle & Aurora</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-red-600 mb-2 font-suisse">July</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Switch Over</div>
            <div className="text-xs text-gray-500 font-suisse mt-1">Critical Migration Point</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-2xl md:text-3xl font-bold text-brand-green mb-2 font-suisse">Aug</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Full Aurora</div>
            <div className="text-xs text-gray-500 font-suisse mt-1">Migration Complete</div>
          </Card>
        </div>

        {/* Migration Workflow Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2 font-suisse">Migration Workflow</h3>
            <p className="text-lg text-gray-600 font-light font-suisse italic">
              Step-by-step approach to ensure a smooth transition from Oracle to Aurora
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="mb-8 border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/6 bg-gray-100 p-6 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                    <div className="w-full md:w-5/6 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <CardTitle className="text-xl font-bold text-brand-navy font-suisse mb-2 md:mb-0">
                          {step.title}
                        </CardTitle>
                        {getStatusBadge(step.status)}
                      </div>
                      <p className="text-gray-600 font-light font-suisse">{step.description}</p>
                    </div>
                  </div>
                </Card>

                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 md:left-[8.3%] bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <ArrowRight className="h-4 w-4 text-brand-blue" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Timeline Progress */}
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse text-center">
                  Migration Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500 mb-1 font-suisse">Start</div>
                    <div className="text-lg font-bold text-brand-navy font-suisse">March 2025</div>
                  </div>

                  <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full relative">
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-brand-blue rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                    <div className="absolute left-[60%] top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-brand-blue rounded-full border-2 border-white"></div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-500 mb-1 font-suisse">Completion</div>
                    <div className="text-lg font-bold text-brand-navy font-suisse">August 2025</div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <Badge className="bg-brand-blue text-white">Current Progress: 60%</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
