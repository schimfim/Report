"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LayoutDashboard, Users, Clock, CheckCircle, AlertTriangle, TrendingUp, Building, GitMerge } from "lucide-react"

export default function WebUISlide() {
  // Internal KnowHow progress data
  const internalKnowHowData = [
    { date: "May 2023", percentage: 39 },
    { date: "Jan 2024", percentage: 57 },
    { date: "Mar 2025", percentage: 78 },
    { date: "Jun 2025", percentage: 86 },
    { date: "Dec 2025", percentage: 100 },
  ]

  // Get status color based on percentage
  const getStatusColor = (percentage: number) => {
    if (percentage < 50) return "bg-yellow-500"
    if (percentage < 80) return "bg-blue-500"
    return "bg-green-500"
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-brand-red text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Web UI
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Web UI Migration Status
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Staffing status and migration progress
          </p>
        </div>

        {/* Dialog Migration Status */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            Dialog Migration Status
          </h3>

          <Card className="max-w-5xl mx-auto bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mr-6">
                    <LayoutDashboard className="h-8 w-8 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold font-suisse mb-2">AIR Dialog Migration</h4>
                    <p className="text-gray-600 font-suisse">Progress of migrating dialogs to the new Web UI</p>
                  </div>
                </div>
                <Badge className="bg-brand-blue text-white px-4 py-2 text-lg">40% Complete</Badge>
              </div>

              <div className="space-y-6">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium font-suisse">Migration Progress</span>
                    <span className="text-brand-navy font-bold font-suisse">123/307 Dialogs</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-blue rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4 text-center bg-white border border-gray-100 shadow-sm rounded-xl">
                    <div className="text-2xl md:text-3xl font-bold text-brand-navy mb-1 font-suisse">307</div>
                    <div className="text-sm text-gray-600 font-suisse">Total Dialogs</div>
                  </Card>

                  <Card className="p-4 text-center bg-white border border-gray-100 shadow-sm rounded-xl">
                    <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1 font-suisse">123</div>
                    <div className="text-sm text-gray-600 font-suisse">Dialogs Migrated</div>
                  </Card>

                  <Card className="p-4 text-center bg-white border border-gray-100 shadow-sm rounded-xl">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-1 font-suisse">25</div>
                    <div className="text-sm text-gray-600 font-suisse">In Progress</div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Internal KnowHow Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            Internal KnowHow
          </h3>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-sm rounded-2xl overflow-hidden">
              <CardHeader className="pb-3 pt-6">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-brand-navy/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-brand-navy" />
                  </div>
                  <CardTitle className="text-xl font-bold text-brand-navy font-suisse">Internal Staff Growth</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <div className="space-y-4">
                  {internalKnowHowData.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-700 font-suisse">{item.date}</span>
                        <Badge className={`${getStatusColor(item.percentage)} text-white`}>{item.percentage}%</Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`h-2.5 rounded-full ${getStatusColor(item.percentage)}`}
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Developments Section */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">
            Recent Developments
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* External to Internal Transfers */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <CardHeader className="pb-3 pt-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <GitMerge className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy font-suisse">
                    External to Internal Transfers
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <ul className="space-y-2 text-gray-700 font-suisse">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>12 people to be internalized in 2025</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>5 successfully internalized</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Open: 4 WRO, 1 TLL, 2 OPO</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Location split</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* WebUI */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <CardHeader className="pb-3 pt-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <LayoutDashboard className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy font-suisse">WebUI</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <ul className="space-y-2 text-gray-700 font-suisse">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>18 open positions beginning 2025</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>16 successfully recruited and onboarding started</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Open position: 2 in TLL</span>
                  </li>
                  <li className="flex items-start">
                    <Building className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Location split to support 8 AIR teams</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* POs */}
            <Card className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden">
              <CardHeader className="pb-3 pt-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-brand-navy font-suisse">POs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <ul className="space-y-2 text-gray-700 font-suisse">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>1 position internal transfer in 2024; onboarding ongoing (GSI domain)</span>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>1 open staff requests (evaluating options for replacement in WRO)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-2 font-suisse">89%</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">WebUI Positions Filled</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2 font-suisse">42%</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">External Transfers Complete</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 font-suisse">78%</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">Current Internal KnowHow</div>
          </Card>
          <Card className="p-6 text-center bg-white border-0 shadow-sm rounded-2xl hover:shadow-md transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2 font-suisse">8</div>
            <div className="text-sm md:text-base text-gray-600 font-suisse">AIR Teams Supported</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
