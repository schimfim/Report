"use client"

import { useState } from "react"
import { SLIDE_STRUCTURE } from "@/lib/constants"
import type { NavigationHook } from "@/lib/types"

export function useNavigation(): NavigationHook {
  const [currentPosition, setCurrentPosition] = useState([0, 0])

  const getCurrentSlideIndex = () => {
    let index = 0
    for (let row = 0; row < currentPosition[0]; row++) {
      index += SLIDE_STRUCTURE[row].length
    }
    index += currentPosition[1]
    return index
  }

  const navigateUp = () => {
    if (currentPosition[0] > 0) {
      const newRow = currentPosition[0] - 1
      const maxCol = SLIDE_STRUCTURE[newRow].length - 1
      const newCol = Math.min(currentPosition[1], maxCol)
      setCurrentPosition([newRow, newCol])
    }
  }

  const navigateDown = () => {
    if (currentPosition[0] < SLIDE_STRUCTURE.length - 1) {
      const newRow = currentPosition[0] + 1
      const maxCol = SLIDE_STRUCTURE[newRow].length - 1
      const newCol = Math.min(currentPosition[1], maxCol)
      setCurrentPosition([newRow, newCol])
    }
  }

  const navigateLeft = () => {
    if (currentPosition[1] > 0) {
      setCurrentPosition([currentPosition[0], currentPosition[1] - 1])
    }
  }

  const navigateRight = () => {
    const maxCol = SLIDE_STRUCTURE[currentPosition[0]].length - 1
    if (currentPosition[1] < maxCol) {
      setCurrentPosition([currentPosition[0], currentPosition[1] + 1])
    } else if (currentPosition[0] < SLIDE_STRUCTURE.length - 1) {
      setCurrentPosition([currentPosition[0] + 1, 0])
    }
  }

  const goToSlide = (row: number, col: number) => {
    if (row < SLIDE_STRUCTURE.length && col < SLIDE_STRUCTURE[row].length) {
      setCurrentPosition([row, col])
    }
  }

  return {
    currentPosition,
    slideStructure: SLIDE_STRUCTURE,
    navigateUp,
    navigateDown,
    navigateLeft,
    navigateRight,
    goToSlide,
    getCurrentSlideIndex,
  }
}
