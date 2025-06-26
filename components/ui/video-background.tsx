"use client"

import type React from "react"

import { useVideoBackground } from "@/hooks/use-video-background"
import type { VideoConfig } from "@/lib/types"

interface VideoBackgroundProps {
  config: VideoConfig
  fallbackGradient: string
  children: React.ReactNode
}

export function VideoBackground({ config, fallbackGradient, children }: VideoBackgroundProps) {
  const { videoLoaded, videoError, videoRef } = useVideoBackground(config)

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
          key={`video-${Date.now()}`}
        >
          <source src={config.src} type="video/mp4" />
          <source src={config.fallback} type="video/mp4" />
        </video>
      )}

      {/* Fallback background */}
      {(videoError || !videoLoaded) && <div className={`absolute inset-0 ${fallbackGradient} z-0`} />}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full text-center px-4 md:px-6">{children}</div>

      {/* Debug info */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          Video Status: {videoError ? "Error - Using Fallback" : videoLoaded ? "Loaded & Playing" : "Loading..."}
        </div>
      )}
    </div>
  )
}
