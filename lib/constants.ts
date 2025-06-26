// Slide structure configuration
export const SLIDE_STRUCTURE = [
  [0], // Row 0: Hero (single slide)
  [1], // Row 1: Agenda (single slide)
  [2, 3, 4, 5, 6, 7, 8], // Row 2: AirLOG Title, AirLOG Cloud, AirLOG Results, AirLOG Detailed, Aurora Migration, GoLive, Aurora Status
  [9, 10], // Row 3: Flight-Level Title, Flight-Level Process
  [11, 12], // Row 4: Web UI Title, Web UI
  [13, 14], // Row 5: Master Data Title, Business Partner Grouping
  [15, 16], // Row 6: Trucking Title, Trucking Goals
  [17, 18], // Row 7: ATLAS Title, ATLAS Roadmap
  [19, 20], // Row 8: Governance Title, Governance Problem Statement
  [21, 22], // Row 9: AI Rapid Prototyping Title, AI Workshop
] as const

// Video configuration
export const VIDEO_CONFIG = {
  cloud: {
    src: "/videos/cloud.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cloud-dgp3MLfSPBX6F4MYxEcv4bF9V9d4ZX.mp4",
  },
  levels: {
    src: "/videos/levels.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Levels-jZeVMjlgQy9OG0nJCle4v9arbdIw22.mp4",
  },
  webui: {
    src: "/videos/webui.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WebUI-wFiAzSvUWz7LtMRiBfZ2M9Ta3xSPI7.mp4",
  },
  groups: {
    src: "/videos/groups.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Groups-0J6BGxbelU2ONQh71H6jfwJM8fYvys.mp4",
  },
  trucking: {
    src: "/videos/trucking.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Trucking-oA8DVB2ebMdnhf2HUIBqX6xqxjDGnH.mp4",
  },
  atlas: {
    src: "/videos/atlas.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ATLAS-znT41ERUFCe2VHmWYcG0Ys6Foep0nx.mp4",
  },
  cops: {
    src: "/videos/cops.mp4",
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cops-xX3HWpHMrUPAbAzIHdhaQkSnJoekZ5.mp4",
  },
  ai: {
    src: "/videos/ai.mp4", // Updated to use the new AI video
    fallback: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-l7tHLbF0mKl03dxYrfIZSsRDVq6X9k.mp4",
  },
} as const

// Agenda items configuration
export const AGENDA_ITEMS = [
  {
    title: "AirLOG in the Cloud",
    description: "Performance overview and optimization roadmap",
    icon: "Cloud",
    position: [2, 0] as const,
    presenter: "Igor",
  },
  {
    title: "Flight-Level Process for Demand Steering",
    description: "Establishing end-to-end visibility and governance across business initiatives",
    icon: "Target",
    position: [3, 0] as const,
    presenter: "Kathrin",
  },
  {
    title: "Web UI",
    description: "Staffing status and migration progress",
    icon: "LayoutDashboard",
    position: [4, 0] as const,
    presenter: "Kathrin",
  },
  {
    title: "Master Data Customer Groups",
    description: "Current status, improvements, and a short live demo",
    icon: "Users",
    position: [5, 0] as const,
    presenter: "Lutz",
  },
  {
    title: "Trucking",
    description: "Operational status and recent developments",
    icon: "Truck",
    position: [6, 0] as const,
    presenter: "Lutz",
  },
  {
    title: "ATLAS Roadmap",
    description: "Global rollout schedule and key milestones for 2025",
    icon: "Map",
    position: [7, 0] as const,
    presenter: "Lutz",
  },
  {
    title: "IT Governance",
    description: "Challenges and solutions for post-split IT governance",
    icon: "Shield",
    position: [8, 0] as const,
    presenter: "Igor",
    isHighlighted: true,
  },
  {
    title: "AI Rapid Prototyping Sprint",
    description: "Accelerating innovation through AI-powered solution development",
    icon: "Sparkles",
    position: [9, 0] as const,
    presenter: "Igor",
  },
] as const

// Status configurations
export const STATUS_CONFIG = {
  completed: {
    color: "bg-green-500",
    textColor: "text-green-800",
    bgColor: "bg-green-100",
  },
  "in-progress": {
    color: "bg-yellow-500",
    textColor: "text-yellow-800",
    bgColor: "bg-yellow-100",
  },
  critical: {
    color: "bg-red-500",
    textColor: "text-red-800",
    bgColor: "bg-red-100",
  },
  blocked: {
    color: "bg-red-500",
    textColor: "text-red-800",
    bgColor: "bg-red-100",
  },
  pending: {
    color: "bg-yellow-500",
    textColor: "text-yellow-800",
    bgColor: "bg-yellow-100",
  },
  upcoming: {
    color: "bg-blue-500",
    textColor: "text-blue-800",
    bgColor: "bg-blue-100",
  },
  "to-do": {
    color: "bg-gray-300",
    textColor: "text-gray-800",
    bgColor: "bg-gray-100",
  },
} as const

export type StatusType = keyof typeof STATUS_CONFIG
