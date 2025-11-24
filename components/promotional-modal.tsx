"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { X, Star } from "lucide-react"
import { topCasino } from "@/lib/casinos"

export default function PromotionalModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-md w-full">
        <Link href={topCasino.url} target="_blank" rel="noopener noreferrer">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-[#d4af37] rounded-lg overflow-hidden shadow-2xl shadow-[#d4af37]/30 transform transition-all hover:scale-105">
            <div className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] p-4 text-center">
              <h2 className="text-xl font-bold text-[#0a0a0a]">EKSKLUZIVNA PONUDA</h2>
              <p className="text-sm text-[#0a0a0a] font-semibold">Najpopularnije Casino u Hrvatskoj</p>
            </div>

            <div className="p-6 text-center space-y-4">
              <div className="flex justify-center bg-[#0a0a0a] p-4 rounded-lg border border-[#d4af37]/30">
                <Image
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={topCasino.name}
                  width={220}
                  height={180}
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= topCasino.rating ? "fill-[#d4af37] text-[#d4af37]" : "fill-gray-600 text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">{topCasino.rating}/5</span>
                <span className="text-gray-400 text-sm">({topCasino.votes.toLocaleString()} recenzija)</span>
              </div>

              <div className="mb-8 mt-8">
                <p className="text-sm text-gray-400 mb-1">Bonus dobrodošlice</p>
                <p className="text-2xl font-bold text-white">{topCasino.bonus}</p>
              </div>

              <div className="pt-4">
                <div className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#d4af37] text-[#0a0a0a] font-bold py-3 px-8 rounded-lg text-lg transition-all shadow-lg shadow-[#d4af37]/30">
                  Igraj Odmah →
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">{topCasino.terms}</p>
            </div>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-2 -right-2 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#d4af37] text-[#0a0a0a] rounded-full p-2 transition-all shadow-lg"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
