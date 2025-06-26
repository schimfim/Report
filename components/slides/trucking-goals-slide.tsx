"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Building, Target, Settings, FileText, TrendingUp, Truck, BarChart3 } from "lucide-react"

export default function TruckingGoalsSlide() {
  const goals = [
    {
      id: 1,
      title: "Organizational Clarity & Structure",
      icon: <Users className="h-6 w-6 text-white" />,
      color: "bg-brand-navy",
      subGoals: [
        {
          description: "Job Descriptions shared/confirmed by 1 major and 8 smaller countries",
          owner: "Yvonne Heizereder",
        },
        {
          description: "Operational Model shared/confirmed by 2 major and 8 smaller countries",
          owner: "Yvonne Heizereder",
        },
        {
          description: "KPIs defined and prepared for BI Team integration",
          owner: "Yvonne Heizereder",
        },
        {
          description: "Clear role definition between Trucking Team and related teams (OCC, RCC, Gateway, Warehouse)",
          owner: "Yvonne Heizereder",
        },
        {
          description: "Clear definition of services expected from trucking team",
          owner: "Yvonne Heizereder",
        },
      ],
    },
    {
      id: 2,
      title: "WiA Implementation & Expansion",
      icon: <Settings className="h-6 w-6 text-white" />,
      color: "bg-brand-blue",
      subGoals: [
        {
          description: "WiA concept expanded in Germany and US for door pickups/deliveries",
          owner: "Manuel Erb",
        },
        {
          description: "Implementation checklist used and feedback gathered for optimization",
          owner: "Manuel Erb",
        },
        {
          description: "WiA Online Course validated by test users from Germany, UK, and US",
          owner: "Manuel Erb",
        },
        {
          description: "PO-Team setup time reduced to 1 day using new templates",
          owner: "Manuel Erb",
        },
        {
          description: "German Trucking Team manages door pickups for two additional stations",
          owner: "Manuel Erb",
        },
        {
          description: "NYC ZA-O confirms go-live date for ATL pilot implementation",
          owner: "Manuel Erb",
        },
      ],
    },
    {
      id: 3,
      title: "Cost Optimization & Procurement",
      icon: <BarChart3 className="h-6 w-6 text-white" />,
      color: "bg-brand-green",
      subGoals: [
        {
          description: "Foundation for cost reduction in US & Germany established",
          owner: "Michael Giudice",
        },
        {
          description: "Dashboard prototype for procurement opportunities tested in DE & US",
          owner: "Michael Giudice",
        },
        {
          description: "RFQs for Airport Transfers launched and evaluated for 3 US Gateways",
          owner: "Kosta Venetsanos",
        },
        {
          description: "RFQ for linehaul transports in Germany prepared",
          owner: "Kosta Venetsanos",
        },
      ],
    },
    {
      id: 4,
      title: "Data-Driven Planning & Decision Making",
      icon: <FileText className="h-6 w-6 text-white" />,
      color: "bg-purple-600",
      subGoals: [
        {
          description: "Feedback collected from 5 trucking operators on time-related planning attributes",
          owner: "Jost Bluhm",
        },
        {
          description: "Feedback from 5 trucking operators on operational data transparency needs",
          owner: "Jost Bluhm",
        },
        {
          description: "Input from 15 OCC/CCL operators on transparency and coordination improvements",
          owner: "Alex Austin",
        },
        {
          description: "Revised WiA-AirLOG integration providing enhanced operational data",
          owner: "Manuel Erb",
        },
        {
          description: "IT landscape review for EDI integration and data capabilities assessment",
          owner: "Manuel Erb",
        },
      ],
    },
    {
      id: 5,
      title: "Strategic Planning & Accounting",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: "bg-orange-600",
      subGoals: [
        {
          description: "Management decision on future trucking accounting processes",
          owner: "Lutz Schliffke",
        },
        {
          description: "High-level operating concept including Cost Distribution and Profit Centers",
          owner: "Yvonne Heizereder",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-10">
          <Badge className="mb-4 bg-brand-navy text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Trucking Goals & Objectives
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Trucking Goals
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Working groups and meassures to establish clarity in trucking team organization and operations
          </p>
        </div>

        {/* Key Focus Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-brand-navy to-brand-blue text-white border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-suisse mb-2">Organizational Focus</h3>
              <p className="text-sm text-white/90 font-suisse">
                Establishing clear structures, roles, and operational models across multiple countries
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-brand-green to-green-600 text-white border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-suisse mb-2">Operational Excellence</h3>
              <p className="text-sm text-white/90 font-suisse">
                Expanding WiA implementation and optimizing door pickup/delivery processes
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-600 to-purple-700 text-white border-0 shadow-md rounded-xl overflow-hidden">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-suisse mb-2">Data-Driven Decisions</h3>
              <p className="text-sm text-white/90 font-suisse">
                Leveraging operational data and feedback for improved planning and transparency
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden"
            >
              <CardHeader className="pb-3 pt-5">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-10 h-10 ${goal.color} rounded-lg flex items-center justify-center`}>
                    {goal.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy font-suisse">{goal.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-5">
                <div className="space-y-3">
                  {goal.subGoals.map((subGoal, subGoalIndex) => (
                    <div key={subGoalIndex} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-start space-x-2 flex-1">
                          <p className="text-sm text-gray-700 font-suisse leading-relaxed">{subGoal.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Building className="h-3 w-3" />
                        <span className="font-suisse">{subGoal.owner}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
