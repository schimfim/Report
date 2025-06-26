"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Rocket,
  Brain,
  Target,
  Wrench,
  MessageSquare,
  Users,
  Vote,
  Zap,
  CheckCircle,
  Lightbulb,
} from "lucide-react"

export default function AIWorkshopSlide() {
  const promptExamples = [
    {
      title: "Login Page",
      prompt: "Create a login page with email and password fields, a login button, and a sign-up link.",
      icon: <MessageSquare className="h-5 w-5 text-purple-600" />,
    },
    {
      title: "Idea Submission Form",
      prompt: "Design a form to submit new ideas with fields for title, description, department, and a submit button.",
      icon: <Lightbulb className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "Voting Interface",
      prompt: "Display submitted ideas in cards with title, description, and a vote button showing total votes.",
      icon: <Vote className="h-5 w-5 text-blue-600" />,
    },
  ]

  const sessionSteps = [
    {
      title: "Kickoff & Demo",
      description: "A quick introduction to V0.dev and how to write prompts.",
      icon: <Rocket className="h-5 w-5 text-white" />,
      color: "bg-purple-600",
    },
    {
      title: "Group Brainstorm",
      description: "Come up with challenges or tools you wish existed at work.",
      icon: <Brain className="h-5 w-5 text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "Voting & Team Formation",
      description: "Select the top ideas and form groups around them.",
      icon: <Vote className="h-5 w-5 text-white" />,
      color: "bg-green-600",
    },
    {
      title: "Prototyping Sprint",
      description: "Write prompts, generate UI, and refine your designs as a team.",
      icon: <Wrench className="h-5 w-5 text-white" />,
      color: "bg-amber-600",
    },
    {
      title: "Team Presentations",
      description: "Share your prototypes, what problem they address, and how AI helped you get there.",
      icon: <Users className="h-5 w-5 text-white" />,
      color: "bg-red-600",
    },
  ]

  const goals = [
    "Understand how AI can support rapid prototyping and innovation",
    "Learn to write clear, useful prompts for V0.dev",
    "Experience how fast a team can move from idea → interface",
    "Leave inspired to use tools like this in your own projects or teams",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-10">
          <Badge className="mb-4 bg-purple-600 text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Workshop Session
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            AI Prototyping Session with V0.dev
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed font-suisse italic">
            Turn your ideas into working user interfaces in minutes — no coding required
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-0 shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mr-8">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-suisse mb-4">You're Here to Build — Fast</h3>
                  <p className="text-white/90 font-suisse text-lg leading-relaxed">
                    In this session, you'll explore how AI can turn your ideas into working user interfaces in minutes —
                    no coding required. We're using V0.dev, a tool that transforms natural language prompts into real UI
                    components.
                  </p>
                  <p className="text-white/90 font-suisse text-lg mt-4">
                    <strong>You don't need to be a developer — just bring your ideas.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We're Doing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden h-full">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">
                  What We're Doing in This Session
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-600 font-suisse mb-4">You'll work in small groups to:</p>
              <ul className="space-y-2 text-gray-700 font-suisse">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Generate real-world ideas you'd like to solve</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Vote on the most promising ones</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Prototype a solution using V0.dev</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Present your prototype to the rest of the group</span>
                </li>
              </ul>
              <p className="text-gray-600 font-suisse mt-4 italic">
                The goal isn't to build a finished product — it's to experience how quickly ideas can become tangible
                with the help of AI.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden h-full">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">
                  Your Goals for This Session
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <p className="text-gray-600 font-suisse mb-4">By the end of this session, you will:</p>
              <ul className="space-y-3 text-gray-700 font-suisse">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      <span className="text-green-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Prompt Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden md:col-span-1">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">Tools We'll Use Today</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <ul className="space-y-3 text-gray-700 font-suisse">
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>V0.dev</strong> – generates front-end UI from plain English
                  </span>
                </li>
                <li className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>A shared space or document for idea capture and voting</span>
                </li>
                <li className="flex items-start">
                  <Brain className="h-5 w-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Your browser + your brain – nothing to install, just explore and build</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden md:col-span-2">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">
                  Prompt Examples to Get You Started
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {promptExamples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      {example.icon}
                      <h4 className="text-sm font-bold text-gray-800 ml-2 font-suisse">{example.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600 font-suisse italic">"{example.prompt}"</p>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="text-sm font-bold text-purple-800 mb-2 font-suisse">Tips:</h4>
                <ul className="space-y-1 text-xs text-purple-700 font-suisse">
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                    <span>Be clear and specific</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                    <span>Describe what the user sees and does</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1 h-1 bg-purple-500 rounded-full mr-2"></div>
                    <span>Use natural, everyday language</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Session Flow */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6 text-center font-suisse">Session Flow</h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gray-200 z-0 hidden md:block">
              <div className="absolute left-0 top-0 bottom-0 bg-purple-600 w-full"></div>
            </div>

            {/* Phase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {sessionSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.color}`}>
                    {step.icon}
                  </div>
                  <Card className="w-full bg-white border-0 shadow-sm rounded-xl overflow-hidden">
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-base font-bold text-center font-suisse">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-4">
                      <p className="text-xs text-gray-600 text-center font-suisse">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Keep in Mind & Call to Action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden">
            <CardHeader className="pb-3 pt-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-navy font-suisse">Keep in Mind</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <ul className="space-y-3 text-gray-700 font-suisse">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>There are no wrong ideas — this is about exploration.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Start simple — even basic prototypes can be powerful.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>AI doesn't replace human creativity — it amplifies it.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-brand-navy to-brand-blue text-white border-0 shadow-lg rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-suisse mb-4">Let's See What You Can Create</h3>
              <p className="text-white/90 font-suisse leading-relaxed mb-6">
                This session is your chance to experience what it feels like to move from idea to interface in under an
                hour. Whether you build something simple or ambitious, you're learning how to work with AI — not around
                it.
              </p>
              <div className="flex items-center">
                <Button className="bg-white text-brand-navy hover:bg-white/90 rounded-full px-6 py-2 font-suisse">
                  Let's get started
                  <Zap className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
