"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Eye, EyeOff, ArrowRight } from "lucide-react"

interface LoginScreenProps {
  password: string
  setPassword: (password: string) => void
  showPassword: boolean
  setShowPassword: (show: boolean) => void
  loginError: string
  isLoading: boolean
  handleLogin: (e: React.FormEvent) => void
}

export function LoginScreen({
  password,
  setPassword,
  showPassword,
  setShowPassword,
  loginError,
  isLoading,
  handleLogin,
}: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-navy via-brand-blue to-brand-green flex items-center justify-center px-4 font-suisse">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-3xl overflow-hidden">
        <CardHeader className="text-center pt-8 pb-6">
          <div className="mx-auto w-16 h-16 bg-brand-navy/10 rounded-2xl flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-brand-navy" />
          </div>
          <CardTitle className="text-2xl font-bold text-brand-navy mb-2 font-suisse">Access Required</CardTitle>
          <CardDescription className="text-gray-600 font-light font-suisse">
            Please enter the password to access the GA-I Leadership Workshop presentation
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700 font-suisse">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="pr-10 border-gray-200 focus:border-brand-blue focus:ring-brand-blue rounded-xl font-suisse"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="text-red-600 text-sm font-medium bg-red-50 p-3 rounded-lg font-suisse">{loginError}</div>
            )}

            <Button
              type="submit"
              className="w-full bg-brand-navy hover:bg-brand-blue text-white py-3 rounded-xl font-medium transition-all duration-200 font-suisse"
              disabled={isLoading || !password}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                  Verifying...
                </div>
              ) : (
                <>
                  Access Presentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          {/* QR Code Section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-700 mb-4 font-suisse">Quick Access via QR Code</p>
              <div className="flex justify-center mb-3">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://gai-leadership-workshop.vercel.app/"
                  alt="QR Code for Application Access"
                  className="w-30 h-30 border border-gray-200 rounded-lg"
                />
              </div>
              <p className="text-xs text-gray-500 font-suisse">Scan to access the presentation</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 font-light font-suisse">Belgrade Jun 17th - 19th 2025</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
