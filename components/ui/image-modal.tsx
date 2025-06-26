"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { X, ZoomIn } from "lucide-react"

interface ImageModalProps {
  src: string
  alt: string
  title?: string
  description?: string
  triggerClassName?: string
  showIndicator?: boolean
}

export function ImageModal({ src, alt, title, description, triggerClassName, showIndicator = true }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative inline-block group">
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className={`cursor-pointer hover:opacity-90 transition-opacity ${triggerClassName || ""}`}
          />
          {showIndicator && (
            <div className="absolute bottom-3 right-3 bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="h-4 w-4" />
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-1 md:p-2 overflow-hidden bg-white">
        <div className="relative w-full h-full">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1 hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>

          {title && (
            <DialogHeader className="px-4 py-2">
              <DialogTitle className="text-xl font-bold text-brand-navy font-suisse">{title}</DialogTitle>
              {description && (
                <DialogDescription className="text-gray-600 font-suisse">{description}</DialogDescription>
              )}
            </DialogHeader>
          )}

          <div className="overflow-auto max-h-[calc(90vh-6rem)] p-4">
            <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-auto object-contain" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
