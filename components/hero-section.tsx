import {  TrendingUp, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"
export function HeroSection() {
  const currentDate = new Date()
  const monthNames = [
    "siječnja",
    "veljače",
    "ožujka",
    "travnja",
    "svibnja",
    "lipnja",
    "srpnja",
    "kolovoza",
    "rujna",
    "listopada",
    "studenoga",
    "prosinca",
  ]

  return (
    <section className="relative overflow-hidden border-b border-[#d4af37]/30 h-[300px]">
      <div className="absolute inset-0 z-0">
        <img src="/luxury-casino-interior-with-poker-table-cards-chip.jpg" alt="Casino background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-[#1a1410]/85" />
      </div>

      <div className="container mx-auto px-4 md:px-6 h-full relative z-10">
        <div className="flex flex-col justify-center items-center h-full text-center">
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Najbolja Kasina u <span className="text-[#d4af37]">Hrvatskoj</span>
            </h1>

            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Stručno provjerena i objektivno ocjenjena kasina za hrvatske igrače
            </p>

            <div className="flex items-center justify-center gap-6 md:gap-8 pt-2">
              <div className="flex items-center gap-2">
                <Image src="/flag.png" alt="Logo" width={40} height={40} />
                <span className="text-white font-semibold text-sm">100% Licencirano</span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-[#d4af37]" />
                <span className="text-white font-semibold text-sm">60+ Recenzija</span>
              </div>

              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#d4af37]" />
                <span className="text-white font-semibold text-sm">12+ Godina</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#d4af37]" />
                <span className="text-white font-semibold text-sm">500K+ Korisnika</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse" />
              <span>
                Ažurirano: {currentDate.getDate()}. {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
