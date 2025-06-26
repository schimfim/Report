"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { AGENDA_ITEMS } from "@/lib/constants"
import * as Icons from "lucide-react"

interface AgendaSlideProps {
  goToSlide: (row: number, col: number) => void
}

export default function AgendaSlide({ goToSlide }: AgendaSlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-brand-navy text-white rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium font-suisse">
            Presentation Agenda
          </Badge>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-4 md:mb-6 tracking-tight font-suisse">
            Today's Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed font-suisse">
            Explore the key topics we'll cover in this presentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {AGENDA_ITEMS.map((item, index) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>

            return (
              <Card
                key={index}
                className={`${
                  item.isHighlighted
                    ? "bg-gradient-to-br from-red-600 to-red-700 text-white border-0 shadow-lg hover:shadow-xl"
                    : "bg-white border-0 shadow-sm hover:shadow-lg"
                } transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer group relative`}
                onClick={() => goToSlide(item.position[0], item.position[1])}
              >
                <CardHeader className={`pb-2 ${item.isHighlighted ? "pt-8" : "pt-6"}`}>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`${
                        item.isHighlighted
                          ? "w-12 h-12 bg-white/20 backdrop-blur-sm"
                          : "w-12 h-12 bg-gray-50 group-hover:bg-brand-navy/5"
                      } rounded-xl flex items-center justify-center transition-colors`}
                    >
                      {IconComponent && (
                        <IconComponent
                          className={`${item.isHighlighted ? "h-6 w-6" : "h-6 w-6"} ${
                            item.icon === "Shield" && item.isHighlighted
                              ? "text-white"
                              : item.isHighlighted
                                ? "text-white"
                                : "text-brand-blue"
                          }`}
                        />
                      )}
                    </div>
                    <CardTitle
                      className={`${
                        item.isHighlighted
                          ? "text-xl font-bold text-white"
                          : "text-xl font-semibold text-brand-navy group-hover:text-brand-blue"
                      } transition-colors font-suisse`}
                    >
                      {item.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className={`${item.isHighlighted ? "pb-8" : "pb-4"}`}>
                  <p
                    className={`${
                      item.isHighlighted ? "text-white/90 text-base" : "text-gray-600"
                    } font-light font-suisse mb-4`}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex items-center ${
                        item.isHighlighted ? "text-white" : "text-brand-blue"
                      } text-sm font-medium`}
                    >
                      <span>View section</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div
                      className={`text-xs font-medium px-2 py-1 rounded-full font-suisse ${
                        item.isHighlighted ? "text-red-100 bg-white/20" : "text-gray-500 bg-gray-100"
                      }`}
                    >
                      @{item.presenter}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Button
            onClick={() => goToSlide(2, 0)}
            className="bg-brand-navy hover:bg-brand-blue text-white px-6 py-2 rounded-full transition-all duration-200 font-suisse"
          >
            Begin Presentation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
