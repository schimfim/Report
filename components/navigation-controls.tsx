"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "lucide-react"

interface NavigationControlsProps {
  currentPosition: number[]
  slideStructure: number[][]
  navigateUp: () => void
  navigateDown: () => void
  navigateLeft: () => void
  navigateRight: () => void
  goToSlide: (row: number, col: number) => void
}

export function NavigationControls({
  currentPosition,
  slideStructure,
  navigateUp,
  navigateDown,
  navigateLeft,
  navigateRight,
  goToSlide,
}: NavigationControlsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 shadow-lg border border-gray-200 scale-75">
        <Button
          variant="ghost"
          size="sm"
          onClick={navigateUp}
          className="h-6 w-6 p-0 rounded-full hover:bg-gray-100"
          disabled={currentPosition[0] === 0}
        >
          <ArrowUp className="h-3 w-3" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={navigateLeft}
          className="h-6 w-6 p-0 rounded-full hover:bg-gray-100"
          disabled={currentPosition[1] === 0}
        >
          <ArrowLeft className="h-3 w-3" />
        </Button>

        <div className="flex flex-col items-center space-y-0.5">
          {slideStructure.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-0.5">
              {row.map((_, colIndex) => (
                <button
                  key={colIndex}
                  onClick={() => goToSlide(rowIndex, colIndex)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentPosition[0] === rowIndex && currentPosition[1] === colIndex
                      ? "bg-brand-navy scale-125"
                      : "bg-gray-300 hover:bg-brand-blue"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={navigateRight}
          className="h-6 w-6 p-0 rounded-full hover:bg-gray-100"
          disabled={
            currentPosition[0] === slideStructure.length - 1 &&
            currentPosition[1] === slideStructure[currentPosition[0]].length - 1
          }
        >
          <ArrowRight className="h-3 w-3" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={navigateDown}
          className="h-6 w-6 p-0 rounded-full hover:bg-gray-100"
          disabled={currentPosition[0] === slideStructure.length - 1}
        >
          <ArrowDown className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}
