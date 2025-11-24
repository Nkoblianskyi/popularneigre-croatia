import Link from "next/link"
import { Star, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Casino } from "@/lib/casinos"
import Image from "next/image"

interface CasinoCardProps {
  casino: Casino
  isTopChoice?: boolean
  rank?: number
}

function StarRating({ rating }: { rating: number }) {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    const fillPercentage = Math.min(Math.max(((rating - (i - 1)) / 0.2) * 20, 0), 100)
    stars.push(
      <div key={i} className="relative">
        <Star className="h-3 w-3 md:h-4 md:w-4 text-gray-600" />
        <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
          <Star className="h-3 w-3 md:h-4 md:w-4 fill-[#d4af37] text-[#d4af37]" />
        </div>
      </div>,
    )
  }
  return <div className="flex gap-0.5 text-center">{stars}</div>
}

export function CasinoCard({ casino, isTopChoice = false, rank }: CasinoCardProps) {
  const getBadgeText = (rank?: number) => {
    if (rank === 1) return "TOP IZBOR"
    if (rank === 2) return "POPULARNO"
    if (rank === 3) return "PREMIUM"
    return ""
  }

  const showBadge = rank && rank <= 3
  const isFirstCard = rank === 1

  return (
    <Link href={casino.url} target="_blank" rel="noopener noreferrer" className="block">
      <Card
        className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border ${
          isFirstCard
            ? "border-[#d4af37] shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/30"
            : "border-[#d4af37]/30 hover:border-[#d4af37]/60"
        }`}
      >
        {showBadge && (
          <Badge
            className={`absolute top-0 left-0 font-bold px-4 py-1.5 rounded-none rounded-br-lg z-10 border-none text-[#0a0a0a] ${
              isFirstCard
                ? "bg-gradient-to-r from-[#d4af37] to-[#f4d03f] shadow-lg"
                : "bg-gradient-to-r from-[#d4af37] to-[#c9a961]"
            }`}
          >
            {getBadgeText(rank)}
          </Badge>
        )}

        <div className="p-4 md:p-6 flex flex-col h-full md:py-0 py-0">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-3">
            {/* Row 1: Logo and Bonus */}
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className="flex justify-center bg-[#0a0a0a] p-2 rounded-md border border-[#d4af37]/20">
                <Image
                  width={200}
                  height={160}
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-28 h-20 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-400 mb-1">Bonus dobrodošlice</p>
                <p className="font-bold text-white leading-tight text-base">{casino.bonus}</p>
              </div>
            </div>

            {/* Row 2: Rating, Stars+Reviews, Button */}
            <div className="grid grid-cols-3 gap-2 items-center">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <span className="text-lg font-bold text-[#d4af37]">{casino.rating}</span>
                </div>
              </div>
              <div className="text-center flex flex-col items-center">
                <StarRating rating={casino.rating} />
                <p className="text-[10px] text-gray-400 mt-0.5">({casino.votes})</p>
              </div>
              <div className="flex justify-center">
                <Button
                  className={`hover:opacity-90 font-semibold px-3 py-2 text-xs h-auto w-full shadow-lg ${
                    isFirstCard
                      ? "bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#0a0a0a] hover:from-[#f4d03f] hover:to-[#d4af37]"
                      : "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#f4d03f]"
                  }`}
                >
                  Igraj sada
                </Button>
              </div>
            </div>

            {/* Row 3: Terms */}
            <div className="text-[8px] text-gray-500 text-center pt-2 border-t border-[#d4af37]/20">
              <p>{casino.terms}</p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:flex-col">
            <div className="flex items-center justify-between gap-6 flex-1">
              <div className="flex items-center gap-6">
                <Image
                  width={200}
                  height={160}
                  src={casino.logo || "/placeholder.svg"}
                  alt={`${casino.name} logo`}
                  className="w-40 h-32 object-contain bg-[#0a0a0a] rounded-md border border-[#d4af37]/20 p-2"
                />
              </div>

              <div className="flex-1 flex flex-col items-center text-center gap-2">
                <p className="text-sm text-gray-400 font-medium">Bonus dobrodošlice</p>
                <p className="text-xl md:text-2xl font-bold text-white">{casino.bonus}</p>
              </div>

              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <span className="font-bold text-[#d4af37] text-3xl">{casino.rating}</span>
                  </div>
                  <StarRating rating={casino.rating} />
                  <p className="text-xs text-gray-400 mt-1">({casino.votes} recenzija)</p>
                </div>

                <Button
                  className={`hover:opacity-90 font-semibold px-6 py-2.5 h-auto shadow-lg transition-all ${
                    isFirstCard
                      ? "bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#0a0a0a] hover:from-[#f4d03f] hover:to-[#d4af37] hover:scale-105"
                      : "bg-[#d4af37] text-[#0a0a0a] hover:bg-[#f4d03f]"
                  }`}
                >
                  Recenzija <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-xs text-gray-500 text-center mt-auto border-t border-[#d4af37]/20 pt-0">
              <p>{casino.terms}</p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  )
}
