"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { getStatusColor, getStatusTextColor, getStatusBgColor, getStatusIcon } from "@/lib/utils"
import * as Icons from "lucide-react"

interface StatusBadgeProps {
  status: string
  showIcon?: boolean
  variant?: "default" | "outline"
  className?: string
}

export function StatusBadge({ status, showIcon = true, variant = "default", className = "" }: StatusBadgeProps) {
  const IconComponent = Icons[getStatusIcon(status) as keyof typeof Icons] as React.ComponentType<{
    className?: string
  }>

  if (variant === "outline") {
    return (
      <Badge className={`${getStatusTextColor(status)} ${getStatusBgColor(status)} ${className}`}>
        {showIcon && IconComponent && <IconComponent className="h-4 w-4 mr-1" />}
        <span className="capitalize">{status.replace("-", " ")}</span>
      </Badge>
    )
  }

  return (
    <Badge className={`${getStatusColor(status)} text-white flex items-center space-x-2 ${className}`}>
      {showIcon && IconComponent && <IconComponent className="h-4 w-4" />}
      <span className="capitalize">{status.replace("-", " ")}</span>
    </Badge>
  )
}
