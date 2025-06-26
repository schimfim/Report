"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Users, MessageSquare } from "lucide-react"

export default function CTASlide() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-blue to-brand-green px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-white text-brand-navy rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Next Steps
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight font-suisse">
            Join Us on This Journey
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed font-suisse">
            We're committed to delivering a seamless migration experience. Here's how you can stay involved and
            informed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-suisse">Upcoming Milestones</h3>
              <p className="text-white/80 font-light mb-6 font-suisse">
                Stay updated with our migration timeline and key milestones
              </p>
              <Button className="bg-white text-brand-navy hover:bg-white/90 rounded-full font-suisse">
                View Calendar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-suisse">Training Sessions</h3>
              <p className="text-white/80 font-light mb-6 font-suisse">
                Register for upcoming training sessions on Aurora database features
              </p>
              <Button className="bg-white text-brand-navy hover:bg-white/90 rounded-full font-suisse">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-suisse">Feedback Channel</h3>
              <p className="text-white/80 font-light mb-6 font-suisse">
                Share your thoughts and concerns about the migration process
              </p>
              <Button className="bg-white text-brand-navy hover:bg-white/90 rounded-full font-suisse">
                Provide Feedback
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4 font-suisse">Have Questions?</h3>
          <p className="text-white/80 font-light mb-8 font-suisse">
            Our dedicated team is here to support you throughout this transition
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-md rounded-xl p-4">
              <div className="text-white font-suisse">
                <div className="text-sm font-light mb-1">Technical Support</div>
                <div className="font-medium">tech-support@example.com</div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-0 shadow-md rounded-xl p-4">
              <div className="text-white font-suisse">
                <div className="text-sm font-light mb-1">Project Management</div>
                <div className="font-medium">aurora-migration@example.com</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
