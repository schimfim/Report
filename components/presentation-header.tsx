"use client"

import { Home, Menu } from "lucide-react"

interface PresentationHeaderProps {
  goToSlide: (row: number, col: number) => void
}

export function PresentationHeader({ goToSlide }: PresentationHeaderProps) {
  const navLinks = [
    { name: "", position: [0, 0], icon: "home" },
    { name: "", position: [1, 0], icon: "menu" },
  ]

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/customs-ops-logo.png" alt="Customs + Ops TMS" className="h-10 md:h-[52px] w-auto" />
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.name.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    goToSlide(link.position[0], link.position[1])
                  }}
                  className="flex items-center space-x-2 text-brand-navy hover:text-brand-blue transition-colors font-medium cursor-pointer"
                >
                  {link.icon === "home" && <Home className="h-4 w-4" />}
                  {link.icon === "menu" && <Menu className="h-4 w-4" />}
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
