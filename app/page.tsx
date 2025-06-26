"use client"

import type React from "react"
import { useState } from "react"
import { LoginScreen } from "@/components/login-screen"
import { PresentationHeader } from "@/components/presentation-header"
import { NavigationControls } from "@/components/navigation-controls"
import { SlideRenderer } from "@/components/slide-renderer"
import { useNavigation } from "@/hooks/use-navigation"
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation"

export default function PresentationPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const {
    currentPosition,
    slideStructure,
    navigateUp,
    navigateDown,
    navigateLeft,
    navigateRight,
    goToSlide,
    getCurrentSlideIndex,
  } = useNavigation()

  useKeyboardNavigation({
    isAuthenticated,
    navigateUp,
    navigateDown,
    navigateLeft,
    navigateRight,
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setLoginError("")

    await new Promise((resolve) => setTimeout(resolve, 800))

    if (password === "Belgrade2025!") {
      setIsAuthenticated(true)
    } else {
      setLoginError("Incorrect password. Please try again.")
    }
    setIsLoading(false)
  }

  if (!isAuthenticated) {
    return (
      <LoginScreen
        password={password}
        setPassword={setPassword}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        loginError={loginError}
        isLoading={isLoading}
        handleLogin={handleLogin}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white font-suisse overflow-hidden">
      <PresentationHeader goToSlide={goToSlide} />

      <div className="pt-16 md:pt-20">
        <div className="relative">
          <SlideRenderer currentSlideIndex={getCurrentSlideIndex()} goToSlide={goToSlide} />
        </div>
      </div>

      <NavigationControls
        currentPosition={currentPosition}
        slideStructure={slideStructure}
        navigateUp={navigateUp}
        navigateDown={navigateDown}
        navigateLeft={navigateLeft}
        navigateRight={navigateRight}
        goToSlide={goToSlide}
      />
    </div>
  )
}
