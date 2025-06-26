"use client"

import { useState, useEffect, useRef } from "react"
import type { VideoConfig, VideoHookReturn } from "@/lib/types"

export function useVideoBackground(config: VideoConfig): VideoHookReturn {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoLoad = () => {
      setVideoLoaded(true)
      // Force play the video when component mounts
      video.currentTime = 0
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error)
        // Try again after a short delay
        setTimeout(() => {
          video.play().catch(() => {
            console.log("Video play retry failed")
          })
        }, 100)
      })
    }

    const handleVideoError = () => {
      if (video.src === config.src) {
        video.src = config.fallback
      } else {
        setVideoError(true)
      }
    }

    video.addEventListener("loadeddata", handleVideoLoad)
    video.addEventListener("error", handleVideoError)

    // Force reload and play when component mounts
    video.load()

    return () => {
      video.removeEventListener("loadeddata", handleVideoLoad)
      video.removeEventListener("error", handleVideoError)
    }
  }, [config.src, config.fallback])

  // Force video to restart when component becomes visible
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoLoaded) {
            video.currentTime = 0
            video.play().catch((error) => {
              console.log("Video restart failed:", error)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [videoLoaded])

  return { videoLoaded, videoError, videoRef }
}
