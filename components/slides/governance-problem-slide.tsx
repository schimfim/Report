"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, Target, Shield, Eye, TrendingDown, CheckCircle } from "lucide-react"
import { ImageModal } from "@/components/ui/image-modal"

export default function GovernanceProblemSlide() {
  const challenges = [
    {
      title: "Inconsistent Decision-Making",
      description:
        "Each unit operates with its own priorities and processes, leading to misalignment on enterprise-wide objectives",
      icon: <Target className="h-6 w-6 text-red-600" />,
      impact: "High",
      color: "bg-red-50 border-red-200",
    },
    {
      title: "Unclear Accountability",
      description:
        "Responsibilities for governance topics (security, compliance, architecture, data management) are fragmented or duplicated",
      icon: <Users className="h-6 w-6 text-orange-600" />,
      impact: "High",
      color: "bg-orange-50 border-orange-200",
    },
    {
      title: "Lack of Coordination",
      description:
        "No common framework to ensure collaboration, leading to inefficiencies, redundant efforts, and conflicting initiatives",
      icon: <TrendingDown className="h-6 w-6 text-yellow-600" />,
      impact: "Medium",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      title: "Increased Risk Exposure",
      description:
        "Without centralized oversight, risks related to compliance, cybersecurity, and operational continuity are harder to manage",
      icon: <Shield className="h-6 w-6 text-red-700" />,
      impact: "Critical",
      color: "bg-red-100 border-red-300",
    },
    {
      title: "Limited Strategic Visibility",
      description: "The business lacks a clear, integrated view of how IT supports its goals across domains",
      icon: <Eye className="h-6 w-6 text-purple-600" />,
      impact: "High",
      color: "bg-purple-50 border-purple-200",
    },
  ]

  const solutionElements = [
    {
      title: "Shared Policies",
      description: "Common governance policies across all IT domains",
      icon: <Shield className="h-5 w-5 text-brand-blue" />,
    },
    {
      title: "Clear Roles",
      description: "Defined responsibilities and accountability structures",
      icon: <Users className="h-5 w-5 text-brand-green" />,
    },
    {
      title: "Unified Processes",
      description: "Standardized processes for decision-making and coordination",
      icon: <Target className="h-5 w-5 text-brand-navy" />,
    },
    {
      title: "Common Metrics",
      description: "Shared KPIs and measurement frameworks",
      icon: <TrendingDown className="h-5 w-5 text-purple-600" />,
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical":
        return "bg-red-600 text-white"
      case "High":
        return "bg-red-500 text-white"
      case "Medium":
        return "bg-yellow-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-red-600 text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Problem Statement
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 md:mb-8 tracking-tight font-suisse">
            Lack of Unified IT Governance
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Since the restructuring of Corporate IT into three independent units, significant governance challenges have
            emerged
          </p>
        </div>

        {/* Corporate IT Assessment Findings - Now at the top */}
        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white mb-8">
          <CardHeader className="pb-3 pt-6">
            <CardTitle className="text-xl font-bold text-brand-navy font-suisse text-center">
              Corporate IT Assessment Findings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 font-medium mb-4 font-suisse">
              @Marcel has been approached by Corporate IT to assess IT Governance state together. Based on interviews,
              they have summarized:
            </p>
            <ul className="space-y-2 text-gray-600 font-suisse">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <span>
                  Renewing and aligning the RACI might be beneficial to document responsibilities. The RACI from 2023
                  was not published or documented.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <span>
                  Training on relevant topics like KNITE or CloudX is missing. For KNITE, contact personas, real
                  examples, individual cases, and hands-on training are needed.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <span>
                  For CloudX, security processes are slowing down; contacts include Matthew Pearce for CareLOG and
                  Stephan Hassenpflug for CBAir.
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <span>It is advisable to establish a policy on how policies should be implemented and published.</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-brand-navy rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                <span>The PST process is an example of a process that is too complicated and time-consuming.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Motivation for Action */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            Motivation for Action
          </h3>

          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-brand-green to-brand-blue text-white mb-8">
            <CardContent className="p-8 text-center">
              <h4 className="text-xl md:text-2xl font-bold mb-4 font-suisse">Establish Unified IT Governance</h4>
              <p className="text-lg text-white/90 font-suisse leading-relaxed max-w-4xl mx-auto">
                To enable efficiency, alignment and robust risk control, we must establish an agreed-upon IT governance
                across all IT domains
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {solutionElements.map((element, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <CardHeader className="pb-3 pt-6 text-center">
                  <div className="w-12 h-12 mx-auto bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                    {element.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy font-suisse">{element.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-6 text-center">
                  <p className="text-gray-600 font-light font-suisse">{element.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Problem Overview */}
        <div className="mb-12">
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-r from-red-600 to-red-700 text-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold font-suisse text-center flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 mr-3" />
                Current State: Fragmented IT Governance
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-suisse">3 Independent Units</h3>
                  <p className="text-sm text-red-100 font-suisse">
                    Each operating with separate priorities and processes
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-suisse">No Unified Framework</h3>
                  <p className="text-sm text-red-100 font-suisse">Absence of common governance across domains</p>
                </div>

                <div>
                  <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-suisse">Increased Risk</h3>
                  <p className="text-sm text-red-100 font-suisse">Higher exposure to compliance and security risks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Challenges */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            Key Challenges Identified
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className={`${challenge.color} border shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden`}
              >
                <CardHeader className="pb-3 pt-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      {challenge.icon}
                    </div>
                    <Badge className={`${getImpactColor(challenge.impact)} text-xs`}>{challenge.impact}</Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy font-suisse leading-tight">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <p className="text-gray-700 font-light font-suisse leading-relaxed">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* Next Steps Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">Next Steps</h3>

          <Card className="border-0 shadow-md rounded-2xl overflow-hidden bg-white mb-6">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-brand-green" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">
                  Review Current Governance
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-700 font-light font-suisse leading-relaxed mb-4">
                Review the status quo of governance using COBIT management objectives as a communication tool to
                identify gaps and opportunities for alignment.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-bold text-brand-navy font-suisse mb-4 text-center">
                  Governance Topics - Proposal from Corporate IT
                </h4>
                <div className="relative">
                  <ImageModal
                    src="/images/governance-topics-proposal.png"
                    alt="Corporate IT Governance Topics Proposal"
                    title="Governance Topics - Proposal from Corporate IT"
                    description="Color-coded governance topics showing coverage by Global Mandate, IT Forum, BU/IT individual, and areas that need attention"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs py-1 px-3 rounded-full opacity-80">
                    Click to enlarge
                  </div>
                </div>
                <div className="mt-3 text-sm text-gray-500 font-suisse italic text-center">
                  Color-coded governance topics showing coverage by Global Mandate, IT Forum, BU/IT individual, and
                  areas that need attention
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-center">
                <p className="text-yellow-800 font-medium font-suisse text-sm">
                  <AlertTriangle className="h-4 w-4 inline-block mr-2" />
                  Important: COBIT is being used only as a communication tool to check for missing elements. There is no
                  intention to implement COBIT.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
