"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, GitBranch, GitMerge, Target, Link, CheckCircle, Clock } from "lucide-react"
import { ImageModal } from "@/components/ui/image-modal"

export default function FlightLevelProcessSlide() {
  const demandProcessGoals = [
    "Create better transparency on what teams are working",
    "Create better transparency for teams to see where their work pays into",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-10">
          <Badge className="mb-4 bg-brand-green text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Process Management
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Flight-Level Process for Demand Steering
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Establishing end-to-end visibility and governance across business initiatives
          </p>
        </div>

        {/* Flight Level Framework - Moved to the top */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center font-suisse">Flight Level Framework</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full">
              <CardHeader className="pb-3 pt-6 text-center">
                <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Layers className="h-6 w-6 text-brand-navy" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">Flight Level 3</CardTitle>
                <Badge className="bg-brand-navy text-white mx-auto mt-2">Strategic</Badge>
              </CardHeader>
              <CardContent className="pt-0 pb-6 text-center">
                <p className="text-gray-600 font-light font-suisse">
                  Business Initiatives (FL3) - Strategic alignment and coordination
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full">
              <CardHeader className="pb-3 pt-6 text-center">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <GitMerge className="h-6 w-6 text-brand-blue" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-blue font-suisse">Flight Level 2</CardTitle>
                <Badge className="bg-brand-blue text-white mx-auto mt-2">Coordination</Badge>
              </CardHeader>
              <CardContent className="pt-0 pb-6 text-center">
                <p className="text-gray-600 font-light font-suisse">
                  Product Features (FL2) - Coordinating work between teams
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full">
              <CardHeader className="pb-3 pt-6 text-center">
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <GitBranch className="h-6 w-6 text-brand-green" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-green font-suisse">Flight Level 1</CardTitle>
                <Badge className="bg-brand-green text-white mx-auto mt-2">Operational</Badge>
              </CardHeader>
              <CardContent className="pt-0 pb-6 text-center">
                <p className="text-gray-600 font-light font-suisse">
                  User Stories (FL1) - Daily operational work within teams
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Flight Level Approach */}
        <div className="mb-10">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Layers className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">Flight Level Approach</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-700 font-medium mb-4 font-suisse">
                Outlined based on Flight Level approach with two major goals:
              </p>
              <ul className="space-y-3 mb-4">
                {demandProcessGoals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <Target className="h-5 w-5 text-brand-green mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-suisse">{goal}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center text-brand-blue space-x-2 mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-medium font-suisse">JIRA adapted and in practice since some releases</span>
              </div>
              <div className="flex items-center text-gray-600 space-x-2 text-sm">
                <Link className="h-4 w-4" />
                <a
                  href="https://wiki.int.kn/display/MAI/Demand+Process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-suisse text-brand-blue hover:underline"
                >
                  More details about the Demand Process
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ticket Structure and JIRA Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <GitMerge className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">Ticket Structure</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-700 font-medium mb-3 font-suisse">Key elements of our ticket structure:</p>
              <ul className="space-y-2 text-gray-600 font-suisse">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Business Initiatives (FL3) linked to Product Features (FL2)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Product Features (FL2) broken down into User Stories (FL1)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clear traceability from strategic initiatives to operational tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Standardized fields for consistent tracking and reporting</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 rounded-xl p-4">
                <ImageModal
                  src="/images/ticket-structure.png"
                  alt="Flight Level Ticket Structure Diagram"
                  title="Flight Level Ticket Structure"
                  description="Hierarchical structure showing Business Initiatives (FL3), Product Features (FL2), and Features/User Stories (FL1) in JIRA"
                />
              </div>
            </CardContent>
          </Card>

          {/* JIRA Dashboard */}
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GitBranch className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">JIRA Dashboard</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-700 font-medium mb-3 font-suisse">AirLOG Roadmap Dashboard features:</p>
              <ul className="space-y-2 text-gray-600 font-suisse">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Visual timeline of all business initiatives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Progress tracking with color-coded status indicators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Resource allocation and capacity planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dependencies visualization between initiatives</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 rounded-xl p-4">
                <ImageModal
                  src="/images/jira-roadmap.png"
                  alt="AirLOG JIRA Roadmap Dashboard"
                  title="AirLOG JIRA Roadmap Dashboard"
                  description="Current AirLOG Roadmap showing business initiatives with their status (Implementation, Analysis, Open) and planning details"
                />
              </div>
              <div className="flex items-center text-gray-600 space-x-2 text-sm mt-4">
                <Link className="h-4 w-4" />
                <a
                  href="https://jira.int.kn/secure/PortfolioPlanView.jspa?id=642&sid=662&vid=0#plan/backlog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-suisse text-brand-blue hover:underline"
                >
                  View AirLOG Roadmap in JIRA
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
