"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent")
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/98 backdrop-blur-md border-t border-[#d4af37]/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-300 leading-relaxed">
              Koristimo kolačiće kako bismo poboljšali vaše korisničko iskustvo i pružili personalizirani sadržaj.
              Nastavljajući koristiti našu platformu, pristajete na upotrebu kolačića sukladno našoj politici.{" "}
              <Link
                href="/cookie-politika"
                className="text-[#d4af37] hover:text-[#f4d03f] underline font-medium transition-colors"
              >
                Saznajte više
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              onClick={declineCookies}
              variant="outline"
              size="sm"
              className="h-9 px-4 text-sm border-[#d4af37]/30 text-gray-300 hover:bg-[#d4af37]/10 hover:text-white hover:border-[#d4af37]/50 bg-transparent transition-colors"
            >
              Odbij
            </Button>
            <Button
              onClick={acceptCookies}
              size="sm"
              className="h-9 px-5 text-sm bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#d4af37] text-[#0a0a0a] font-semibold transition-all shadow-lg shadow-[#d4af37]/20"
            >
              Prihvati sve
            </Button>
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 text-gray-400 hover:text-white hover:bg-[#d4af37]/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
