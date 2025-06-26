"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

interface HeroSlideProps {
  goToSlide: (row: number, col: number) => void
}

export default function HeroSlide({ goToSlide }: HeroSlideProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-brand-navy mb-6 md:mb-8 tracking-tight leading-none font-suisse">
          GA-I Leadership Workshop II
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 mb-8 md:mb-12 font-light leading-relaxed max-w-3xl mx-auto font-suisse">
          Belgrade Jun 17th - 19th 2025
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-brand-navy hover:bg-brand-blue text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full transition-all duration-200 font-suisse"
            onClick={() => goToSlide(1, 0)}
          >
            View Agenda
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full transition-all duration-200 font-suisse"
            onClick={() => goToSlide(9, 0)}
          >
            AI Prototyping Sprint
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
