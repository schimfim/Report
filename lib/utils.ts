import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { STATUS_CONFIG } from "./constants"
import type { StatusType, StatusItem } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getStatusIcon(status: string) {
  switch (status) {
    case "completed":
      return "CheckCircle"
    case "in-progress":
      return "Clock"
    case "critical":
    case "blocked":
      return "AlertTriangle"
    case "pending":
      return "AlertCircle"
    case "upcoming":
      return "Calendar"
    default:
      return "Circle"
  }
}

export function getStatusColor(status: string) {
  const statusKey = status as StatusType
  return STATUS_CONFIG[statusKey]?.color || STATUS_CONFIG.pending.color
}

export function getStatusTextColor(status: string) {
  const statusKey = status as StatusType
  return STATUS_CONFIG[statusKey]?.textColor || STATUS_CONFIG.pending.textColor
}

export function getStatusBgColor(status: string) {
  const statusKey = status as StatusType
  return STATUS_CONFIG[statusKey]?.bgColor || STATUS_CONFIG.pending.bgColor
}

export function formatTime(time: number): string {
  const minutes = Math.floor(time / 60000)
  const seconds = Math.floor((time % 60000) / 1000)
  const milliseconds = Math.floor((time % 1000) / 10)
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`
}

export function calculateProgress(items: StatusItem[]): number {
  if (items.length === 0) return 0
  const completed = items.filter((item) => item.status === "completed").length
  return Math.round((completed / items.length) * 100)
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}
