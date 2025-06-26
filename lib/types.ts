import type React from "react"
export interface SlidePosition {
  row: number
  col: number
}

export interface VideoConfig {
  src: string
  fallback: string
}

export interface AgendaItem {
  title: string
  description: string
  icon: string
  position: readonly [number, number]
  presenter: string
  isSpecial?: boolean
}

export interface NavigationHook {
  currentPosition: number[]
  slideStructure: readonly (readonly number[])[]
  navigateUp: () => void
  navigateDown: () => void
  navigateLeft: () => void
  navigateRight: () => void
  goToSlide: (row: number, col: number) => void
  getCurrentSlideIndex: () => number
}

export interface VideoHookReturn {
  videoLoaded: boolean
  videoError: boolean
  videoRef: React.RefObject<HTMLVideoElement>
}

export interface StatusItem {
  status: string
  [key: string]: any
}
