"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, RefreshCw, Database, AlertTriangle, CheckCircle, CheckSquare } from "lucide-react"
import { ImageModal } from "@/components/ui/image-modal"

export default function GoLiveSlide() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-4 bg-brand-navy text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Aurora Migration
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            GoLive Approach and Risk Mitigation
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Following best practices from cloud move
          </p>
        </div>

        {/* Phase Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto mb-12">
          {/* Hardening */}
          <Card className="bg-gray-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white font-suisse">Hardening</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-sm text-gray-200 font-light mb-3 font-suisse">
                Set up Aurora production system and test safety net
              </p>
              <ul className="space-y-1 text-xs text-gray-200 font-suisse">
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Load and performance testing</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Fail over and recovery testing</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Switch over and fallback testing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Synchronize */}
          <Card className="bg-brand-navy text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <RefreshCw className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white font-suisse">Synchronize</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-sm text-gray-200 font-light mb-3 font-suisse">
                Aurora DB on production shadowing Oracle production
              </p>
              <ul className="space-y-1 text-xs text-gray-200 font-suisse">
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Aurora database synchronized with Oracle prod DB</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Schema changes applied on both sides</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Data backup and cloning activated</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Switch over */}
          <Card className="bg-blue-500 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Database className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white font-suisse">Switch over</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-sm text-gray-100 font-light mb-3 font-suisse">
                Re-start servers with Aurora configuration
              </p>
              <ul className="space-y-1 text-xs text-gray-100 font-suisse">
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Simple centrally controlled solution</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>One version compatible with both Oracle and Aurora</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Short downtime (comparable to initial cloud move)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Hyper care */}
          <Card className="bg-red-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white font-suisse">Hyper care</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-sm text-gray-100 font-light mb-3 font-suisse">Option to fall back to Oracle</p>
              <ul className="space-y-1 text-xs text-gray-100 font-suisse">
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Reverse sync of Aurora DB to Oracle</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Switch over solution can be applied to fall back</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Running with resource buffer and no scaling</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Normal operations */}
          <Card className="bg-green-600 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-2 pt-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <CardTitle className="text-lg font-bold text-white font-suisse">Normal operations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-4">
              <p className="text-sm text-gray-100 font-light mb-3 font-suisse">
                Full Aurora operations, Oracle shut down
              </p>
              <ul className="space-y-1 text-xs text-gray-100 font-suisse">
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Fail-over and disaster recovery in place</span>
                </li>
                <li className="flex items-start">
                  <CheckSquare className="h-3 w-3 text-green-400 mr-1 flex-shrink-0 mt-0.5" />
                  <span>Apply scaling mechanisms for efficient resource utilization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Switch-over Process */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-2 font-suisse">
              Detailed Switch-over Process
            </h3>
            <p className="text-lg text-gray-600 font-light font-suisse italic">Without deployment of new version</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <ImageModal
              src="/images/switchover-process.png"
              alt="Detailed Switch-over Process"
              title="Detailed Switch-over Process"
              description="Step-by-step process for switching from Oracle to Aurora database without deploying a new version"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
