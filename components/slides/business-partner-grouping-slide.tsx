"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Bell, Calendar, Target, Zap, CheckCircle, Clock, AlertCircle, Layers } from "lucide-react"
import { ImageModal } from "@/components/ui/image-modal"

export default function BusinessPartnerGroupingSlide() {
  const developmentItems = [
    {
      title: "Interfaces Development",
      description: "API, MEP, and Snowflake integrations",
      status: "in-progress",
      icon: <Code className="h-6 w-6 text-brand-blue" />,
      details: "Core connectivity components under active development",
    },
    {
      title: "Notification Function",
      description: "Alert and communication system",
      status: "pending",
      icon: <Bell className="h-6 w-6 text-yellow-600" />,
      details: "Awaiting completion of core interfaces",
    },
  ]

  const setupMilestones = [
    {
      title: "DS Implementation Start",
      date: "July 2025",
      description: "Digital Solutions begins using BPG for Global Account setup",
      icon: <Calendar className="h-6 w-6 text-brand-green" />,
      status: "upcoming",
    },
    {
      title: "Complete GA Setup",
      date: "End of 2025",
      description: "All Global Accounts configured in the system",
      icon: <Target className="h-6 w-6 text-brand-navy" />,
      status: "planned",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-progress":
        return <Clock className="h-5 w-5 text-white" />
      case "pending":
        return <AlertCircle className="h-5 w-5 text-white" />
      case "completed":
        return <CheckCircle className="h-5 w-5 text-white" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-progress":
        return "bg-blue-500"
      case "pending":
        return "bg-yellow-500"
      case "completed":
        return "bg-green-500"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-brand-blue text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Master Data Customer Group
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Business Partner Grouping
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            MVP development in final stages with strategic implementation roadmap
          </p>
        </div>

        {/* MVP Development Status */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            MVP Development Status
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {developmentItems.map((item, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full"
              >
                <CardHeader className="pb-3 pt-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">{item.icon}</div>
                    <Badge
                      className={`${getStatusColor(item.status)} text-white flex items-center space-x-2 px-3 py-1`}
                    >
                      {getStatusIcon(item.status)}
                      <span className="text-sm font-medium font-suisse capitalize">
                        {item.status.replace("-", " ")}
                      </span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-navy font-suisse">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-6 flex-1">
                  <p className="text-gray-600 font-medium mb-3 font-suisse">{item.description}</p>
                  <p className="text-gray-500 text-sm font-light font-suisse">{item.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Setup Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            Customer Setup Roadmap
          </h3>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {setupMilestones.map((milestone, index) => (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full"
                >
                  <CardHeader className="pb-4 pt-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center">
                        {milestone.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-brand-navy font-suisse">
                          {milestone.title}
                        </CardTitle>
                        <Badge className="bg-brand-green text-white mt-1">{milestone.date}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 pb-6 flex-1">
                    <p className="text-gray-600 font-light font-suisse">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Data Hierarchy Visualization */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            Data Hierarchy Structure
          </h3>

          <Card className="max-w-6xl mx-auto bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="pb-4 pt-6">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center mr-3">
                  <Layers className="h-6 w-6 text-brand-navy" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">
                  Business Partner Grouping Hierarchy
                </CardTitle>
              </div>
              <p className="text-gray-600 font-suisse text-center">
                Organizational structure showing Group, Division, and Sub-Division levels with associated Customer IDs
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <ImageModal
                  src="/images/data-hierarchy.png"
                  alt="Business Partner Grouping Data Hierarchy Structure"
                  title="Business Partner Grouping Data Hierarchy"
                  description="Organizational structure showing Group, Division, and Sub-Division levels with associated Customer IDs"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Digital Solutions Integration - Moved here from Customer Setup Roadmap section */}
        <div className="mb-12">
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-brand-blue to-brand-navy text-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-6">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-suisse mb-2">Digital Solutions Integration</h4>
                  <p className="text-white/90 font-suisse">
                    DS will use BPG to setup all Global Accounts starting in July
                  </p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-white/95 font-suisse">
                  <strong>Goal:</strong> Setup all Global Accounts (GAs) in 2025 through the new BPG system
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pharma Fast Track */}
        <div className="mb-12">
          <Card className="max-w-5xl mx-auto bg-gradient-to-r from-purple-600 to-purple-800 text-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="pb-4 pt-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="text-center">
                  <CardTitle className="text-3xl font-bold font-suisse mb-2">Pharma Fast Track</CardTitle>
                  <Badge className="bg-white/20 text-white">High Priority Initiative</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-8">
              <div className="text-center mb-6">
                <p className="text-xl text-purple-100 font-suisse leading-relaxed">
                  High interest from Pharma sector (Jon C) as tools need reliable data
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <h5 className="font-bold text-white mb-2 font-suisse">eQMS</h5>
                  <p className="text-purple-100 text-sm font-suisse">Quality Management System</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <h5 className="font-bold text-white mb-2 font-suisse">KN Risk</h5>
                  <p className="text-purple-100 text-sm font-suisse">Risk Assessment Tool</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <h5 className="font-bold text-white mb-2 font-suisse">Pharma Portal</h5>
                  <p className="text-purple-100 text-sm font-suisse">Customer-facing Dashboard</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Live Demo Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">Live Demo</h3>

          <Card className="max-w-6xl mx-auto bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8 text-center">
              <a
                href="https://bpg.int.kn/groups"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-brand-blue text-white rounded-full hover:bg-brand-navy transition-colors font-medium font-suisse"
              >
                Open Live Environment
                <Code className="ml-2 h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
