"use client"

import { useEffect } from "react"

interface UseKeyboardNavigationProps {
  isAuthenticated: boolean
  navigateUp: () => void
  navigateDown: () => void
  navigateLeft: () => void
  navigateRight: () => void
}

export function useKeyboardNavigation({
  isAuthenticated,
  navigateUp,
  navigateDown,
  navigateLeft,
  navigateRight,
}: UseKeyboardNavigationProps) {
  useEffect(() => {
    if (!isAuthenticated) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          e.preventDefault()
          navigateUp()
          break
        case "ArrowDown":
          e.preventDefault()
          navigateDown()
          break
        case "ArrowLeft":
          e.preventDefault()
          navigateLeft()
          break
        case "ArrowRight":
        case " ": // Spacebar
          e.preventDefault()
          navigateRight()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isAuthenticated, navigateUp, navigateDown, navigateLeft, navigateRight])
}
